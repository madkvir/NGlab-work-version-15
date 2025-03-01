import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для LiveChat интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab LiveChat Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered LiveChat integration for enhanced customer support and communication",
  "url": `${baseUrl}/tools/livechat`,
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
    "ratingCount": "160"
  }
};

export const metadata: Metadata = {
  title: "LiveChat Integration | NeuroGen Lab - Smart Customer Support",
  description: "Enhance your customer support with AI technology. Real-time chat, automated responses, and advanced analytics for better customer communication.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "livechat integration",
    "customer support",
    "real-time chat",
    "chat automation",
    "visitor analytics",
    "customer communication",
    "support automation",
    "AI chat",
    "smart support",
    "NeuroGen Lab chat"
  ],
  openGraph: {
    type: 'website',
    title: "LiveChat Integration - Smart Customer Support | NeuroGen Lab",
    description: "Transform your customer support with AI-powered LiveChat integration. Enhance communication and support efficiency.",
    url: `${baseUrl}/tools/livechat`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-livechat.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab LiveChat Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "LiveChat Integration - Smart Customer Support",
    description: "Enhance customer support with AI-powered features",
    images: [`${baseUrl}/assets/images/og-livechat.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/tools/livechat`,
    languages: {
      'en': `${baseUrl}/en/tools/livechat`,
      'de': `${baseUrl}/de/tools/livechat`,
      'es': `${baseUrl}/es/tools/livechat`,
      'ru': `${baseUrl}/ru/tools/livechat`,
      'uk': `${baseUrl}/uk/tools/livechat`
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

export default function LiveChatLayout({
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