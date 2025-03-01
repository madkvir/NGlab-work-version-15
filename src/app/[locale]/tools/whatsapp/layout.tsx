import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab WhatsApp AI Assistant",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered WhatsApp business automation solution for enhanced customer communication and support",
  "url": `${baseUrl}/tools/whatsapp`,
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
  "applicationSubCategory": "Messaging",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150"
  }
};

export const metadata: Metadata = {
  title: "WhatsApp AI Assistant | NeuroGen Lab - Business Automation Solution",
  description: "Enhance your WhatsApp business communication with our AI-powered assistant. Automate responses, provide 24/7 support, and improve customer engagement.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "WhatsApp automation",
    "business WhatsApp",
    "AI assistant",
    "WhatsApp bot",
    "customer support automation",
    "WhatsApp business solution",
    "automated messaging",
    "business communication",
    "NeuroGen Lab WhatsApp",
    "AI messaging"
  ],
  openGraph: {
    type: 'website',
    title: "WhatsApp AI Assistant - Business Communication Solution | NeuroGen Lab",
    description: "Transform your WhatsApp business communication with AI-powered automation. Provide instant responses, automate support, and enhance customer engagement.",
    url: `${baseUrl}/tools/whatsapp`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-whatsapp.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab WhatsApp AI Assistant",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "WhatsApp AI Assistant - Smart Business Communication",
    description: "Enhance your WhatsApp business presence with AI-powered automation. Available 24/7, multilingual, and fully customizable.",
    images: [`${baseUrl}/assets/images/og-whatsapp.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/whatsapp`,
    languages: {
      'en': `${baseUrl}/en/tools/whatsapp`,
      'de': `${baseUrl}/de/tools/whatsapp`,
      'es': `${baseUrl}/es/tools/whatsapp`,
      'ru': `${baseUrl}/ru/tools/whatsapp`,
      'uk': `${baseUrl}/uk/tools/whatsapp`
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

export default function WhatsAppLayout({
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