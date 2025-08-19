import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab Facebook Messenger Integration",
  "applicationCategory": "BusinessApplication, MessagingApplication",
  "description": "AI-powered Facebook Messenger integration for enhanced customer communication and support automation",
  "url": `${baseUrl}/tools/facebook-messenger`,
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
    "ratingCount": "175"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('tools/facebook-messenger', 'Facebook Messenger Integration | NeuroGen Lab - Smart Communication', 'Transform your customer communication with AI-powered Facebook Messenger integration. Automate responses, enhance engagement, and improve customer support.', `${baseUrl}/assets/images/og-facebook-messenger.jpg`, 'NeuroGen Lab Facebook Messenger Integration', locale);
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