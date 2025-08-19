import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Discord Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered Discord integration for enhanced community management and automated moderation",
  "url": `${baseUrl}/tools/discord`,
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
    "ratingCount": "165"
  }
};

export const metadata = generatePageMetadata(
  'tools/discord',
  'Discord Integration | NeuroGen Lab - Community Management',
  'Enhance your Discord community with AI-powered integration. Automated moderation, intelligent responses, and improved community engagement.',
  `${baseUrl}/assets/images/og-discord.jpg`,
  'NeuroGen Lab Discord Integration'
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