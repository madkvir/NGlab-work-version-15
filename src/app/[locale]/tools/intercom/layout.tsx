import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Intercom Integration",
  "applicationCategory": "BusinessApplication, CustomerEngagementApplication",
  "description": "AI-powered Intercom integration for enhanced customer engagement and support automation",
  "url": `${baseUrl}/tools/intercom`,
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
    "ratingCount": "145"
  }
};

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - Customer Engagement",
  description: "Transform your customer engagement with AI-powered Intercom integration. Automate support, improve communication, and enhance customer satisfaction.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Intercom integration",
    "customer engagement",
    "support automation",
    "customer messaging",
    "chat automation",
    "customer service",
    "AI support",
    "business communication",
    "NeuroGen Lab Intercom",
    "engagement solution"
  ],
  openGraph: {
    type: 'website',
    title: "Intercom Integration - Customer Engagement | NeuroGen Lab",
    description: "Transform your customer engagement with AI-powered Intercom integration. Enhanced support and automated communication.",
    url: `${baseUrl}/tools/intercom`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-intercom.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Intercom Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Intercom Integration - Smart Customer Engagement",
    description: "Transform your customer engagement with AI-powered Intercom integration and automation.",
    images: [`${baseUrl}/assets/images/og-intercom.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/intercom'),
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