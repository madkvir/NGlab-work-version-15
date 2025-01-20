import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Integration | NeuroGen Lab - Smart CRM Management",
  description: "Enhance your CRM with AI technology. Smart automation, analytics, and advanced features for better customer relationship management.",
  keywords: [
    "salesforce integration",
    "crm management",
    "sales automation",
    "customer analytics",
    "lead management",
    "pipeline management",
    "sales forecasting"
  ],
  openGraph: {
    title: "Salesforce Integration - Smart CRM Management | NeuroGen Lab",
    description: "Enhance your CRM with AI technology",
    url: "https://neurogenlab.de/tools/salesforce",
    images: [
      {
        url: "/images/tools/salesforce.jpg",
        alt: "Salesforce Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Salesforce Integration - Smart CRM Management",
    description: "Enhance your CRM with AI",
    images: [
      {
        url: "/images/tools/salesforce.jpg",
        alt: "Salesforce Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/salesforce",
    languages: {
      'en': '/tools/salesforce',
      'de': '/de/tools/salesforce',
      'es': '/es/tools/salesforce',
      'ru': '/ru/tools/salesforce'
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