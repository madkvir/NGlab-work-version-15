import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Facebook Messenger Integration",
  "applicationCategory": "BusinessApplication, MessagingApplication",
  "description": "AI-powered Facebook Messenger integration for enhanced customer communication and support automation",
  "url": `${baseUrl}/tools/facebook-messenger`,
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
    "ratingCount": "175"
  }
};

export const metadata: Metadata = {
  title: "Facebook Messenger Integration | NeuroGen Lab - Smart Communication",
  description: "Transform your customer communication with AI-powered Facebook Messenger integration. Automate responses, enhance engagement, and improve customer support.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Facebook Messenger integration",
    "customer communication",
    "messaging automation",
    "chat support",
    "social messaging",
    "automated responses",
    "AI chatbot",
    "customer engagement",
    "NeuroGen Lab Messenger",
    "communication solution"
  ],
  openGraph: {
    type: 'website',
    title: "Facebook Messenger Integration - Smart Communication | NeuroGen Lab",
    description: "Transform your customer communication with AI-powered Facebook Messenger integration. Enhanced support and automated responses.",
    url: `${baseUrl}/tools/facebook-messenger`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-facebook-messenger.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Facebook Messenger Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Facebook Messenger Integration - Smart Communication",
    description: "Transform your customer communication with AI-powered Facebook Messenger integration and automation.",
    images: [`${baseUrl}/assets/images/og-facebook-messenger.jpg`],
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
  authors: [{ name: "NeuroGen Lab Team" }],
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