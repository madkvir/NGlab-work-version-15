import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Integration | NeuroGen Lab - CRM Enhancement Solution",
  description:
    "Enhance your Salesforce CRM with our intelligent integration solution. Automate workflows, improve data management, and gain valuable insights through AI-powered analytics.",
  keywords: [
    "salesforce integration",
    "CRM automation",
    "sales automation",
    "business intelligence",
  ],
  openGraph: {
    title: "Salesforce Integration - Smart CRM Enhancement | NeuroGen Lab",
    description: "Transform your CRM with intelligent Salesforce automation",
    url: "https://neurogenlab.de/tools/salesforce",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Salesforce Integration - CRM Enhancement",
    description: "Enhance CRM with smart Salesforce integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/salesforce",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 