import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Zapier интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Zapier Integration",
  "applicationCategory": "BusinessApplication, AutomationApplication",
  "description": "AI-powered Zapier integration for workflow automation and business process optimization",
  "url": `${baseUrl}/tools/zapier`,
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
    "ratingCount": "120"
  }
};

export const metadata: Metadata = {
  title: "Zapier Integration | NeuroGen Lab - Workflow Automation",
  description: "Enhance your business processes with AI-powered Zapier integration. Automate workflows, connect apps, and boost productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Zapier integration",
    "workflow automation",
    "business process",
    "app integration",
    "task automation",
    "productivity tools",
    "AI automation",
    "business workflow",
    "NeuroGen Lab Zapier",
    "automation solution"
  ],
  openGraph: {
    type: 'website',
    title: "Zapier Integration - Workflow Automation | NeuroGen Lab",
    description: "Transform your business processes with AI-powered Zapier integration. Connect apps and automate workflows.",
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
    description: "Transform your business processes with AI-powered automation and app integration.",
    images: [`${baseUrl}/assets/images/og-zapier.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
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