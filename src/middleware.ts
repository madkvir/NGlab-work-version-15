import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const defaultLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

// Проверка локального окружения
const isLocalhost = (hostname: string) => {
  return hostname === 'localhost' || 
         hostname === '127.0.0.1' || 
         hostname.includes('.local') ||
         hostname.includes('.test');
};

export function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = url.hostname;
  const path = url.pathname;
  
  // Для локальной разработки только добавляем языковой префикс
  if (isLocalhost(hostname)) {
    if (!locales.some((locale) => path.startsWith(`/${locale}`))) {
      return NextResponse.redirect(new URL(`/${defaultLocale}${path}`, url));
    }
    return intlMiddleware(req);
  }
  
  // Для продакшена делаем все редиректы за один раз
  let finalUrl = new URL(url.href);
  
  if (hostname.startsWith("www.")) {
    finalUrl.hostname = hostname.replace("www.", "");
  }
  
  if (url.protocol !== "https:") {
    finalUrl.protocol = "https:";
  }
  
  if (!locales.some((locale) => path.startsWith(`/${locale}`))) {
    finalUrl.pathname = `/${defaultLocale}${path}`;
  }
  
  // Делаем редирект только если URL действительно изменился
  if (finalUrl.href !== url.href) {
    return NextResponse.redirect(finalUrl.href, 301);
  }
  
  return intlMiddleware(req);
}

export default middlewareWithRedirect;

export const config = {
  matcher: [
    // Исключаем файлы и API-роуты
    "/((?!api|static|.*\\.|_next|favicon.ico).*)",
  ],
};
