import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для LiveChat интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab LiveChat Integration",
  "applicationCategory": "BusinessApplication, CustomerServiceApplication",
  "description": "AI-powered LiveChat integration for enhanced customer support and real-time communication",
  "url": `${baseUrl}/tools/livechat`,
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
    "ratingCount": "140"
  }
};

export const metadata: Metadata = {
  title: "LiveChat Integration | NeuroGen Lab - Real-time Support",
  description: "Transform your customer support with AI-powered LiveChat integration. Provide instant assistance, automate responses, and improve customer satisfaction.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "LiveChat integration",
    "customer support",
    "real-time chat",
    "live assistance",
    "chat automation",
    "customer service",
    "AI support",
    "instant messaging",
    "NeuroGen Lab LiveChat",
    "support solution"
  ],
  openGraph: {
    type: 'website',
    title: "LiveChat Integration - Real-time Support | NeuroGen Lab",
    description: "Transform your customer support with AI-powered LiveChat. Instant assistance and automated responses.",
    url: `${baseUrl}/tools/livechat`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-livechat.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab LiveChat Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "LiveChat Integration - Smart Customer Support",
    description: "Transform your customer support with AI-powered LiveChat integration and automation.",
    images: [`${baseUrl}/assets/images/og-livechat.jpg`],
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