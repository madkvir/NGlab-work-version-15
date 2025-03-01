import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Zapier интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Zapier Integration",
  "applicationCategory": "BusinessApplication, AutomationApplication",
  "description": "AI-powered Zapier integration for enhanced workflow automation and process management",
  "url": `${baseUrl}/tools/zapier`,
  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "operatingSystem": "All",

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "110"
  }
};

export const metadata: Metadata = {
  title: "Zapier Integration | NeuroGen Lab - Smart Workflow Automation",
  description: "Enhance your workflow automation with AI technology. Smart automation, analytics, and advanced features for better process management.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "zapier integration",
    "workflow automation",
    "process automation",
    "task management",
    "data synchronization",
    "trigger management",
    "process analytics",
    "AI automation",
    "smart workflows",
    "NeuroGen Lab zapier"
  ],
  openGraph: {
    type: 'website',
    title: "Zapier Integration - Smart Workflow Automation | NeuroGen Lab",
    description: "Transform your workflow automation with AI-powered Zapier integration. Automate processes and enhance productivity.",
    url: `${baseUrl}/tools/zapier`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-zapier.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Zapier Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zapier Integration - Smart Workflow Automation",
    description: "Enhance workflow automation with AI-powered features",
    images: [`${baseUrl}/assets/images/og-zapier.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/zapier`,
    languages: {
      'en': `${baseUrl}/en/tools/zapier`,
      'de': `${baseUrl}/de/tools/zapier`,
      'es': `${baseUrl}/es/tools/zapier`,
      'ru': `${baseUrl}/ru/tools/zapier`,
      'uk': `${baseUrl}/uk/tools/zapier`
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

export default function ZapierLayout({
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