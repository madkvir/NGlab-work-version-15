import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab KeepinCRM Integration",
  "applicationCategory": "BusinessApplication, CustomerRelationshipManagement",
  "description": "AI-powered KeepinCRM integration for enhanced customer relationship management and sales automation",
  "url": `${baseUrl}/tools/keepincrm`,
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
  'tools/keepincrm',
  'KeepinCRM Integration | NeuroGen Lab - CRM Automation',
  'Optimize your CRM with AI-powered KeepinCRM integration. Automated customer management, intelligent insights, and enhanced sales processes.',
  `${baseUrl}/assets/images/og-keepincrm.jpg`,
  'NeuroGen Lab KeepinCRM Integration'
);

export default function KeepinCRMLayout({
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