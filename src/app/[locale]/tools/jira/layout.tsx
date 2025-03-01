import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Jira Integration",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered Jira integration for enhanced project management and team collaboration",
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
  "applicationSubCategory": "ProjectManagement",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "205"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Jira Integration | NeuroGen Lab - Smart Project Management",
  description: "Transform your project management with AI-powered Jira integration. Automated workflows, intelligent task prioritization, and advanced analytics for team productivity.",
  other: {
    'ai-optimized': 'true',
    'og:image': '/assets/images/og-jira.jpg',
  },
  keywords: [
    "jira integration",
    "project management",
    "agile workflow",
    "team collaboration",
    "task automation",
    "sprint planning",
    "project analytics",
    "issue tracking",
    "NeuroGen Lab jira",
    "AI project management"
  ],
  openGraph: {
    type: 'website',
    title: "Jira Integration - Smart Project Management | NeuroGen Lab",
    description: "Transform your project management with AI-powered Jira integration. Smart automation and analytics for enhanced team productivity.",
    url: `${baseUrl}/tools/jira`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: '/assets/images/og-jira.jpg',
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Jira Integration",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jira Integration - Intelligent Project Management",
    description: "Enhance your project management with AI technology. Smart automation and team collaboration tools.",
    images: ['/assets/images/og-jira.jpg'],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: {
    canonical: `${baseUrl}/tools/jira`,
    languages: {
      'en': `${baseUrl}/en/tools/jira`,
      'de': `${baseUrl}/de/tools/jira`,
      'es': `${baseUrl}/es/tools/jira`,
      'ru': `${baseUrl}/ru/tools/jira`,
      'uk': `${baseUrl}/uk/tools/jira`
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

export default function JiraLayout({
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