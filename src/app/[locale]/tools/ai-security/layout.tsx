import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Security",
  "applicationCategory": "BusinessApplication, SecurityApplication",
  "description": "AI-powered security solution for enhanced threat detection and intelligent system protection",
  "url": `${baseUrl}/tools/ai-security`,
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
    "ratingCount": "185"
  }
};

export const metadata: Metadata = {
  title: "AI Security | NeuroGen Lab - Intelligent Protection",
  description: "Transform your security infrastructure with AI-powered protection. Advanced threat detection, real-time monitoring, and intelligent system security for comprehensive defense.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI security",
    "threat detection",
    "system protection",
    "security monitoring",
    "intelligent defense",
    "cybersecurity",
    "AI protection",
    "security solutions",
    "NeuroGen Lab security",
    "enterprise security"
  ],
  openGraph: {
    type: 'website',
    title: "AI Security - Intelligent Protection | NeuroGen Lab",
    description: "Transform your security infrastructure with AI-powered protection. Advanced threat detection and intelligent defense.",
    url: `${baseUrl}/tools/ai-security`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-security.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Security",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Security - Smart System Protection",
    description: "Transform your security infrastructure with AI-powered protection and intelligent defense.",
    images: [`${baseUrl}/assets/images/og-ai-security.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/ai-security'),
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