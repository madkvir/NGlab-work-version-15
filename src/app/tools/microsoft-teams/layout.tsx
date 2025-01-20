import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Teams Integration | NeuroGen Lab - Smart Team Collaboration",
  description: "Enhance your team collaboration with AI technology. Smart automation, analytics, and advanced features for better team communication and productivity.",
  keywords: [
    "microsoft teams integration",
    "team collaboration",
    "meeting management",
    "document collaboration",
    "team analytics",
    "workflow automation",
    "channel management"
  ],
  openGraph: {
    title: "Microsoft Teams Integration - Smart Team Collaboration | NeuroGen Lab",
    description: "Enhance your team collaboration with AI technology",
    url: "https://neurogenlab.de/tools/microsoft-teams",
    images: [
      {
        url: "/images/tools/microsoft-teams.jpg",
        alt: "Microsoft Teams Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Microsoft Teams Integration - Smart Team Collaboration",
    description: "Enhance team collaboration with AI",
    images: [
      {
        url: "/images/tools/microsoft-teams.jpg",
        alt: "Microsoft Teams Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/microsoft-teams",
    languages: {
      'en': '/tools/microsoft-teams',
      'de': '/de/tools/microsoft-teams',
      'es': '/es/tools/microsoft-teams',
      'ru': '/ru/tools/microsoft-teams'
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