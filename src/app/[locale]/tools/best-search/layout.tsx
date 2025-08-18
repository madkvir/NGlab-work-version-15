import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Best Search",
  "applicationCategory": "BusinessApplication, SearchApplication",
  "description": "AI-powered intelligent search solution for enhanced information discovery and data retrieval",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "180"
  }
};

export const metadata: Metadata = {
  title: "Best Search | NeuroGen Lab - Intelligent Search Solutions",
  description: "Transform your information discovery with AI-powered search. Advanced algorithms, semantic understanding, and intelligent data retrieval for enhanced search experiences.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Best search",
    "intelligent search",
    "semantic search",
    "data retrieval",
    "search optimization",
    "AI search",
    "advanced search",
    "search solutions",
    "NeuroGen Lab search",
    "enterprise search"
  ],
  openGraph: {
    type: 'website',
    title: "Best Search - Intelligent Search Solutions | NeuroGen Lab",
    description: "Transform your information discovery with AI-powered search technology. Enhanced data retrieval and semantic understanding.",
    url: `${baseUrl}/tools/best-search`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-best-search.jpg`,
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
    title: "Best Search - Smart Information Discovery",
    description: "Transform your search capabilities with AI-powered technology and intelligent data retrieval.",
    images: [`${baseUrl}/assets/images/og-best-search.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
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

export default function Layout({
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