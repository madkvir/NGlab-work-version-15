import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// JSON-LD разметка для Slack интеграции
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Slack Integration",
  "applicationCategory": "BusinessApplication, CommunicationApplication",
  "description": "AI-powered Slack integration for enhanced team communication and collaboration",
  "url": `${baseUrl}/tools/slack`,
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
    "ratingCount": "160"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('tools/slack', 'Slack Integration | NeuroGen Lab - Team Communication', 'Enhance your team communication with AI-powered Slack integration. Automated workflows, intelligent notifications, and improved collaboration.', `${baseUrl}/assets/images/og-slack.jpg`, 'NeuroGen Lab Slack Integration', locale);
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