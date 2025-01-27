import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Best Search",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered intelligent search solution for enhanced data discovery and retrieval",
  "url": `${baseUrl}/tools/best-search`,
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
  "applicationSubCategory": "SearchEngine",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "230"
  }
};

export const metadata: Metadata = {
  title: "Best Search | NeuroGen Lab - Intelligent Search Solution",
  description: "Transform your data discovery with AI-powered search technology. Advanced semantic search, natural language processing, and intelligent indexing for superior results.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-best-search.jpg',
  },
  keywords: [
    "AI search",
    "semantic search",
    "intelligent search",
    "data discovery",
    "enterprise search",
    "search solution",
    "natural language search",
    "advanced indexing",
    "NeuroGen Lab search",
    "AI-powered search"
  ],
  openGraph: {
    type: 'website',
    title: "Best Search - Intelligent Search Solution | NeuroGen Lab",
    description: "Revolutionize your data discovery with AI-powered search technology. Advanced semantic understanding and intelligent results ranking.",
    url: `${baseUrl}/tools/best-search`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-best-search.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Best Search",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Search - Smart Search Technology",
    description: "Experience next-generation search capabilities with AI-powered technology. Precise, intelligent, and intuitive.",
    images: ['/assets/images/og-best-search.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/best-search`,
    languages: {
      'en': `${baseUrl}/tools/best-search`,
      'de': `${baseUrl}/de/tools/best-search`,
      'es': `${baseUrl}/es/tools/best-search`,
      'ru': `${baseUrl}/ru/tools/best-search`,
      'uk': `${baseUrl}/uk/tools/best-search`
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

export default function BestSearchLayout({
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