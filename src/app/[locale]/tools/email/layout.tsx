import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Email Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered email integration for enhanced communication automation and intelligent email management",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "185"
  }
};

export const metadata: Metadata = {
  title: "Email Integration | NeuroGen Lab - Smart Email Management",
  description: "Transform your email communication with AI-powered automation. Smart filtering, automated responses, and intelligent email management for enhanced productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Email integration",
    "email automation",
    "smart inbox",
    "email management",
    "automated responses",
    "email filtering",
    "AI email",
    "productivity tools",
    "NeuroGen Lab email",
    "communication solution"
  ],
  openGraph: {
    type: 'website',
    title: "Email Integration - Smart Email Management | NeuroGen Lab",
    description: "Transform your email workflow with AI-powered automation. Enhanced productivity and intelligent management.",
    url: `${baseUrl}/tools/email`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-email.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Email Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Email Integration - Smart Communication Management",
    description: "Transform your email workflow with AI-powered automation and intelligent management.",
    images: [`${baseUrl}/assets/images/og-email.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/email'),
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