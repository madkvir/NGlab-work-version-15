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
  let hostname = url.hostname;
  let path = url.pathname;

  if (hostname === "localhost") {
    if (!locales.some((locale) => path.startsWith(`/${locale}`))) {
      const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
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

  if (!locales.some((l) => path.startsWith(`/${l}`))) {
    const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
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
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico).*)", "/"],
};
