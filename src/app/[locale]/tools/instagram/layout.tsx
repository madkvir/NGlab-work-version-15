import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Instagram Integration",
  "applicationCategory": "BusinessApplication, SocialMediaApplication",
  "description": "AI-powered Instagram integration for enhanced social media management and engagement",
  "url": `${baseUrl}/tools/instagram`,
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
    "ratingCount": "165"
  }
};

export const metadata = generatePageMetadata(
  'tools/instagram',
  'Instagram Integration | NeuroGen Lab - Social Media Automation',
  'Automate your Instagram presence with AI-powered integration. Enhanced engagement, automated responses, and social media optimization.',
  `${baseUrl}/assets/images/og-instagram.jpg`,
  'NeuroGen Lab Instagram Integration'
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