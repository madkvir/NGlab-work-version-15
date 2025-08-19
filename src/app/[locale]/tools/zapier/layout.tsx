import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Zapier интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Zapier Integration",
  "applicationCategory": "BusinessApplication, AutomationApplication",
  "description": "AI-powered Zapier integration for workflow automation and business process optimization",
  "url": `${baseUrl}/tools/zapier`,
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
    "ratingCount": "120"
  }
};

export const metadata = generatePageMetadata(
  'tools/zapier',
  'Zapier Integration | NeuroGen Lab - Workflow Automation',
  'Automate your workflows with AI-powered Zapier integration. Intelligent automation, smart connections, and enhanced productivity.',
  `${baseUrl}/assets/images/og-zapier.jpg`,
  'NeuroGen Lab Zapier Integration'
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