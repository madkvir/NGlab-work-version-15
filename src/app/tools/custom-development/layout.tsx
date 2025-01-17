import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Development | NeuroGen Lab - Tailored Software Solutions",
  description: "Transform your business with custom software development. Get tailored solutions that perfectly match your needs and drive growth.",
  keywords: [
    "custom development",
    "software solutions",
    "web development",
    "mobile apps",
    "enterprise software",
    "digital transformation"
  ],
  openGraph: {
    title: "Custom Development - Tailored Software Solutions | NeuroGen Lab",
    description: "Transform your business with custom software development solutions",
    url: "https://neurogenlab.de/tools/custom-development",
    images: [
      {
        url: "/images/tools/custom-development.jpg",
        alt: "Custom Development by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Custom Development - Tailored Solutions",
    description: "Transform your business with custom software",
    images: [
      {
        url: "/images/tools/custom-development.jpg",
        alt: "Custom Development by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/custom-development",
    languages: {
      'en': '/tools/custom-development',
      'de': '/de/tools/custom-development',
      'es': '/es/tools/custom-development',
      'ru': '/ru/tools/custom-development'
    }
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 