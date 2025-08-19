import React from "react";
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "NeuroGen Lab Blog",
  "description": "AI insights, technology updates, and business automation tips",
  "url": `${baseUrl}/blog`,
  "publisher": {
    "@type": "Organization",
    "name": "NeuroGen Lab",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    }
  }
};

export const metadata = generatePageMetadata(
  'blog',
  'Blog | NeuroGen Lab - AI Insights',
  'Stay updated with the latest AI insights, technology trends, and business automation tips from NeuroGen Lab.',
  `${baseUrl}/assets/images/og-blog.jpg`,
  'NeuroGen Lab Blog'
);

export default async function BlogLayout({
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
