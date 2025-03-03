import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Voice Bot",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered voice bot solution for enhanced customer interaction and automated voice communication",
  "url": `${baseUrl}/tools/ai-voice-bot`,
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
  title: "AI Voice Bot | NeuroGen Lab - Intelligent Voice Solutions",
  description: "Transform your customer interactions with AI-powered voice technology. Natural language processing, automated responses, and intelligent voice communication for enhanced engagement.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI voice bot",
    "voice automation",
    "speech recognition",
    "voice assistant",
    "automated responses",
    "voice technology",
    "AI communication",
    "customer interaction",
    "NeuroGen Lab voice",
    "voice solutions"
  ],
  openGraph: {
    type: 'website',
    title: "AI Voice Bot - Intelligent Voice Solutions | NeuroGen Lab",
    description: "Transform your customer interactions with AI-powered voice technology. Enhanced communication and automated responses.",
    url: `${baseUrl}/tools/ai-voice-bot`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-voice-bot.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Voice Bot",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Voice Bot - Smart Voice Communication",
    description: "Transform your customer interactions with AI-powered voice technology and intelligent automation.",
    images: [`${baseUrl}/assets/images/og-ai-voice-bot.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/ai-voice-bot'),
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