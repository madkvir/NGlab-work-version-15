import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Instagram Integration",
  "applicationCategory": "BusinessApplication, SocialMediaApplication",
  "description": "AI-powered Instagram integration for enhanced social media management and engagement",
  "url": `${baseUrl}/tools/instagram`,
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
    "ratingCount": "165"
  }
};

export const metadata: Metadata = {
  title: "Instagram Integration | NeuroGen Lab - Social Media Management",
  description: "Transform your Instagram presence with AI-powered automation. Enhance engagement, automate responses, and improve social media management.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Instagram integration",
    "social media",
    "content management",
    "engagement automation",
    "social analytics",
    "audience growth",
    "AI automation",
    "social marketing",
    "NeuroGen Lab Instagram",
    "social solution"
  ],
  openGraph: {
    type: 'website',
    title: "Instagram Integration - Social Media Management | NeuroGen Lab",
    description: "Transform your Instagram presence with AI-powered automation. Enhanced engagement and content management.",
    url: `${baseUrl}/tools/instagram`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-instagram.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Instagram Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Instagram Integration - Smart Social Media Management",
    description: "Transform your social media presence with AI-powered Instagram integration and automation.",
    images: [`${baseUrl}/assets/images/og-instagram.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/instagram'),
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