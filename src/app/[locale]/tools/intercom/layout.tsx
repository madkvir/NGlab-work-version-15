import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Intercom Integration",
  "applicationCategory": "BusinessApplication",
  "description": "AI-enhanced Intercom integration for improved customer support and engagement",
  "url": `${baseUrl}/tools/intercom`,
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
  "operatingSystem": "All",
  "applicationSubCategory": "CustomerSupport",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "210"
  }
};

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - AI Customer Support",
  description: "Enhance your Intercom customer support with AI automation. Smart responses, automated workflows, and intelligent customer engagement solutions.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-intercom.jpg',
  },
  keywords: [
    "Intercom integration",
    "AI customer support",
    "customer engagement",
    "support automation",
    "Intercom bot",
    "customer service",
    "automated responses",
    "business communication",
    "NeuroGen Lab Intercom",
    "AI support solution"
  ],
  openGraph: {
    type: 'website',
    title: "Intercom Integration - AI Customer Support | NeuroGen Lab",
    description: "Transform your customer support with AI-powered Intercom integration. Smart automation and enhanced customer engagement tools.",
    url: `${baseUrl}/tools/intercom`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-intercom.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Intercom Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Intercom Integration - Smart Customer Support",
    description: "Enhance your customer support with AI-powered Intercom integration. Intelligent automation for better engagement.",
    images: ['/assets/images/og-intercom.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/intercom`,
    languages: {
      'en': `${baseUrl}/en/tools/intercom`,
      'de': `${baseUrl}/de/tools/intercom`,
      'es': `${baseUrl}/es/tools/intercom`,
      'ru': `${baseUrl}/ru/tools/intercom`,
      'uk': `${baseUrl}/uk/tools/intercom`
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
  authors: [{ name: "NeuroGen Lab Team" }],
};

export default function IntercomLayout({
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