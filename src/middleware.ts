import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const fallbackLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: fallbackLocale,
});

export function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname, hostname } = url;

  if (pathname.startsWith("/api") || pathname.includes("_next")) {
    return NextResponse.next();
  }

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const urlLocale = locales.find((locale) => pathname.startsWith(`/${locale}`));

  if (urlLocale) {
    const res = intlMiddleware(req);
    res.cookies.set("NEXT_LOCALE", urlLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  if (!urlLocale) {
    const effectiveLocale = locales.includes(cookieLocale || "") ? cookieLocale : fallbackLocale;
    url.pathname = `/${effectiveLocale}${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  let needsRedirect = false;

  if (!req.headers.get("x-forwarded-proto")?.includes("https")) {
    url.protocol = "https:";
    needsRedirect = true;
  }

  if (hostname.startsWith("www.")) {
    url.hostname = hostname.replace(/^www\./, "");
    needsRedirect = true;
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(req);
}

export default middlewareWithRedirect;

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*).*)"],
};
