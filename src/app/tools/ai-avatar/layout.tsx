import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Avatar Generator | NeuroGen Lab - Digital Identity Solution",
  description:
    "Transform your photos into stunning digital avatars with our AI-powered generator. Create unique, professional-quality avatars for personal and business use.",
  keywords: [
    "ai avatar generator",
    "digital identity",
    "profile picture generator",
    "ai photo transformation",
  ],
  openGraph: {
    title: "AI Avatar Generator - Smart Digital Identity | NeuroGen Lab",
    description: "Create unique digital avatars with AI technology",
    url: "https://neurogenlab.de/tools/ai-avatar",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "AI Avatar Generator - Digital Identity Solution",
    description: "Transform photos into stunning avatars with AI",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/ai-avatar",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 