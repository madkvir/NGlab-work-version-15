import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// Добавляем JSON-LD разметку для лучшего SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "name": "AI Implementation Guide",
  "articleSection": "Business Guide",
  "description": "Comprehensive guide for implementing AI solutions in your business",
  "url": `${baseUrl}/guide`,
  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  }
};

export const metadata = generatePageMetadata(
  'guide',
  'AI Implementation Guide | NeuroGen Lab',
  'Comprehensive guide for implementing AI solutions in your business. Learn how to transform your operations with NeuroGen Lab.',
  `${baseUrl}/assets/images/og-guide.jpg`,
  'NeuroGen Lab Implementation Guide'
);

export default function GuideLayout({
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