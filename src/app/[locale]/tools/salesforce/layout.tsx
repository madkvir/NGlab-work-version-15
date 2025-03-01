import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Salesforce интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Salesforce Integration",
  "applicationCategory": "BusinessApplication, CRMApplication",
  "description": "AI-powered Salesforce integration for enhanced CRM and sales management",
  "url": `${baseUrl}/tools/salesforce`,
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

export const metadata: Metadata = {
  title: "Salesforce Integration | NeuroGen Lab - Smart CRM Management",
  description: "Enhance your CRM with AI technology. Smart automation, analytics, and advanced features for better customer relationship management.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "salesforce integration",
    "crm management",
    "sales automation",
    "customer analytics",
    "lead management",
    "pipeline management",
    "sales forecasting",
    "AI CRM",
    "smart sales",
    "NeuroGen Lab salesforce"
  ],
  openGraph: {
    type: 'website',
    title: "Salesforce Integration - Smart CRM Management | NeuroGen Lab",
    description: "Transform your CRM with AI-powered Salesforce integration. Automate sales processes and enhance customer relationships.",
    url: `${baseUrl}/tools/salesforce`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-salesforce.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Salesforce Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Salesforce Integration - Smart CRM Management",
    description: "Enhance CRM management with AI-powered features",
    images: [`${baseUrl}/assets/images/og-salesforce.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/salesforce`,
    languages: {
      'en': `${baseUrl}/en/tools/salesforce`,
      'de': `${baseUrl}/de/tools/salesforce`,
      'es': `${baseUrl}/es/tools/salesforce`,
      'ru': `${baseUrl}/ru/tools/salesforce`,
      'uk': `${baseUrl}/uk/tools/salesforce`
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

export default function SalesforceLayout({
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