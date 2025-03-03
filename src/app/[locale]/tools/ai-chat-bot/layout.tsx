import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

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

export const metadata: Metadata = {
  title: "AI Chat Bot | NeuroGen Lab - Intelligent Customer Support",
  description: "Transform your customer support with our AI-powered chatbot. Provide 24/7 assistance, automate responses, and enhance customer satisfaction.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI chatbot",
    "customer support",
    "automated chat",
    "business chatbot",
    "chat automation",
    "customer service bot",
    "AI support",
    "intelligent chat",
    "NeuroGen Lab chatbot",
    "AI customer service"
  ],
  openGraph: {
    type: 'website',
    title: "AI Chat Bot - Intelligent Customer Support | NeuroGen Lab",
    description: "Enhance your customer support with AI-powered chatbot. Available 24/7, multilingual, and fully customizable.",
    url: `${baseUrl}/tools/ai-chat-bot`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-chat-bot.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Chat Bot",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Chat Bot - Smart Customer Support",
    description: "Transform your customer support with AI technology. Available 24/7, multilingual, and fully customizable.",
    images: [`${baseUrl}/assets/images/og-ai-chat-bot.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }], // Добавлены авторы
  alternates: generateHrefLangs('tools/ai-chat-bot'),
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