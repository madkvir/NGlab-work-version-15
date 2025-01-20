import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slack Integration | NeuroGen Lab - Smart Team Communication",
  description: "Enhance your team communication with AI technology. Smart automation, analytics, and advanced features for better team collaboration.",
  keywords: [
    "slack integration",
    "team communication",
    "message management",
    "channel analytics",
    "workflow automation",
    "team collaboration",
    "bot integration"
  ],
  openGraph: {
    title: "Slack Integration - Smart Team Communication | NeuroGen Lab",
    description: "Enhance your team communication with AI technology",
    url: "https://neurogenlab.de/tools/slack",
    images: [
      {
        url: "/images/tools/slack.jpg",
        alt: "Slack Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Slack Integration - Smart Team Communication",
    description: "Enhance team communication with AI",
    images: [
      {
        url: "/images/tools/slack.jpg",
        alt: "Slack Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/slack",
    languages: {
      'en': '/tools/slack',
      'de': '/de/tools/slack',
      'es': '/es/tools/slack',
      'ru': '/ru/tools/slack'
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