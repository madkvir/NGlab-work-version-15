import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NeuroGen Lab - AI Solutions Platform",
  "description": "Discover our comprehensive suite of AI-powered tools and solutions for business automation and growth",
  "url": `${baseUrl}/hero`,
  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  },
  "about": {
    "@type": "Thing",
    "name": "AI Business Solutions",
    "description": "Advanced AI tools and integrations for business automation and enhancement"
  },
  "offers": {
    "@type": "AggregateOffer",
    "numberOfItems": "10",
    "lowPrice": "0",
    "highPrice": "999",
    "priceCurrency": "USD"
  }
};

export const metadata: Metadata = {
  title: "NeuroGen Lab - AI-Powered Business Solutions",
  description: "Transform your business with our comprehensive suite of AI tools. Discover intelligent automation, analytics, and integration solutions for enhanced productivity.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-hero.jpg',
  },
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
  openGraph: {
    type: 'website',
    title: "NeuroGen Lab - Leading AI Solutions Platform",
    description: "Discover our comprehensive suite of AI-powered tools and solutions for business growth and automation.",
    url: `${baseUrl}/hero`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-hero.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Solutions",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NeuroGen Lab - AI Solutions Platform",
    description: "Transform your business with our comprehensive suite of AI tools and solutions.",
    images: ['/assets/images/og-hero.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/hero`,
    languages: {
      'en': `${baseUrl}/hero`,
      'de': `${baseUrl}/de/hero`,
      'es': `${baseUrl}/es/hero`,
      'ru': `${baseUrl}/ru/hero`,
      'uk': `${baseUrl}/uk/hero`
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

export default function HeroLayout({
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