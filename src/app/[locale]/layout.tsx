import React, { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SUPPORTED_LANGUAGES } from "../../utils/generateHrefLangs";
import { cookies } from "next/headers";
import { BlogProvider } from "../../context/BlogContext";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Suspense } from "react";
import CookieConsent from "../../components/CookieConsent";
import ChatWidget from "../../components/ChatWidget";
import "./globals.css";
import "../../styles/index.css";
import "../../styles/animations.css";
import "../../styles/calendar.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NeuroGen Lab",
  "url": baseUrl,
  "description": "AI-powered business solutions and integrations",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("NEXT_LOCALE")?.value || "en";

  if (!SUPPORTED_LANGUAGES.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="root">
          <BlogProvider>
            <NextIntlClientProvider messages={messages}>
              <Suspense fallback={<LoadingSpinner />}>
                {children}
                <CookieConsent />
                <ChatWidget />
              </Suspense>
            </NextIntlClientProvider>
          </BlogProvider>
        </div>
      </body>
    </html>
  );
}
