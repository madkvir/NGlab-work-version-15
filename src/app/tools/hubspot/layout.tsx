import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Integration | NeuroGen Lab - Marketing Automation Solution",
  description:
    "Transform your marketing and sales with our HubSpot integration. Implement intelligent automation, enhance customer engagement, and improve ROI through AI-powered tools.",
  keywords: ["hubspot integration", "marketing automation", "sales automation", "CRM"],
  openGraph: {
    title: "HubSpot Integration - Smart Marketing | NeuroGen Lab",
    description: "Transform your marketing with intelligent HubSpot automation",
    url: "https://neurogenlab.de/tools/hubspot",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "HubSpot Integration - Marketing Automation",
    description: "Enhance marketing with smart HubSpot integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/hubspot",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 