import React from "react";
import { Metadata } from "next";
import { generateHrefLangs } from '../../../utils/generateHrefLangs';
import HreflangTags from '../../../components/HreflangTags';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

// Добавляем JSON-LD разметку для лучшего SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Implementation Guide",
  "name": "AI Implementation Guide",
  "articleSection": "Business Guide",
  "description": "Comprehensive guide for implementing AI solutions in your business",
  "url": `${baseUrl}/guide`,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${baseUrl}/guide`
  },
  "author": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "image": {
    "@type": "ImageObject",
    "url": `${baseUrl}/assets/images/og-guide.jpg`,
    "width": 1200,
    "height": 630
  },
  "keywords": [
    "AI implementation guide",
    "business automation guide",
    "AI solutions guide",
    "digital transformation guide"
  ],
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "provider": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  }
};

export const metadata: Metadata = {
  title: "AI Implementation Guide | NeuroGen Lab",
  description: "Comprehensive guide for implementing AI solutions in your business. Learn how to transform your operations with NeuroGen Lab.",
  keywords: [
    "AI implementation guide",
    "business automation guide",
    "AI solutions guide",
    "digital transformation guide",
    "AI business guide",
    "implementation strategy",
    "AI adoption guide",
    "business technology guide",
    "NeuroGen Lab guide",
    "AI transformation guide"
  ],
  openGraph: {
    type: 'website',
    title: "AI Implementation Guide | NeuroGen Lab",
    description: "Comprehensive guide for implementing AI solutions in your business. Learn how to transform your operations with NeuroGen Lab.",
    url: `${baseUrl}/guide`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-guide.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Implementation Guide",
        type: 'image/jpeg',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Implementation Guide | NeuroGen Lab",
    description: "Comprehensive guide for implementing AI solutions in your business. Learn how to transform your operations with NeuroGen Lab.",
    images: [`${baseUrl}/assets/images/og-guide.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  alternates: generateHrefLangs('guide'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: "NeuroGen Lab Team" }],
};

export default function GuideLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="guide" currentLocale={params.locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
} 