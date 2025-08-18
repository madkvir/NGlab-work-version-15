import React from "react";
import { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Anti-Spam",
  "applicationCategory": "BusinessApplication, SecurityApplication",
  "description": "AI-powered anti-spam solution for enhanced email security and communication protection",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "175"
  }
};

export const metadata: Metadata = {
  title: "Anti-Spam | NeuroGen Lab - Email Protection",
  description: "Protect your communication with AI-powered anti-spam technology. Advanced filtering, real-time protection, and intelligent threat detection for secure email environments.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Anti-spam",
    "email protection",
    "spam filtering",
    "email security",
    "threat detection",
    "AI security",
    "communication protection",
    "spam prevention",
    "NeuroGen Lab security",
    "email defense"
  ],
  openGraph: {
    type: 'website',
    title: "Anti-Spam - Email Protection | NeuroGen Lab",
    description: "Transform your email security with AI-powered anti-spam technology. Advanced protection and intelligent threat detection.",
    url: `${baseUrl}/tools/anti-spam`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-anti-spam.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Anti-Spam",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anti-Spam - Smart Email Protection",
    description: "Transform your email security with AI-powered anti-spam technology and intelligent protection.",
    images: [`${baseUrl}/assets/images/og-anti-spam.jpg`],
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