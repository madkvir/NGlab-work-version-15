import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Avatar",
  "applicationCategory": "BusinessApplication, GraphicsApplication",
  "description": "AI-powered avatar generation solution for personalized digital representation and brand identity",
  "url": `${baseUrl}/tools/ai-avatar`,
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
  
  return generatePageMetadata('tools/ai-avatar', 'AI Avatar Generator | NeuroGen Lab - Create Professional Digital Identities', 'Generate professional AI-powered avatars for your business and personal brand. Create unique, high-quality digital representations instantly.', `${baseUrl}/assets/images/og-ai-avatar.jpg`, 'NeuroGen Lab AI Avatar Generator', locale);
}

export default function AiAvatarLayout({
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