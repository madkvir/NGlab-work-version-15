import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab HubSpot Integration",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered HubSpot integration for enhanced CRM and marketing automation",
  "url": `${baseUrl}/tools/hubspot`,
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
  "applicationSubCategory": "CRMEnhancement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "215"
  }
};

export const metadata: Metadata = {
  title: "HubSpot Integration | NeuroGen Lab - Intelligent CRM Enhancement",
  description: "Enhance your HubSpot experience with AI technology. Smart automation, analytics, and advanced features for better customer relationship management.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-hubspot.jpg',
  },
  keywords: [
    "hubspot integration",
    "crm enhancement",
    "ai automation",
    "customer management",
    "lead scoring",
    "data analytics",
    "business automation",
    "marketing automation",
    "NeuroGen Lab hubspot",
    "AI CRM solution"
  ],
  openGraph: {
    type: 'website',
    title: "HubSpot Integration - Intelligent CRM Enhancement | NeuroGen Lab",
    description: "Transform your HubSpot experience with AI-powered automation. Smart CRM features and advanced analytics for business growth.",
    url: `${baseUrl}/tools/hubspot`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-hubspot.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab HubSpot Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HubSpot Integration - Smart CRM Enhancement",
    description: "Enhance your CRM capabilities with AI technology. Intelligent automation and analytics.",
    images: ['/assets/images/og-hubspot.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/hubspot`,
    languages: {
      'en': `${baseUrl}/en/tools/hubspot`,
      'de': `${baseUrl}/de/tools/hubspot`,
      'es': `${baseUrl}/es/tools/hubspot`,
      'ru': `${baseUrl}/ru/tools/hubspot`,
      'uk': `${baseUrl}/uk/tools/hubspot`
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

export default function HubSpotLayout({
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