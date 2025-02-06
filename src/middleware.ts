import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const defaultLocale = "en";

const middleware = createMiddleware({
  locales,
  defaultLocale,
});

export function middlewareWithRedirect(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return middleware(req);
  }

  const newUrl = new URL(`/${defaultLocale}${pathname}`, req.nextUrl.origin);
  return NextResponse.redirect(newUrl);
}

export default middlewareWithRedirect;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
