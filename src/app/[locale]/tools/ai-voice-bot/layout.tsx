import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Voice Bot",
  "applicationCategory": "BusinessApplication",
  "description": "Advanced AI voice bot for automated customer service and voice interactions",
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
  "applicationSubCategory": "VoiceAssistant",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "180"
  }
};

export const metadata: Metadata = {
  title: "AI Voice Bot | NeuroGen Lab - Intelligent Voice Assistant",
  description: "Transform customer interactions with our AI Voice Bot. Natural language processing, multilingual support, and seamless voice automation for your business.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI voice bot",
    "voice assistant",
    "speech recognition",
    "voice automation",
    "customer service bot",
    "AI voice technology",
    "voice interface",
    "automated voice response",
    "NeuroGen Lab voice bot",
    "business voice solution"
  ],
  openGraph: {
    type: 'website',
    title: "AI Voice Bot - Intelligent Voice Assistant | NeuroGen Lab",
    description: "Enhance customer experience with AI-powered voice interactions. Natural, intelligent, and available 24/7 for your business needs.",
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
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Voice Bot - Smart Voice Automation",
    description: "Experience next-generation voice interactions with our AI Voice Bot. Multilingual, natural, and always available.",
    images: [`${baseUrl}/assets/images/og-ai-voice-bot.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/ai-voice-bot`,
    languages: {
      'en': `${baseUrl}/en/tools/ai-voice-bot`,
      'de': `${baseUrl}/de/tools/ai-voice-bot`,
      'es': `${baseUrl}/es/tools/ai-voice-bot`,
      'ru': `${baseUrl}/ru/tools/ai-voice-bot`,
      'uk': `${baseUrl}/uk/tools/ai-voice-bot`
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

export default function AIVoiceBotLayout({
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