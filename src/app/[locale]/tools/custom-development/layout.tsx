import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Custom Development
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Custom Development",
  "applicationCategory": "BusinessApplication, DevelopmentApplication",
  "description": "AI-powered custom software development solutions for unique business needs and digital transformation",
  "url": `${baseUrl}/tools/custom-development`,
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
    "ratingCount": "190"
  }
};

export const metadata = generatePageMetadata(
  'tools/custom-development',
  'Custom Development | NeuroGen Lab - Tailored Software Solutions',
  'Transform your business with custom AI-powered software solutions. Tailored development services for unique requirements and digital innovation.',
  `${baseUrl}/assets/images/og-custom-development.jpg`,
  'NeuroGen Lab Custom Development'
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