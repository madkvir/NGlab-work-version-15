import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Integration - Smart Social Commerce | NeuroGen Lab",
  description: "Enhance your Instagram presence with AI-powered automation",
  keywords: [
    "instagram integration",
    "social media automation",
    "instagram bot",
    "social commerce",
  ],
  openGraph: {
    title: "Instagram Integration - Smart Social Commerce | NeuroGen Lab",
    description: "Enhance your Instagram presence with AI-powered automation",
    url: "https://neurogenlab.de/tools/instagram",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Instagram Integration - Social Media Automation",
    description: "Boost Instagram engagement with smart automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/instagram",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 