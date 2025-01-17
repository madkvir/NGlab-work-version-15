import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Implementation Counseling | NeuroGen Lab - Expert Guidance",
  description:
    "Get expert guidance for your AI implementation journey. Our counseling services ensure successful integration of artificial intelligence into your business operations.",
  keywords: [
    "AI counseling",
    "implementation guidance",
    "AI consulting",
    "business transformation",
  ],
  openGraph: {
    title: "AI Implementation Counseling - Expert Guidance | NeuroGen Lab",
    description: "Expert guidance for successful AI implementation in business",
    url: "https://neurogenlab.de/tools/counseling",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "AI Implementation Counseling - Expert Support",
    description: "Professional guidance for AI business integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/counseling",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 