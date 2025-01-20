import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Integration | NeuroGen Lab - Smart Social Media Management",
  description: "Enhance your Instagram presence with AI technology. Smart scheduling, analytics, and advanced features for better social media management.",
  keywords: [
    "instagram integration",
    "social media management",
    "content scheduling",
    "instagram analytics",
    "hashtag management",
    "engagement tracking",
    "social media automation"
  ],
  openGraph: {
    title: "Instagram Integration - Smart Social Media Management | NeuroGen Lab",
    description: "Enhance your Instagram presence with AI technology",
    url: "https://neurogenlab.de/tools/instagram",
    images: [
      {
        url: "/images/tools/instagram.jpg",
        alt: "Instagram Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Instagram Integration - Smart Social Management",
    description: "Enhance Instagram presence with AI",
    images: [
      {
        url: "/images/tools/instagram.jpg",
        alt: "Instagram Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/instagram",
    languages: {
      'en': '/tools/instagram',
      'de': '/de/tools/instagram',
      'es': '/es/tools/instagram',
      'ru': '/ru/tools/instagram'
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