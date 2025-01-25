import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// Добавляем JSON-LD разметку для лучшего SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Chatbot",
  "applicationCategory": "BusinessApplication",
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
  }
};

export const metadata: Metadata = {
  title: "AI Chat Bot | NeuroGen Lab - Intelligent Customer Service Solution",
  description: "Transform your customer service with our AI-powered chatbot. Provide 24/7 support, reduce costs, and deliver exceptional customer experiences.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI chatbot",
    "customer service automation",
    "intelligent chatbot",
    "24/7 customer support",
    "AI customer service",
    "automated support",
    "virtual assistant",
    "business automation",
    "customer experience",
    "NeuroGen Lab chatbot"
  ],
  openGraph: {
    type: 'website',
    title: "AI Chat Bot - Intelligent Customer Support | NeuroGen Lab",
    description: "Transform your customer service with 24/7 AI-powered support. Our intelligent chatbot solution helps businesses automate support and improve customer satisfaction.",
    url: `${baseUrl}/tools/ai-chat-bot`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-chat-bot.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Chatbot Solution",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Chat Bot - Smart Customer Support",
    description: "Enhance customer service with AI-powered chat support. Available 24/7, multilingual, and fully customizable.",
    images: [`${baseUrl}/assets/images/og-ai-chat-bot.jpg`],
    creator: "@neurogenlab", // Добавлен Twitter аккаунт
    site: "@neurogenlab", // Добавлен Twitter сайт
  },
  authors: [{ name: "NeuroGen Lab Team" }], // Добавлены авторы
  alternates: {
    canonical: `${baseUrl}/tools/ai-chat-bot`,
    languages: {
      'en': `${baseUrl}/tools/ai-chat-bot`,
      'de': `${baseUrl}/de/tools/ai-chat-bot`,
      'es': `${baseUrl}/es/tools/ai-chat-bot`,
      'ru': `${baseUrl}/ru/tools/ai-chat-bot`,
      'uk': `${baseUrl}/uk/tools/ai-chat-bot`
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

export default function AIChatBotLayout({
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