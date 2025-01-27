import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Smart Table Solution",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered table management and data organization solution",
  "url": `${baseUrl}/tools/table`,
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
  "applicationSubCategory": "DataManagement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "185"
  }
};

export const metadata: Metadata = {
  title: "Smart Table | NeuroGen Lab - Intelligent Data Organization",
  description: "Transform your data management with AI-powered table solutions. Advanced sorting, filtering, and analytics for efficient data organization and analysis.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-table.jpg',
  },
  keywords: [
    "smart table",
    "data organization",
    "data management",
    "table analytics",
    "data sorting",
    "data filtering",
    "business data",
    "data visualization",
    "NeuroGen Lab table",
    "AI data management"
  ],
  openGraph: {
    type: 'website',
    title: "Smart Table - Intelligent Data Organization | NeuroGen Lab",
    description: "Transform your data management with AI-powered table solutions. Advanced features for efficient data organization.",
    url: `${baseUrl}/tools/table`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-table.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Smart Table",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Table - Intelligent Data Management",
    description: "Enhance your data organization with AI technology. Smart sorting and advanced analytics.",
    images: ['/assets/images/og-table.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/table`,
    languages: {
      'en': `${baseUrl}/tools/table`,
      'de': `${baseUrl}/de/tools/table`,
      'es': `${baseUrl}/es/tools/table`,
      'ru': `${baseUrl}/ru/tools/table`,
      'uk': `${baseUrl}/uk/tools/table`
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

export default function TableLayout({
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