import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const fallbackLocale = "en";

const middleware = createMiddleware({
  locales,
  defaultLocale: fallbackLocale,
});

export function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  let hostname = url.hostname;
  let path = url.pathname;

  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const urlLocale = locales.find((locale) => path.startsWith(`/${locale}`));

  if (urlLocale && urlLocale !== cookieLocale) {
    const res = middleware(req);
    res.cookies.set("NEXT_LOCALE", urlLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  if (hostname === "localhost") {
    if (!urlLocale) {
      const effectiveLocale = locales.includes(cookieLocale || "") ? cookieLocale : fallbackLocale;
      url.pathname = `/${effectiveLocale}${path}`;
      return NextResponse.redirect(url, 301);
    }
    return middleware(req);
  }

  let needsRedirect = false;

  if (!req.headers.get("x-forwarded-proto")?.includes("https")) {
    url.protocol = "https:";
    needsRedirect = true;
  }

  if (hostname.startsWith("www.")) {
    hostname = hostname.replace(/^www\./, "");
    url.hostname = hostname;
    needsRedirect = true;
  }

  if (!urlLocale) {
    const effectiveLocale = locales.includes(cookieLocale || "") ? cookieLocale : fallbackLocale;
    url.pathname = `/${effectiveLocale}${path === "/" ? "" : path}`;
    needsRedirect = true;
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return middleware(req);
}

export default middlewareWithRedirect;

export const config = {
  matcher: ["/((?!api|static|_next|.*\\..*|favicon.ico).*)"],
};
