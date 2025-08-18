import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab KeepinCRM Integration",
  "applicationCategory": "BusinessApplication, CustomerRelationshipManagement",
  "description": "AI-powered KeepinCRM integration for enhanced customer relationship management and sales automation",
  "url": `${baseUrl}/tools/keepincrm`,
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
    "ratingCount": "150"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "KeepinCRM Integration | NeuroGen Lab - Customer Relationship Management",
  description: "Enhance your customer relationship management with AI-powered KeepinCRM integration. Automate sales processes, improve customer tracking, and boost team productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "KeepinCRM integration",
    "customer relationship management",
    "sales automation",
    "lead tracking",
    "CRM tools",
    "team collaboration",
    "AI automation",
    "customer management",
    "NeuroGen Lab CRM",
    "sales solution"
  ],
  openGraph: {
    type: 'website',
    title: "KeepinCRM Integration - Customer Relationship Management | NeuroGen Lab",
    description: "Transform your customer relationship management with AI-powered KeepinCRM integration. Enhanced tracking and automated sales workflows.",
    url: `${baseUrl}/tools/keepincrm`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-keepincrm.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab KeepinCRM Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "KeepinCRM Integration - Smart Customer Relationship Management",
    description: "Transform your customer relationship management with AI-powered KeepinCRM integration and automation.",
    images: [`${baseUrl}/assets/images/og-keepincrm.jpg`],
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

export default function KeepinCRMLayout({
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