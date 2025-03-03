import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Jira Integration",
  "applicationCategory": "BusinessApplication, ProjectManagementApplication",
  "description": "AI-powered Jira integration for enhanced project management and workflow automation",
  "url": `${baseUrl}/tools/jira`,
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
    "ratingCount": "150"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Jira Integration | NeuroGen Lab - Project Management",
  description: "Enhance your project management with AI-powered Jira integration. Automate workflows, improve tracking, and boost team productivity.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "Jira integration",
    "project management",
    "task tracking",
    "workflow automation",
    "agile tools",
    "team collaboration",
    "AI automation",
    "issue management",
    "NeuroGen Lab Jira",
    "project solution"
  ],
  openGraph: {
    type: 'website',
    title: "Jira Integration - Project Management | NeuroGen Lab",
    description: "Transform your project management with AI-powered Jira integration. Enhanced tracking and automated workflows.",
    url: `${baseUrl}/tools/jira`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-jira.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Jira Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jira Integration - Smart Project Management",
    description: "Transform your project management with AI-powered Jira integration and automation.",
    images: [`${baseUrl}/assets/images/og-jira.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('tools/jira'),
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