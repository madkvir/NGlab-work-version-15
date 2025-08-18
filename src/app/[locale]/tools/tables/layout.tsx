import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Smart Tables",
  "applicationCategory": "BusinessApplication, DataManagementApplication",
  "description": "AI-powered table management for efficient data organization and analysis",
  "url": `${baseUrl}/tools/tables`,
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
    "ratingCount": "130"
  }
};

export const metadata = generatePageMetadata(
  'tools/tables',
  'Smart Tables | NeuroGen Lab - AI-Powered Data Management',
  'Transform your data management with AI-powered smart tables. Efficiently organize, analyze, and visualize your business data.',
  `${baseUrl}/assets/images/og-tables.jpg`,
  'NeuroGen Lab Smart Tables'
);

export default function TablesLayout({
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