import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Intercom Integration",
  "applicationCategory": "BusinessApplication, CustomerEngagementApplication",
  "description": "AI-powered Intercom integration for enhanced customer engagement and support automation",
  "url": `${baseUrl}/tools/intercom`,
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
    "ratingCount": "145"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('tools/intercom', 'Intercom Integration | NeuroGen Lab - Customer Engagement', 'Transform your customer engagement with AI-powered Intercom integration. Automate support, improve communication, and enhance customer satisfaction.', `${baseUrl}/assets/images/og-intercom.jpg`, 'NeuroGen Lab Intercom Integration', locale);
}

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