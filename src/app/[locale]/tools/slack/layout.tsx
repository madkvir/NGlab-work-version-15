import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Slack интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Slack Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered Slack integration for enhanced team communication and collaboration",
  "url": `${baseUrl}/tools/slack`,
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
    "ratingCount": "160"
  }
};

export const metadata: Metadata = {
  title: "Slack Integration | NeuroGen Lab - Team Communication",
  description: "Enhance your team communication with AI-powered Slack integration. Automate workflows, improve collaboration, and boost productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Slack integration",
    "team communication",
    "collaboration tools",
    "workplace chat",
    "business messaging",
    "workflow automation",
    "AI communication",
    "team productivity",
    "NeuroGen Lab Slack",
    "messaging solution"
  ],
  openGraph: {
    type: 'website',
    title: "Slack Integration - Team Communication | NeuroGen Lab",
    description: "Transform your team communication with AI-powered Slack integration. Enhanced collaboration and automated workflows.",
    url: `${baseUrl}/tools/slack`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-slack.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Slack Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Slack Integration - Smart Team Communication",
    description: "Transform your team collaboration with AI-powered Slack integration and automation.",
    images: [`${baseUrl}/assets/images/og-slack.jpg`],
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