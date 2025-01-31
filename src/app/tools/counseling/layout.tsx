import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для counseling
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NeuroGen Lab AI Counseling",
  "serviceType": "Consultation for your business",
  "description": "Professional consultation for your business",
  "url": `${baseUrl}/tools/counseling`,

  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "150"
  }
};

export const metadata: Metadata = {
  title: "AI Counseling | NeuroGen Lab - Professional Support Solutions",
  description: "Get professional advice for your business.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "ai counseling",
    "mental health support",
    "digital therapy",
    "ai support",
    "counseling solutions",
    "personal growth",
    "emotional support",
    "professional guidance",
    "mental wellness",
    "NeuroGen Lab counseling"
  ],
  openGraph: {
    type: 'website',
    title: "AI Counseling - Professional Support Solutions | NeuroGen Lab",
    description: "Get professional advice for your business.",
    url: `${baseUrl}/tools/counseling`,
    siteName: "NeuroGen Lab",

    images: [
      {
        url: `${baseUrl}/assets/images/og-counseling.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Counseling Service",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Counseling - Professional Support",
    description: "Get professional advice for your business.",
    images: [`${baseUrl}/assets/images/og-counseling.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",

  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/counseling`,
    languages: {
      'en': `${baseUrl}/tools/counseling`,
      'de': `${baseUrl}/de/tools/counseling`,
      'es': `${baseUrl}/es/tools/counseling`,
      'ru': `${baseUrl}/ru/tools/counseling`,
      'uk': `${baseUrl}/uk/tools/counseling`
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

export default function CounselingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
} 