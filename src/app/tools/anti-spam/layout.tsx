import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Spam Protection | NeuroGen Lab - Advanced Security Solutions",
  description: "Protect your digital space with advanced anti-spam solutions. Implement intelligent filters and automated protection against unwanted content.",
  keywords: [
    "anti-spam",
    "spam protection",
    "content filtering",
    "security solutions",
    "AI protection",
    "automated moderation",
    "spam prevention"
  ],
  openGraph: {
    title: "Anti-Spam Protection - Advanced Security Solutions | NeuroGen Lab",
    description: "Protect your digital space with advanced anti-spam solutions",
    url: "https://neurogenlab.de/tools/anti-spam",
    images: [
      {
        url: "/images/tools/anti-spam.jpg",
        alt: "Anti-Spam Protection by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Anti-Spam Protection - Advanced Security",
    description: "Protect your digital space with intelligent solutions",
    images: [
      {
        url: "/images/tools/anti-spam.jpg",
        alt: "Anti-Spam Protection by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/anti-spam",
    languages: {
      'en': '/tools/anti-spam',
      'de': '/de/tools/anti-spam',
      'es': '/es/tools/anti-spam',
      'ru': '/ru/tools/anti-spam'
    }
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 