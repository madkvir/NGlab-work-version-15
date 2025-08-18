import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de", "uk", "ru", "es"];
const fallbackLocale = "en";

const bots = [
  "googlebot",
  "yahoo! slurp",
  "bingbot",
  "yandex",
  "baiduspider",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest/0.",
  "developers.google.com/+/web/snippet",
  "slackbot",
  "vkshare",
  "w3c_validator",
  "redditbot",
  "applebot",
  "whatsapp",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "pinterestbot",
  "bitrix link preview",
  "xing-contenttabreceiver",
  "chrome-lighthouse",
  "telegrambot",
  "OAI-SearchBot",
  "ChatGPT",
  "GPTBot",
  "Perplexity",
  "ClaudeBot",
  "Amazonbot",
  "integration-test", // Integration testing
];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: fallbackLocale,
});

export async function middlewareWithRedirect(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname, hostname } = url;

  const userAgent = req.headers.get("user-agent");
  const isBot = userAgent && bots.some((bot) => userAgent.toLowerCase().includes(bot));

  const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN;

  if (isBot && PRERENDER_TOKEN) {
    const newURL = `http://service.prerender.io/${req.url}`;
    const newHeaders = new Headers(req.headers);
    newHeaders.set("X-Prerender-Token", PRERENDER_TOKEN);
    newHeaders.set("X-Prerender-Int-Type", "NextJS");

    try {
      const res = await fetch(
        new Request(newURL, {
          headers: newHeaders,
          redirect: "manual",
        })
      );

      const responseHeaders = new Headers(res.headers);
      responseHeaders.set("X-Redirected-From", req.url);

      // Create a ReadableStream from the response body
      const { readable, writable } = new TransformStream();
      res.body?.pipeTo(writable);

      const response = new NextResponse(readable, {
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
      });

      return response;
    } catch (error) {
      return NextResponse.next();
    }
  }

  if (pathname.startsWith("/api") || pathname.includes("_next")) {
    return NextResponse.next();
  }

  // Проверяем на дублирование локали (например, /en/en/guide)
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length >= 2 && pathSegments[0] === pathSegments[1] && locales.includes(pathSegments[0] as any)) {
    // Удаляем дублированную локаль
    const correctedPath = `/${pathSegments[0]}/${pathSegments.slice(2).join('/')}`;
    url.pathname = correctedPath;
    return NextResponse.redirect(url, 301);
  }

  // Проверяем на множественное дублирование (например, /en/en/en/guide)
  if (pathSegments.length >= 3) {
    const firstSegment = pathSegments[0];
    const duplicateCount = pathSegments.filter(segment => segment === firstSegment).length;
    if (duplicateCount > 1 && locales.includes(firstSegment as any)) {
      // Удаляем все дублированные сегменты, оставляя только один
      const remainingSegments = pathSegments.filter(segment => segment !== firstSegment);
      const correctedPath = `/${firstSegment}/${remainingSegments.join('/')}`;
      url.pathname = correctedPath;
      return NextResponse.redirect(url, 301);
    }
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
