import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier Integration | NeuroGen Lab - Workflow Automation Solution",
  description:
    "Automate your business processes with our Zapier integration. Connect multiple applications and create efficient workflows with intelligent automation.",
  keywords: ["zapier integration", "workflow automation", "business automation", "app integration"],
  openGraph: {
    title: "Zapier Integration - Smart Workflow Automation | NeuroGen Lab",
    description: "Connect and automate your business tools with Zapier",
    url: "https://neurogenlab.de/tools/zapier",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Zapier Integration - Workflow Automation",
    description: "Transform business processes with smart automation",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/zapier",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 