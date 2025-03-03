import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Custom Development
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Custom Development",
  "applicationCategory": "BusinessApplication, DevelopmentApplication",
  "description": "AI-powered custom software development solutions for unique business needs and digital transformation",
  "url": `${baseUrl}/tools/custom-development`,
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
    "ratingValue": "4.9",
    "ratingCount": "190"
  }
};

export const metadata: Metadata = {
  title: "Custom Development | NeuroGen Lab - Tailored Software Solutions",
  description: "Transform your business with custom AI-powered software solutions. Tailored development services for unique requirements and digital innovation.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Custom development",
    "software solutions",
    "tailored applications",
    "AI development",
    "digital transformation",
    "custom software",
    "business solutions",
    "technology innovation",
    "NeuroGen Lab development",
    "enterprise solutions"
  ],
  openGraph: {
    type: 'website',
    title: "Custom Development - Tailored Software Solutions | NeuroGen Lab",
    description: "Transform your business with custom AI-powered software development. Innovative solutions for unique requirements.",
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
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom Development - Smart Software Solutions",
    description: "Transform your business with custom AI-powered software development and innovation.",
    images: [`${baseUrl}/assets/images/og-custom-development.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/custom-development'),
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