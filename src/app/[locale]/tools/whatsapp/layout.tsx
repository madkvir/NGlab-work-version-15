import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab WhatsApp Integration",
  "applicationCategory": "BusinessApplication, MessagingApplication",
  "description": "AI-powered WhatsApp integration for business communication and customer support",
  "url": `${baseUrl}/tools/whatsapp`,
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
    "ratingCount": "180"
  }
};

export const metadata = generatePageMetadata(
  'tools/whatsapp',
  'WhatsApp Integration | NeuroGen Lab - Business Messaging',
  'Transform your business communication with AI-powered WhatsApp integration. Automated messaging, customer engagement, and streamlined support.',
  `${baseUrl}/assets/images/og-whatsapp.jpg`,
  'NeuroGen Lab WhatsApp Integration'
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