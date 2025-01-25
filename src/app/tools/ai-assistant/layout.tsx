import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Assistant",
  "applicationCategory": "BusinessApplication",
  "description": "Intelligent AI assistant for business automation and enhanced productivity",
  "url": `${baseUrl}/tools/ai-assistant`,
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
  "applicationSubCategory": "ArtificialIntelligence",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "200"
  }
};

export const metadata: Metadata = {
  title: "AI Assistant | NeuroGen Lab - Smart Business Automation",
  description: "Enhance your business operations with our intelligent AI assistant. Automate tasks, improve productivity, and make data-driven decisions with advanced artificial intelligence.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI assistant",
    "business automation",
    "intelligent automation",
    "AI productivity tool",
    "virtual assistant",
    "business AI",
    "task automation",
    "AI workflow",
    "NeuroGen Lab assistant",
    "AI business solution"
  ],
  openGraph: {
    type: 'website',
    title: "AI Assistant - Smart Business Automation | NeuroGen Lab",
    description: "Transform your business operations with an intelligent AI assistant. Automate tasks, enhance productivity, and leverage advanced artificial intelligence.",
    url: `${baseUrl}/tools/ai-assistant`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-assistant.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Assistant",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Assistant - Intelligent Business Solution",
    description: "Boost your business efficiency with AI-powered automation. Smart, adaptable, and ready to transform your workflow.",
    images: [`${baseUrl}/assets/images/og-ai-assistant.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/ai-assistant`,
    languages: {
      'en': `${baseUrl}/tools/ai-assistant`,
      'de': `${baseUrl}/de/tools/ai-assistant`,
      'es': `${baseUrl}/es/tools/ai-assistant`,
      'ru': `${baseUrl}/ru/tools/ai-assistant`,
      'uk': `${baseUrl}/uk/tools/ai-assistant`
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

export default function AIAssistantLayout({
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