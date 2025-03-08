import React from 'react';
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "name": "Responsible AI Policy",
  "articleSection": "Company Policies",
  "description": "NeuroGen Lab's commitment to ethical AI development and implementation",
  "url": `${baseUrl}/responsible-ai-policy`,
  "provider": {
    "@type": "AI Organization",
    "name": "NeuroGen Lab",
    "url": baseUrl
  }
};

export const metadata = generatePageMetadata(
  'responsible-ai-policy',
  'Responsible AI Policy | NeuroGen Lab - Ethical AI Guidelines',
  'Learn about NeuroGen Lab\'s commitment to ethical AI development and implementation. Our guidelines for responsible AI usage and development.',
  `${baseUrl}/assets/images/og-responsible-ai.jpg`,
  'NeuroGen Lab Responsible AI Policy'
);

export default function ResponsibleAiPolicyLayout({
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