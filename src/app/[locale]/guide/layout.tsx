import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// Добавляем JSON-LD разметку для лучшего SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to AI Integration",
  "description": "Learn how to integrate AI solutions into your business workflow",
  "author": {
    "@type": "Organization",
    "name": "NeuroGen Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://neurogenlab.de/logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://neurogenlab.de/en/guide"
  }
};

export const metadata = generatePageMetadata(
  'guide',
  'AI Implementation Guide | NeuroGen Lab',
  'Comprehensive guide for implementing AI solutions in your business. Learn how to transform your operations with NeuroGen Lab.',
  `${baseUrl}/assets/images/og-guide.jpg`,
  'NeuroGen Lab Implementation Guide'
);

export default async function GuideLayout({
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