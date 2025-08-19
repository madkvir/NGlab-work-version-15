import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

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

export const metadata = generatePageMetadata(
  'tools/jira',
  'Jira Integration | NeuroGen Lab - Project Management',
  'Enhance your project management with AI-powered Jira integration. Automate workflows, improve tracking, and boost team productivity.',
  `${baseUrl}/assets/images/og-jira.jpg`,
  'NeuroGen Lab Jira Integration'
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