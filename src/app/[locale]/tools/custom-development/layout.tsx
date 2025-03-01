import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Custom Development
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NeuroGen Lab Custom Development",
  "serviceType": "Software Development",
  "description": "Custom software development solutions with AI integration capabilities",
  "url": `${baseUrl}/tools/custom-development`,
  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  },
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "180"
  }
};

export const metadata: Metadata = {
  title: "Custom Development | NeuroGen Lab - Tailored Software Solutions",
  description: "Transform your business with custom software development. Get tailored solutions that perfectly match your needs and drive growth.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "custom development",
    "software solutions",
    "web development",
    "mobile apps",
    "enterprise software",
    "digital transformation",
    "AI integration",
    "custom software",
    "bespoke solutions",
    "NeuroGen Lab development"
  ],
  openGraph: {
    type: 'website',
    title: "Custom Development - Tailored Software Solutions | NeuroGen Lab",
    description: "Transform your business with custom software development solutions. Get AI-powered, tailored applications.",
    url: `${baseUrl}/tools/custom-development`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-custom-development.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Custom Development",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom Development - Tailored Software Solutions",
    description: "Transform your business with custom software",
    images: [`${baseUrl}/assets/images/og-custom-development.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/custom-development`,
    languages: {
      'en': `${baseUrl}/en/tools/custom-development`,
      'de': `${baseUrl}/de/tools/custom-development`,
      'es': `${baseUrl}/es/tools/custom-development`,
      'ru': `${baseUrl}/ru/tools/custom-development`,
      'uk': `${baseUrl}/uk/tools/custom-development`
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

export default function CustomDevelopmentLayout({
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