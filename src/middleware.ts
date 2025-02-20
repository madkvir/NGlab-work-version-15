import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ["en", "de", "uk", "ru", "es"];
const defaultLocale = "en";

export default function middleware(request: NextRequest) {
  // Получаем текущий путь
  const pathname = request.nextUrl.pathname;
  
  // Проверяем, является ли это запросом смены языка
  if (pathname.includes('/contacts')) {
    // Добавляем заголовки для предотвращения кеширования
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
    return response;
  }

  return NextResponse.next();
}

export function middlewareWithRedirect(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return middleware(req);
  }

  const newUrl = new URL(`/${defaultLocale}${pathname}`, req.nextUrl.origin);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
