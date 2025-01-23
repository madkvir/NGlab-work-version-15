import React from "react";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "About NeuroGen Lab - Innovating AI Technology",
  description:
    "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
  keywords: ["NeuroGen Lab", "AI technology", "about us", "leadership team", "innovation"],
  openGraph: {
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
    url: "https://neurogenlab.de/about-us",
  },
  twitter: {
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: "https://neurogenlab.de/about-us",
  },
};

// Добавляем Schema.org разметку
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeuroGen Lab",
  description: "Pioneering the future of AI technology to transform businesses worldwide",
  url: "https://neurogenlab.de",
  foundingDate: "2024",
  employees: [
    {
      "@type": "Person",
      name: "Maksym Bezverkhyi",
      jobTitle: "CEO & Founder",
    }
  ]
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
      {children}
    </>
  );
} 