import React from "react";
import { Metadata } from 'next';
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Assistant",
  "applicationCategory": "BusinessApplication, AutomationApplication",
  "description": "AI-powered assistant for enhanced business automation and intelligent workflow management",
  "url": `${baseUrl}/tools/ai-assistant`,
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('tools/ai-assistant', 'AI Assistant | NeuroGen Lab - Intelligent Automation', 'Transform your business with AI-powered assistant technology. Intelligent automation, smart workflows, and enhanced productivity solutions.', `${baseUrl}/assets/images/og-ai-assistant.jpg`, 'NeuroGen Lab AI Assistant', locale);
}

export default async function AIAssistantLayout({
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