import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab WhatsApp Integration",
  "applicationCategory": "BusinessApplication, MessagingApplication",
  "description": "AI-powered WhatsApp integration for business communication and customer support",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "180"
  }
};

export const metadata: Metadata = {
  title: "WhatsApp Integration | NeuroGen Lab - Business Communication",
  description: "Transform your WhatsApp business communication with AI technology. Automate responses, provide 24/7 support, and enhance customer engagement.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "WhatsApp integration",
    "business messaging",
    "automated responses",
    "customer support",
    "WhatsApp automation",
    "business communication",
    "AI messaging",
    "chat automation",
    "NeuroGen Lab WhatsApp",
    "messaging solution"
  ],
  openGraph: {
    type: 'website',
    title: "WhatsApp Integration - Business Communication | NeuroGen Lab",
    description: "Enhance your business communication with AI-powered WhatsApp integration. Automated responses and 24/7 customer support.",
    url: `${baseUrl}/tools/whatsapp`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-whatsapp.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab WhatsApp Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "WhatsApp Integration - Smart Business Communication",
    description: "Transform your business communication with AI-powered WhatsApp integration.",
    images: [`${baseUrl}/assets/images/og-whatsapp.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
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