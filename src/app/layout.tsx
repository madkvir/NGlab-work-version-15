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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://neurogenlab.de'),
  title: {
    template: '%s | NeuroGen Lab',
    default: 'NeuroGen Lab - AI Solutions & Intelligent Automation'
  },
  description: 'Transforming businesses with cutting-edge AI solutions and intelligent automation.',
  keywords: ['AI', 'Artificial Intelligence', 'Automation', 'Business Solutions', 'NeuroGen Lab'],
  authors: [{ name: 'NeuroGen Lab' }],
  creator: 'NeuroGen Lab',
  publisher: 'NeuroGen Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
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
