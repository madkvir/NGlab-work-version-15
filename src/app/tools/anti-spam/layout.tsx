import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Anti-Spam Protection",
  "applicationCategory": "BusinessApplication",
  "description": "Advanced AI-powered anti-spam solution for business communication security",
  "url": `${baseUrl}/tools/anti-spam`,
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
  "applicationSubCategory": "SecuritySoftware",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "220"
  }
};

export const metadata: Metadata = {
  title: "Anti-Spam Protection | NeuroGen Lab - Advanced Security Solution",
  description: "Protect your business communication with AI-powered anti-spam technology. Advanced filtering, real-time protection, and intelligent threat detection.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-anti-spam.jpg',
  },
  keywords: [
    "anti-spam protection",
    "email security",
    "spam filter",
    "AI security",
    "business protection",
    "communication security",
    "spam prevention",
    "threat detection",
    "NeuroGen Lab security",
    "intelligent filtering"
  ],
  openGraph: {
    type: 'website',
    title: "Anti-Spam Protection - Advanced Security Solution | NeuroGen Lab",
    description: "Secure your business communications with AI-powered anti-spam technology. Intelligent filtering and real-time protection against threats.",
    url: `${baseUrl}/tools/anti-spam`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-anti-spam.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Anti-Spam Protection",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anti-Spam Protection - Smart Security Solution",
    description: "Advanced AI-powered spam protection for your business. Intelligent, reliable, and always-on security.",
    images: ['/assets/images/og-anti-spam.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/anti-spam`,
    languages: {
      'en': `${baseUrl}/tools/anti-spam`,
      'de': `${baseUrl}/de/tools/anti-spam`,
      'es': `${baseUrl}/es/tools/anti-spam`,
      'ru': `${baseUrl}/ru/tools/anti-spam`,
      'uk': `${baseUrl}/uk/tools/anti-spam`
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

export default function AntiSpamLayout({
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