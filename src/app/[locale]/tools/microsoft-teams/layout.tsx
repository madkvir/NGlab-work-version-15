import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Teams интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Microsoft Teams Integration",
  "applicationCategory": "BusinessApplication, CollaborationApplication",
  "description": "AI-powered Microsoft Teams integration for enhanced team collaboration and communication",
  "url": `${baseUrl}/tools/microsoft-teams`,
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
    "ratingValue": "4.9",
    "ratingCount": "130"
  }
};

export const metadata: Metadata = {
  title: "Microsoft Teams Integration | NeuroGen Lab - Smart Team Collaboration",
  description: "Enhance your team collaboration with AI technology. Smart automation, analytics, and advanced features for better team communication and productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "microsoft teams integration",
    "team collaboration",
    "meeting management",
    "document collaboration",
    "team analytics",
    "workflow automation",
    "channel management",
    "AI communication",
    "smart meetings",
    "NeuroGen Lab teams"
  ],
  openGraph: {
    type: 'website',
    title: "Microsoft Teams Integration - Smart Team Collaboration | NeuroGen Lab",
    description: "Transform your team collaboration with AI-powered Microsoft Teams integration. Enhance communication and productivity.",
    url: `${baseUrl}/tools/microsoft-teams`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-teams.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Microsoft Teams Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Microsoft Teams Integration - Smart Team Collaboration",
    description: "Enhance team collaboration with AI-powered features",
    images: [`${baseUrl}/assets/images/og-teams.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/microsoft-teams`,
    languages: {
      'en': `${baseUrl}/en/tools/microsoft-teams`,
      'de': `${baseUrl}/de/tools/microsoft-teams`,
      'es': `${baseUrl}/es/tools/microsoft-teams`,
      'ru': `${baseUrl}/ru/tools/microsoft-teams`,
      'uk': `${baseUrl}/uk/tools/microsoft-teams`
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

export default function TeamsLayout({
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