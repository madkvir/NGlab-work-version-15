import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";
import { generatePageMetadata } from '../../../../utils/metadata';

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

export const metadata = generatePageMetadata(
  'tools/ai-voice-bot',
  'AI Voice Bot | NeuroGen Lab - Intelligent Voice Automation',
  'Transform your customer communication with AI-powered voice bots. Automate interactions while maintaining natural conversation flow.',
  `${baseUrl}/assets/images/og-ai-voice-bot.jpg`,
  'NeuroGen Lab AI Voice Bot'
);

export default function AiVoiceBotLayout({
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