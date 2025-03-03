import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab HubSpot Integration",
  "applicationCategory": "BusinessApplication, MarketingApplication",
  "description": "AI-powered HubSpot integration for enhanced marketing automation and customer relationship management",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "155"
  }
};

export const metadata: Metadata = {
  title: "HubSpot Integration | NeuroGen Lab - Marketing Automation",
  description: "Transform your marketing and CRM with AI-powered HubSpot integration. Automate campaigns, enhance customer relationships, and boost conversion rates.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "HubSpot integration",
    "marketing automation",
    "CRM integration",
    "lead management",
    "campaign automation",
    "customer analytics",
    "AI marketing",
    "sales automation",
    "NeuroGen Lab HubSpot",
    "marketing solution"
  ],
  openGraph: {
    type: 'website',
    title: "HubSpot Integration - Marketing Automation | NeuroGen Lab",
    description: "Transform your marketing strategy with AI-powered HubSpot integration. Enhanced automation and customer management.",
    url: `${baseUrl}/tools/hubspot`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-hubspot.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab HubSpot Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "HubSpot Integration - Smart Marketing Automation",
    description: "Transform your marketing and CRM with AI-powered HubSpot integration and automation.",
    images: [`${baseUrl}/assets/images/og-hubspot.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/hubspot'),
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