import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  "name": "NeuroGen Lab Smart Tables",
  "applicationCategory": "BusinessApplication, DataManagementApplication",
  "description": "AI-powered table management for efficient data organization and analysis",
  "url": `${baseUrl}/tools/tables`,
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "130"
  }
};
export const metadata: Metadata = {
  title: "Smart Tables | NeuroGen Lab - Intelligent Data Management",
  description: "Transform your data management with AI-powered table solutions. Advanced sorting, filtering, and analytics for efficient organization.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "smart tables",
    "data management",
    "data organization",
    "table analytics",
    "data sorting",
    "data filtering",
    "business data",
    "data visualization",
    "NeuroGen Lab tables",
    "AI data solution"
  ],
  openGraph: {
    type: 'website',
    title: "Smart Tables - Intelligent Data Management | NeuroGen Lab",
    description: "Transform your data management with AI-powered table solutions. Advanced features for efficient organization.",
    url: `${baseUrl}/tools/tables`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-tables.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Smart Tables",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Tables - Intelligent Data Management",
    description: "Transform your data management with AI-powered table solutions and analytics.",
    images: [`${baseUrl}/assets/images/og-tables.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/tables`,
    languages: {
      'en': `${baseUrl}/tools/tables`,
      'de': `${baseUrl}/de/tools/tables`,
      'es': `${baseUrl}/es/tools/tables`,
      'ru': `${baseUrl}/ru/tools/tables`,
      'uk': `${baseUrl}/uk/tools/tables`
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
export default function TablesLayout({
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