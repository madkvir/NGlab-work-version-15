import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Integration | NeuroGen Lab - Intelligent CRM Enhancement",
  description: "Enhance your HubSpot experience with AI technology. Smart automation, analytics, and advanced features for better customer relationship management.",
  keywords: [
    "hubspot integration",
    "crm enhancement",
    "ai automation",
    "customer management",
    "lead scoring",
    "data analytics",
    "business automation"
  ],
  openGraph: {
    title: "HubSpot Integration - Intelligent CRM Enhancement | NeuroGen Lab",
    description: "Enhance your HubSpot experience with AI technology",
    url: "https://neurogenlab.de/tools/hubspot",
    images: [
      {
        url: "/images/tools/hubspot.jpg",
        alt: "HubSpot Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "HubSpot Integration - Smart CRM Enhancement",
    description: "Enhance HubSpot with AI technology",
    images: [
      {
        url: "/images/tools/hubspot.jpg",
        alt: "HubSpot Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/hubspot",
    languages: {
      'en': '/tools/hubspot',
      'de': '/de/tools/hubspot',
      'es': '/es/tools/hubspot',
      'ru': '/ru/tools/hubspot'
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