import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Facebook Messenger Solution",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered Facebook Messenger automation for enhanced business communication",
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
  "applicationSubCategory": "MessagingAutomation",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "195"
  }
};

export const metadata: Metadata = {
  title: "Facebook Messenger Solution | NeuroGen Lab - Intelligent Messaging",
  description: "Enhance Messenger communication with AI technology. Automated responses, analytics, and advanced features for better message management.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-facebook-messenger.jpg',
  },
  keywords: [
    "facebook messenger",
    "messenger automation",
    "ai messaging",
    "chat management",
    "message analytics",
    "automated responses",
    "business messaging",
    "messenger bot",
    "NeuroGen Lab messenger",
    "AI chat solution"
  ],
  openGraph: {
    type: 'website',
    title: "Facebook Messenger Solution - Intelligent Messaging | NeuroGen Lab",
    description: "Transform your Messenger communication with AI-powered automation. Smart responses and advanced analytics for business growth.",
    url: `${baseUrl}/tools/facebook-messenger`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-facebook-messenger.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Facebook Messenger Solution",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Facebook Messenger Solution - Smart Communication",
    description: "Enhance your Messenger communication with AI technology. Intelligent and automated messaging.",
    images: ['/assets/images/og-facebook-messenger.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/facebook-messenger`,
    languages: {
      'en': `${baseUrl}/en/tools/facebook-messenger`,
      'de': `${baseUrl}/de/tools/facebook-messenger`,
      'es': `${baseUrl}/es/tools/facebook-messenger`,
      'ru': `${baseUrl}/ru/tools/facebook-messenger`,
      'uk': `${baseUrl}/uk/tools/facebook-messenger`
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

export default function FacebookMessengerLayout({
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