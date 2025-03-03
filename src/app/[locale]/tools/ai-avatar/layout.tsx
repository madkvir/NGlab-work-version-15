import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Avatar",
  "applicationCategory": "BusinessApplication, GraphicsApplication",
  "description": "AI-powered avatar generation solution for personalized digital representation and brand identity",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "160"
  }
};

export const metadata: Metadata = {
  title: "AI Avatar | NeuroGen Lab - Digital Identity Solutions",
  description: "Transform your digital presence with AI-powered avatar generation. Create unique, personalized avatars for brand identity and professional representation.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "AI avatar",
    "digital identity",
    "avatar generation",
    "brand representation",
    "profile pictures",
    "AI graphics",
    "personalized avatars",
    "visual identity",
    "NeuroGen Lab avatar",
    "digital presence"
  ],
  openGraph: {
    type: 'website',
    title: "AI Avatar - Digital Identity Solutions | NeuroGen Lab",
    description: "Transform your digital presence with AI-powered avatar generation. Create unique and professional digital representations.",
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
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Avatar - Smart Digital Identity",
    description: "Transform your digital presence with AI-powered avatar generation and personalized representation.",
    images: [`${baseUrl}/assets/images/og-ai-avatar.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/ai-avatar'),
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