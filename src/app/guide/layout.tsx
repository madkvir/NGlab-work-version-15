import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata: Metadata = {
  title: "Implementation Guide | NeuroGen Lab",
  description: "Пошаговое руководство по внедрению AI решений в ваш бизнес",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI implementation",
    "business guide",
    "AI integration",
    "implementation steps",
    "AI business solutions",
    "NeuroGen Lab guide",
    "AI automation guide",
    "business transformation",
    "AI implementation process",
    "digital transformation"
  ],
  openGraph: {
    type: 'website',
    title: "AI Implementation Guide | NeuroGen Lab",
    description: "Comprehensive guide for implementing AI solutions in your business",
    url: `${baseUrl}/guide`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-guide.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Implementation Guide",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  alternates: {
    canonical: `${baseUrl}/guide`,
    languages: {
      'en': `${baseUrl}/guide`,
      'de': `${baseUrl}/de/guide`,
      'es': `${baseUrl}/es/guide`,
      'ru': `${baseUrl}/ru/guide`,
      'uk': `${baseUrl}/uk/guide`
    },
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

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 