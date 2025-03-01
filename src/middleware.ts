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
  
  // Комбинированный редирект: HTTP -> HTTPS, WWW -> non-WWW, добавление локали
  if (!req.headers.get('x-forwarded-proto')?.includes('https') || 
      hostname.startsWith('www.') || 
      !locales.some(locale => path.startsWith(`/${locale}`))) {
    
    const newHostname = hostname.replace('www.', '');
    const newPath = locales.some(locale => path.startsWith(`/${locale}`)) 
      ? path 
      : `/${defaultLocale}${path === '/' ? '' : path}`;
    
    const newUrl = new URL(`https://${newHostname}${newPath}`);
    return NextResponse.redirect(newUrl.href, { status: 301 });
  }

  return middleware(req);
}

export default middlewareWithRedirect;

export const config = {
  matcher: [
    "/((?!api|static|.*\\.|_next|favicon.ico).*)",
    "/"
  ],
};