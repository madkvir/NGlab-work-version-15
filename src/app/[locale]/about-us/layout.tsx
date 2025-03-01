import React from "react";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata: Metadata = {
  title: "About NeuroGen Lab - Innovating AI Technology",
  description:
    "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
  other: {
    'ai-optimized': 'true',
  },
  keywords: [
    "NeuroGen Lab", 
    "AI technology", 
    "about us", 
    "leadership team", 
    "innovation", 
    "AI consulting services", 
    "AI-driven business solutions", 
    "cutting-edge AI technology"
  ],
  openGraph: {
    type: 'website',
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
    url: `${baseUrl}/about-us`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/about-us-banner.png`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab Team Working on AI Innovation",
        type: 'image/png',
      },
    ],
    locale: 'en',
    alternateLocale: ['de', 'es', 'ru', 'uk'],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
    images: ["https://neurogenlab.de/assets/images/about-us-banner.png"],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: `${baseUrl}/about-us`,
    languages: {
      'en': `${baseUrl}/en/about-us`,
      'de': `${baseUrl}/de/about-us`,
      'es': `${baseUrl}/es/about-us`,
      'ru': `${baseUrl}/ru/about-us`,
      'uk': `${baseUrl}/uk/about-us`
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeuroGen Lab",
  description: "Pioneering the future of AI technology to transform businesses worldwide",
  url: "https://neurogenlab.de",
  foundingDate: "2024",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gartenweg 2",
      addressLocality: "Oranienburg",
      postalCode: "16515",
      addressCountry: "Germany",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: "+49 151 22582232",
    email: "office@neurogenlab.de",
  },
  employees: [
    {
      "@type": "Person",
      name: "Maksym Bezverkhyi",
      jobTitle: "CEO & Founder",
    },
    {
      "@type": "Person",
      name: "Oleksandr Kulykov",
      jobTitle: "CTO",
    },
    {
      "@type": "Person",
      name: "Liudmyla (Elle) Podolska",
      jobTitle: "AI Creator",
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/neurogen-lab",
    "https://x.com/neurogenlab",
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "About NeuroGen Lab - Innovating AI Technology",
  author: {
    "@type": "Organization",
    name: "NeuroGen Lab",
  },
  publisher: {
    "@type": "Organization",
    name: "NeuroGen Lab",
    logo: {
      "@type": "ImageObject",
      url: "https://neurogenlab.de/logo.png",
    },
  },
  datePublished: "2024-01-01",
  description:
    "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
};

export default function AboutLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {children}
    </>
  );
} 