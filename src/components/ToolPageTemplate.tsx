import React from "react";
import { Metadata } from "next";
import { generateHrefLangs } from '../utils/generateHrefLangs';

interface ToolPageTemplateProps {
  toolName: string;
  toolPath: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  children: React.ReactNode;
}

export function generateToolMetadata({
  toolName,
  toolPath,
  title,
  description,
  keywords,
  ogImage
}: Omit<ToolPageTemplateProps, 'children'>): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${baseUrl}/${toolPath}`,
      siteName: "NeuroGen Lab",
      images: [
        {
          url: `${baseUrl}/assets/images/${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${toolName} Integration`,
          type: 'image/jpeg',
        },
      ],
      locale: 'en',
      alternateLocale: ['de', 'es', 'ru', 'uk'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/assets/images/${ogImage}`],
      creator: "@neurogenlab",
      site: "@neurogenlab",
    },
    alternates: generateHrefLangs(toolPath),
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
}

export default function ToolPageTemplate({
  toolName,
  toolPath,
  title,
  description,
  keywords,
  ogImage,
  children
}: ToolPageTemplateProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "description": description,
    "url": `${baseUrl}/${toolPath}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "NeuroGen Lab",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  };

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
