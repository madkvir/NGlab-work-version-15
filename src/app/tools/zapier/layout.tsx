import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier Integration | NeuroGen Lab - Smart Workflow Automation",
  description: "Enhance your workflow automation with AI technology. Smart automation, analytics, and advanced features for better process management.",
  keywords: [
    "zapier integration",
    "workflow automation",
    "process automation",
    "task management",
    "data synchronization",
    "trigger management",
    "process analytics"
  ],
  openGraph: {
    title: "Zapier Integration - Smart Workflow Automation | NeuroGen Lab",
    description: "Enhance your workflow automation with AI technology",
    url: "https://neurogenlab.de/tools/zapier",
    images: [
      {
        url: "/images/tools/zapier.jpg",
        alt: "Zapier Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Zapier Integration - Smart Workflow Automation",
    description: "Enhance workflow automation with AI",
    images: [
      {
        url: "/images/tools/zapier.jpg",
        alt: "Zapier Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/zapier",
    languages: {
      'en': '/tools/zapier',
      'de': '/de/tools/zapier',
      'es': '/es/tools/zapier',
      'ru': '/ru/tools/zapier'
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