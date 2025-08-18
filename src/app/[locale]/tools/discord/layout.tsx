import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Discord Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered Discord integration for enhanced community management and automated moderation",
  "url": `${baseUrl}/tools/discord`,
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
    "ratingCount": "165"
  }
};

export const metadata: Metadata = {
  title: "Discord Integration | NeuroGen Lab - Community Management",
  description: "Transform your Discord server with AI-powered automation. Smart moderation, automated responses, and intelligent community management for enhanced engagement.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Discord integration",
    "community management",
    "server automation",
    "chat moderation",
    "bot automation",
    "automated responses",
    "AI moderation",
    "community tools",
    "NeuroGen Lab Discord",
    "moderation solution"
  ],
  openGraph: {
    type: 'website',
    title: "Discord Integration - Smart Community Management | NeuroGen Lab",
    description: "Transform your Discord community with AI-powered automation. Enhanced moderation and intelligent management.",
    url: `${baseUrl}/tools/discord`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-discord.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Discord Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Discord Integration - Smart Community Management",
    description: "Transform your Discord server with AI-powered automation and intelligent moderation.",
    images: [`${baseUrl}/assets/images/og-discord.jpg`],
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