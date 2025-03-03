import React from "react";
import { Metadata } from "next";
import { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neurogenlab.de";

// JSON-LD разметка для counseling (исправленный вариант)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NeuroGen Lab AI Counseling",
  "applicationCategory": "BusinessApplication, ConsultingApplication",
  "description": "AI-powered business counseling and consulting solutions for strategic decision-making and growth",
  "url": `${baseUrl}/tools/counseling`,
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
    "ratingValue": "4.9",
    "ratingCount": "195"
  }
};

export const metadata: Metadata = {
  title: "AI Counseling | NeuroGen Lab - Business Advisory",
  description: "Transform your business strategy with AI-powered counseling. Get intelligent insights, data-driven recommendations, and expert guidance for sustainable growth.",
  other: {
    "ai-optimized": "true",
  },
  keywords: [
    "AI counseling",
    "business advisory",
    "strategic consulting",
    "data analytics",
    "business intelligence",
    "growth strategy",
    "AI consulting",
    "decision support",
    "NeuroGen Lab counseling",
    "advisory solutions"
  ],
  openGraph: {
    type: "website",
    title: "AI Counseling - Business Advisory | NeuroGen Lab",
    description: "Transform your business strategy with AI-powered counseling. Expert guidance and intelligent insights for growth.",
    url: `${baseUrl}/tools/counseling`,
    siteName: "NeuroGen Lab",
    images: [
      {
        url: `${baseUrl}/assets/images/og-counseling.jpg`,
        width: 1200,
        height: 630,
        alt: "NeuroGen Lab AI Counseling",
        type: "image/jpeg",
      },
    ],
    locale: "en",
    alternateLocale: generateOpenGraphAlternateLocales(),
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Counseling - Smart Business Advisory",
    description: "Transform your business strategy with AI-powered counseling and expert guidance.",
    images: [`${baseUrl}/assets/images/og-counseling.jpg`],
    creator: "@neurogenlab",
    site: "@neurogenlab",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: generateHrefLangs('tools/counseling'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({
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
