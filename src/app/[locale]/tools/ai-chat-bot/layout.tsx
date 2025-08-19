import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// Добавляем JSON-LD разметку для лучшего SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Chatbot",
  "applicationCategory": "BusinessApplication, AIApplication",
  "description": "AI-powered chatbot solution for 24/7 customer support and business automation",
  "url": `${baseUrl}/tools/ai-chat-bot`,
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
    "ratingCount": "100"
  }
};

export const metadata = generatePageMetadata(
  'tools/ai-chat-bot',
  'AI Chat Bot | NeuroGen Lab - Intelligent Conversations',
  'Transform your customer interactions with AI-powered chat bot technology. Intelligent conversations, automated support, and enhanced customer experience.',
  `${baseUrl}/assets/images/og-ai-chat-bot.jpg`,
  'NeuroGen Lab AI Chat Bot'
);

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