import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Avatar",
  "applicationCategory": "BusinessApplication",
  "description": "Professional AI-powered avatar generation tool for business and personal branding",
  "url": `${baseUrl}/tools/ai-avatar`,
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
  "applicationSubCategory": "ImageGeneration",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "120"
  }
};

export const metadata: Metadata = {
  title: "AI Avatar | NeuroGen Lab - Professional Profile Images",
  description: "Create professional AI-Avatars for your business profiles. Transform your brand identity with our advanced AI avatar generation technology.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI avatar generator",
    "professional profile picture",
    "business avatar",
    "AI profile image",
    "digital identity",
    "professional headshot",
    "AI photo generator",
    "business branding",
    "NeuroGen Lab avatar",
    "AI imaging"
  ],
  openGraph: {
    type: 'website',
    title: "AI Avatar Generator - Professional Profile Images | NeuroGen Lab",
    description: "Transform your digital presence with AI-generated professional avatars. Create stunning profile pictures for your business and personal brand.",
    url: `${baseUrl}/tools/ai-avatar`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-ai-avatar.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Avatar",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Avatar Generator - Professional Digital Identity",
    description: "Create stunning professional avatars with AI technology. Perfect for business profiles and personal branding.",
    images: [`${baseUrl}/assets/images/og-ai-avatar.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/ai-avatar`,
    languages: {
      'en': `${baseUrl}/tools/ai-avatar`,
      'de': `${baseUrl}/de/tools/ai-avatar`,
      'es': `${baseUrl}/es/tools/ai-avatar`,
      'ru': `${baseUrl}/ru/tools/ai-avatar`,
      'uk': `${baseUrl}/uk/tools/ai-avatar`
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

export default function AIAvatarLayout({
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