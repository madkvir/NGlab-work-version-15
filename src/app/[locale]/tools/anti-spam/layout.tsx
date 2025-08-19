import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Anti-Spam",
  "applicationCategory": "BusinessApplication, SecurityApplication",
  "description": "AI-powered anti-spam solution for enhanced email security and communication protection",
  "url": `${baseUrl}/tools/anti-spam`,
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
    "ratingValue": "4.9",
    "ratingCount": "175"
  }
};

export const metadata = generatePageMetadata(
  'tools/anti-spam',
  'Anti-Spam | NeuroGen Lab - Email Protection',
  'Protect your communication with AI-powered anti-spam technology. Advanced filtering, real-time protection, and intelligent threat detection for secure email environments.',
  `${baseUrl}/assets/images/og-anti-spam.jpg`,
  'NeuroGen Lab Anti-Spam'
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