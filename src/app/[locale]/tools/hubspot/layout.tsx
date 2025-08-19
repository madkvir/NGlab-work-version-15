import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab HubSpot Integration",
  "applicationCategory": "BusinessApplication, MarketingApplication",
  "description": "AI-powered HubSpot integration for enhanced marketing automation and customer relationship management",
  "url": `${baseUrl}/tools/hubspot`,
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
    "ratingCount": "155"
  }
};

export const metadata = generatePageMetadata(
  'tools/hubspot',
  'HubSpot Integration | NeuroGen Lab - Marketing Automation',
  'Transform your marketing and CRM with AI-powered HubSpot integration. Automate campaigns, enhance customer relationships, and boost conversion rates.',
  `${baseUrl}/assets/images/og-hubspot.jpg`,
  'NeuroGen Lab HubSpot Integration'
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