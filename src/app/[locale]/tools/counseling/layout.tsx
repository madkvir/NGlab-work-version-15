import React from "react";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Counseling",
  "applicationCategory": "BusinessApplication, SupportApplication",
  "description": "AI-powered counseling solution for intelligent support and guidance",
  "url": `${baseUrl}/tools/counseling`,
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
  'tools/counseling',
  'AI Counseling | NeuroGen Lab - Intelligent Support',
  'Provide intelligent counseling support with AI-powered technology. Automated guidance, smart responses, and enhanced user assistance.',
  `${baseUrl}/assets/images/og-counseling.jpg`,
  'NeuroGen Lab AI Counseling'
);

export default async function CounselingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
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
