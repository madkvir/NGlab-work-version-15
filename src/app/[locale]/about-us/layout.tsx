import React from "react";
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NeuroGen Lab",
  "description": "AI-powered business solutions and intelligent automation",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "sameAs": [
    "https://neurogenlab.de"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": `${baseUrl}/contacts`
  }
};

export const metadata = generatePageMetadata(
  'about-us',
  'About Us | NeuroGen Lab - AI Solutions',
  'Learn about NeuroGen Lab, a leading provider of AI-powered business solutions and intelligent automation technologies.',
  `${baseUrl}/assets/images/og-about-us.jpg`,
  'NeuroGen Lab About Us'
);

export default async function AboutUsLayout({
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