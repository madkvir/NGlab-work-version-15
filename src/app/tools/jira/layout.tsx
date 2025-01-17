import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jira Integration | NeuroGen Lab - Project Management Solution",
  description:
    "Optimize your project management with our Jira integration. Automate workflows, enhance collaboration, and improve productivity with intelligent issue tracking.",
  keywords: [
    "jira integration",
    "project management",
    "issue tracking",
    "workflow automation",
  ],
  openGraph: {
    title: "Jira Integration - Smart Project Management | NeuroGen Lab",
    description: "Enhance project management with intelligent Jira automation",
    url: "https://neurogenlab.de/tools/jira",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Jira Integration - Project Management",
    description: "Optimize workflows with smart Jira integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/jira",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 