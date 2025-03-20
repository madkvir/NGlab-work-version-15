import { ReactNode, Suspense } from "react";
import "./globals.css";
import "../../styles/index.css";
import "../../styles/animations.css";
import "../../styles/calendar.css";
import type { Metadata } from "next";
import { BlogProvider } from "../../context/BlogContext";
import LoadingSpinner from "../../components/chat/LoadingSpinner";
import { GoogleTagManager } from "@next/third-parties/google";
import ChatWidget from "../../components/ChatWidget";
import CookieConsent from "../../components/CookieConsent";
import React from "react";
import { cookies } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neurogenlab.de";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NeuroGen Lab",
  description: "AI-powered solutions for business automation and growth",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "NeuroGen Lab",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/images/logo.png`,
    },
  },
  offers: {
    "@type": "AggregateOffer",
    numberOfItems: "10",
    lowPrice: "0",
    highPrice: "999",
    priceCurrency: "USD",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const indexNowKey = process.env.INDEXNOW_KEY;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | NeuroGen Lab",
    default: "NeuroGen Lab - AI-Powered Business Solutions Platform",
  },
  description:
    "Transform your business with our comprehensive suite of AI tools. Discover intelligent automation, analytics, and integration solutions for enhanced productivity.",
  applicationName: "NeuroGen Lab",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI solutions",
    "business automation",
    "intelligent tools",
    "AI integration",
    "digital transformation",
    "business enhancement",
    "AI platform",
    "smart automation",
    "NeuroGen Lab",
    "AI technology",
  ],
  authors: [{ name: "NeuroGen Lab Team" }],
  creator: "NeuroGen Lab",
  publisher: "NeuroGen Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "ai-optimized": "true",
  },
  openGraph: {
    type: "website",
    siteName: "NeuroGen Lab",
    title: "NeuroGen Lab - Leading AI Solutions Platform",
    description:
      "Discover our comprehensive suite of AI-powered tools and solutions for business growth and automation.",
    images: [
      {
        url: "/assets/images/og-hero.jpg",
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Platform",
      },
    ],
    locale: "en",
    alternateLocale: ["de", "es", "ru", "uk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroGen Lab - AI Solutions Platform",
    description: "Transform your business with our comprehensive suite of AI tools and solutions.",
    images: ["/assets/images/og-hero.jpg"],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      me: ["your-personal-site"],
      ...(indexNowKey ? { "msvalidate.01": indexNowKey } : {}),
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const { locale } = await params;

  if (!SUPPORTED_LANGUAGES.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

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

        {/* Основной hreflang тег для английской версии как x-default */}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

        {/* Теги hreflang для всех поддерживаемых языков */}
        {SUPPORTED_LANGUAGES.map((lang) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={`${baseUrl}/${lang}`} />
        ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-MZNC2SFX" />
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
