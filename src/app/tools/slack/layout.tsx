import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slack Integration | NeuroGen Lab - Team Communication Solution",
  description:
    "Enhance your team collaboration with our Slack integration. Automate workflows, manage communications, and improve productivity through intelligent integration.",
  keywords: ["slack integration", "team communication", "workflow automation", "collaboration"],
  openGraph: {
    title: "Slack Integration - Smart Team Communication | NeuroGen Lab",
    description: "Enhance team collaboration with intelligent Slack automation",
    url: "https://neurogenlab.de/tools/slack",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Slack Integration - Team Communication Solution",
    description: "Transform team communication with smart Slack integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/slack",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 