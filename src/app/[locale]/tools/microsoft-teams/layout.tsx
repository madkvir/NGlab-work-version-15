import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Teams интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Microsoft Teams Integration",
  "applicationCategory": "BusinessApplication, CollaborationApplication",
  "description": "AI-powered Microsoft Teams integration for enhanced team collaboration and communication",
  "url": `${baseUrl}/tools/microsoft-teams`,
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
    "ratingCount": "170"
  }
};

export const metadata = generatePageMetadata(
  'tools/microsoft-teams',
  'Microsoft Teams Integration | NeuroGen Lab - Team Collaboration',
  'Transform your team collaboration with AI-powered Microsoft Teams integration. Automated workflows, intelligent communication, and enhanced productivity.',
  `${baseUrl}/assets/images/og-microsoft-teams.jpg`,
  'NeuroGen Lab Microsoft Teams Integration'
);

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