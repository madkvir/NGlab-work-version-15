import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Slack интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Slack Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered Slack integration for enhanced team communication and workflow automation",
  "url": `${baseUrl}/tools/slack`,
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
    "ratingValue": "4.7",
    "ratingCount": "120"
  }
};

export const metadata: Metadata = {
  title: "Slack Integration | NeuroGen Lab - Smart Team Communication",
  description: "Enhance your team communication with AI technology. Smart automation, analytics, and advanced features for better team collaboration.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "slack integration",
    "team communication",
    "message management",
    "channel analytics",
    "workflow automation",
    "team collaboration",
    "bot integration",
    "AI communication",
    "smart messaging",
    "NeuroGen Lab slack"
  ],
  openGraph: {
    type: 'website',
    title: "Slack Integration - Smart Team Communication | NeuroGen Lab",
    description: "Transform your team communication with AI-powered Slack integration. Automate workflows and enhance collaboration.",
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
    description: "Enhance team communication with AI-powered features",
    images: [`${baseUrl}/assets/images/og-slack.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/slack`,
    languages: {
      'en': `${baseUrl}/tools/slack`,
      'de': `${baseUrl}/de/tools/slack`,
      'es': `${baseUrl}/es/tools/slack`,
      'ru': `${baseUrl}/ru/tools/slack`,
      'uk': `${baseUrl}/uk/tools/slack`
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

export default function SlackLayout({
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