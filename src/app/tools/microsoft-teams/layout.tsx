import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Teams Integration | NeuroGen Lab - Collaboration Solution",
  description:
    "Optimize your team collaboration with our Microsoft Teams integration. Enable intelligent communication, automate workflows, and enhance productivity through AI-powered tools.",
  keywords: ["microsoft teams integration", "team collaboration", "workflow automation"],
  openGraph: {
    title: "Microsoft Teams Integration - Smart Collaboration | NeuroGen Lab",
    description: "Enhance team collaboration with AI-powered automation",
    url: "https://neurogenlab.de/tools/microsoft-teams",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Microsoft Teams Integration - Collaboration Solution",
    description: "Transform teamwork with intelligent Teams integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/microsoft-teams",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 