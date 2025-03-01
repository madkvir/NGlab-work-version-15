import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const defaultLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = url.hostname;
  const path = url.pathname;
  
  // Проверяем, нужно ли изменять URL
  let changed = false;
  let newUrl = new URL(url.href);

  // ✅ Убираем www если есть
  if (hostname.startsWith("www.")) {
    hostname = hostname.replace("www.", "");
    newUrl.hostname = hostname;
    changed = true;
  }

  // ✅ Принудительно используем HTTPS
  if (url.protocol !== "https:") {
    newUrl.protocol = "https:";
    changed = true;
  }

  // ✅ Добавляем языковой префикс, если его нет (но доверяем `next-intl/middleware`)
  if (!locales.some((locale) => path.startsWith(`/${locale}`))) {
    newUrl.pathname = `/${defaultLocale}${path}`;
    changed = true;
  }

  // ✅ Делаем единый 301-редирект, если URL изменился
  if (changed) {
    return NextResponse.redirect(newUrl.href, 301);
  }

  // ✅ Отдаем управление `next-intl/middleware`
  return intlMiddleware(req);
}

export default middlewareWithRedirect;

export const config = {
  matcher: [
    // Исключаем файлы и API-роуты
    "/((?!api|static|.*\\.|_next|favicon.ico).*)",
  ],
};
