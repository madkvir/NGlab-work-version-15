import { ReactNode, Suspense } from "react";
import Head from "next/head";
import "./globals.css";
import "../styles/index.css";
import "../styles/animations.css";
import "../styles/calendar.css";
import type { Metadata, Viewport } from "next";
import { BlogProvider } from "../context/BlogContext";
import LoadingSpinner from "../components/chat/LoadingSpinner";
import { GoogleTagManager } from "@next/third-parties/google";
import ChatWidget from "../components/ChatWidget";
import CookieConsent from "../components/CookieConsent";
import React from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NeuroGen Lab",
  "description": "AI-powered solutions for business automation and growth",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/images/logo.png`
    }
  },
  "offers": {
    "@type": "AggregateOffer",
    "numberOfItems": "10",
    "lowPrice": "0",
    "highPrice": "999",
    "priceCurrency": "USD"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | NeuroGen Lab',
    default: 'NeuroGen Lab - AI-Powered Business Solutions Platform',
  },
  description: "Transform your business with our comprehensive suite of AI tools. Discover intelligent automation, analytics, and integration solutions for enhanced productivity.",
  applicationName: 'NeuroGen Lab',
  referrer: 'origin-when-cross-origin',
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
    "AI technology"
  ],
  authors: [{ name: 'NeuroGen Lab Team' }],
  creator: 'NeuroGen Lab',
  publisher: 'NeuroGen Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'ai-optimized': 'true',
  },
  openGraph: {
    type: 'website',
    siteName: 'NeuroGen Lab',
    title: 'NeuroGen Lab - Leading AI Solutions Platform',
    description: 'Discover our comprehensive suite of AI-powered tools and solutions for business growth and automation.',
    images: [
      {
        url: '/assets/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuroGen Lab Platform',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroGen Lab - AI Solutions Platform',
    description: 'Transform your business with our comprehensive suite of AI tools and solutions.',
    images: ['/assets/images/og-home.jpg'],
    creator: '@neurogenlab',
    site: '@neurogenlab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    other: {
      me: ['your-personal-site'],
    },
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html lang={initialLanguage}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="alternate" hrefLang="x-default" href="https://neurogenlab.de/" />
        {/* <link rel="alternate" hrefLang="en" href="https://neurogenlab.de/en/" /> */}
        <link rel="alternate" hrefLang="de" href="https://neurogenlab.de/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-MZNC2SFX" />
      <body>
        {/* <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZNC2SFX');
            `,
          }}
        /> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZNC2SFX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

        <div id="root">
          <BlogProvider>
            <LanguageProvider initialLanguage={initialLanguage}>
              <Suspense fallback={<LoadingSpinner />}>
                {children}
                <CookieConsent />
                <ChatWidget />
              </Suspense>
            </LanguageProvider>
          </BlogProvider>
        </div>
      </body>
    </html>
  );
}
