import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default createMiddleware(routing);
// const PUBLIC_FILE = /\.(.*)$/;

// export async function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.startsWith("/_next") ||
//     req.nextUrl.pathname.includes("/api/") ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return;
//   }

//   if (req.nextUrl.locale === "default") {
//     const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

//     return NextResponse.redirect(
//       new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//     );
//   }
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|uk|ru|es)/:path*"],
};
