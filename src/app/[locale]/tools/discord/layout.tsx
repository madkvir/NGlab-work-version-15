import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Discord Integration",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered Discord integration for enhanced community management and automation",
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
  "applicationSubCategory": "CommunityManagement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "175"
  }
};

export const metadata: Metadata = {
  title: "Discord Integration | NeuroGen Lab - Smart Community Management",
  description: "Enhance your Discord server with AI-powered automation. Advanced moderation tools, community engagement features, and intelligent bot interactions.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-discord.jpg',
  },
  keywords: [
    "Discord integration",
    "community management",
    "Discord bot",
    "server automation",
    "AI moderation",
    "community engagement",
    "Discord tools",
    "server management",
    "NeuroGen Lab Discord",
    "AI-powered bot"
  ],
  openGraph: {
    type: 'website',
    title: "Discord Integration - Smart Community Management | NeuroGen Lab",
    description: "Transform your Discord server with AI-powered automation. Advanced moderation and engagement tools for thriving communities.",
    url: `${baseUrl}/tools/discord`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-discord.jpg',
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
    title: "Discord Integration - Intelligent Community Solution",
    description: "Elevate your Discord community with AI-powered tools. Smart moderation and engagement features.",
    images: ['/assets/images/og-discord.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/discord`,
    languages: {
      'en': `${baseUrl}/en/tools/discord`,
      'de': `${baseUrl}/de/tools/discord`,
      'es': `${baseUrl}/es/tools/discord`,
      'ru': `${baseUrl}/ru/tools/discord`,
      'uk': `${baseUrl}/uk/tools/discord`
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
  authors: [{ name: "NeuroGen Lab Team" }],
};

export default function DiscordLayout({
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