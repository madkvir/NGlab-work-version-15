import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const defaultLocale = "en";

const middleware = createMiddleware({
  locales,
  defaultLocale,
});

export function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = url.hostname;
  const path = url.pathname;
  
  // Редирект с HTTP на HTTPS и WWW на non-WWW
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(url.href.replace('www.', ''));
    return NextResponse.redirect(newUrl.href, { status: 301 });
  }

  // Обработка языковых редиректов только после WWW редиректа
  if (locales.some((locale) => path.startsWith(`/${locale}`))) {
    return middleware(req);
  }

  // Редирект на дефолтную локаль
  const newUrl = new URL(`/${defaultLocale}${path}`, url.origin);
  return NextResponse.redirect(newUrl.href, { status: 301 });
}

export default middlewareWithRedirect;

export const config = {
  matcher: [
    // Исключаем файлы и API роуты
    "/((?!api|static|.*\\.|_next|favicon.ico).*)",
  ],
};
