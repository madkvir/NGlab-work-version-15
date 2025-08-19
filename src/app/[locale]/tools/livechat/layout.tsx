import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для LiveChat интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab LiveChat Integration",
  "applicationCategory": "BusinessApplication, CustomerServiceApplication",
  "description": "AI-powered LiveChat integration for enhanced customer support and real-time communication",
  "url": `${baseUrl}/tools/livechat`,
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
    "ratingCount": "140"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('tools/livechat', 'LiveChat Integration | NeuroGen Lab - Real-time Support', 'Enhance your customer support with AI-powered LiveChat integration. Real-time communication, automated responses, and improved customer satisfaction.', `${baseUrl}/assets/images/og-livechat.jpg`, 'NeuroGen Lab LiveChat Integration', locale);
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