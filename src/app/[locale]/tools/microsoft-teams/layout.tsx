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
    "ratingValue": "4.8",
    "ratingCount": "170"
  }
};

export const metadata: Metadata = {
  title: "Microsoft Teams Integration | NeuroGen Lab - Team Collaboration",
  description: "Enhance your Microsoft Teams experience with AI-powered features. Improve team collaboration, automate workflows, and boost productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Microsoft Teams integration",
    "team collaboration",
    "business communication",
    "virtual meetings",
    "workflow automation",
    "team productivity",
    "AI collaboration",
    "remote work",
    "NeuroGen Lab Teams",
    "collaboration solution"
  ],
  openGraph: {
    type: 'website',
    title: "Microsoft Teams Integration - Team Collaboration | NeuroGen Lab",
    description: "Transform your team collaboration with AI-powered Microsoft Teams integration. Enhanced communication and automated workflows.",
    url: `${baseUrl}/tools/microsoft-teams`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-microsoft-teams.jpg`,
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
    description: "Transform your team collaboration with AI-powered Microsoft Teams integration and automation.",
    images: [`${baseUrl}/assets/images/og-microsoft-teams.jpg`],
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