import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata: Metadata = {
  title: "AI Chat Bot | NeuroGen Lab - Intelligent Customer Service Solution",
  description: "Transform your customer service with our AI-powered chatbot. Provide 24/7 support, reduce costs, and deliver exceptional customer experiences.",
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
        url: `${baseUrl}/assets/images/ai-chatbot-preview.png`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Chatbot Solution",
        type: 'image/png',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Chat Bot - Smart Customer Support",
    description: "Enhance customer service with AI-powered chat support. Available 24/7, multilingual, and fully customizable.",
    images: [`${baseUrl}/assets/images/og-ai-chatbot.png`],
  },
  authors: [{ name: "NeuroGen Lab" }],
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
  return <>{children}</>;
} 