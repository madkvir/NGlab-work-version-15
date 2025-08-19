import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Salesforce интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Salesforce Integration",
  "applicationCategory": "BusinessApplication, CRMApplication",
  "description": "AI-powered Salesforce integration for enhanced CRM and sales management",
  "url": `${baseUrl}/tools/salesforce`,
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

export const metadata = generatePageMetadata(
  'tools/salesforce',
  'Salesforce Integration | NeuroGen Lab - CRM Enhancement',
  'Enhance your Salesforce with AI-powered integration. Automated workflows, intelligent insights, and improved customer relationship management.',
  `${baseUrl}/assets/images/og-salesforce.jpg`,
  'NeuroGen Lab Salesforce Integration'
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