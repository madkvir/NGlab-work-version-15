import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Email Solution",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered email management solution for enhanced business communication",
  "url": `${baseUrl}/tools/email`,
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
  "applicationSubCategory": "EmailManagement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "245"
  }
};

export const metadata: Metadata = {
  title: "Email Solution | NeuroGen Lab - Intelligent Email Management",
  description: "Transform your email communication with AI-powered automation. Smart filtering, automated responses, priority inbox, and advanced email analytics.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-email.jpg',
  },
  keywords: [
    "email solution",
    "email management",
    "AI email",
    "smart inbox",
    "email automation",
    "business email",
    "email analytics",
    "automated responses",
    "NeuroGen Lab email",
    "intelligent email"
  ],
  openGraph: {
    type: 'website',
    title: "Email Solution - Intelligent Email Management | NeuroGen Lab",
    description: "Revolutionize your email workflow with AI-powered management. Smart filtering and automated responses for enhanced productivity.",
    url: `${baseUrl}/tools/email`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-email.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Email Solution",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Email Solution - Smart Email Management",
    description: "Experience next-generation email management with AI technology. Intelligent, efficient, and automated.",
    images: ['/assets/images/og-email.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/email`,
    languages: {
      'en': `${baseUrl}/tools/email`,
      'de': `${baseUrl}/de/tools/email`,
      'es': `${baseUrl}/es/tools/email`,
      'ru': `${baseUrl}/ru/tools/email`,
      'uk': `${baseUrl}/uk/tools/email`
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

export default function EmailLayout({
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