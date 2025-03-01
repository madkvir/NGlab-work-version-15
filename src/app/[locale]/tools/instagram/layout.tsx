import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Instagram Integration",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered Instagram automation and management solution for business growth",
  "url": `${baseUrl}/tools/instagram`,
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
  "applicationSubCategory": "SocialMediaManagement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "190"
  }
};

export const metadata: Metadata = {
  title: "Instagram Integration | NeuroGen Lab - AI Social Media Management",
  description: "Optimize your Instagram presence with AI-powered automation. Smart content management, engagement analytics, and automated responses for business growth.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-instagram.jpg',
  },
  keywords: [
    "Instagram automation",
    "social media management",
    "AI Instagram tool",
    "business Instagram",
    "Instagram analytics",
    "content automation",
    "social engagement",
    "Instagram marketing",
    "NeuroGen Lab Instagram",
    "AI social media"
  ],
  openGraph: {
    type: 'website',
    title: "Instagram Integration - AI Social Media Management | NeuroGen Lab",
    description: "Transform your Instagram business presence with AI automation. Smart content management, analytics, and engagement tools for growth.",
    url: `${baseUrl}/tools/instagram`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-instagram.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Instagram Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Instagram Integration - Smart Social Media Solution",
    description: "Enhance your Instagram presence with AI-powered automation. Intelligent content management and engagement tools.",
    images: ['/assets/images/og-instagram.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/instagram`,
    languages: {
      'en': `${baseUrl}/en/tools/instagram`,
      'de': `${baseUrl}/de/tools/instagram`,
      'es': `${baseUrl}/es/tools/instagram`,
      'ru': `${baseUrl}/ru/tools/instagram`,
      'uk': `${baseUrl}/uk/tools/instagram`
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

export default function InstagramLayout({
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