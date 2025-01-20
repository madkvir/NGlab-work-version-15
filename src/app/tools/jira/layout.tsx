import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jira Integration | NeuroGen Lab - Smart Project Management",
  description: "Enhance your project management with AI technology. Smart automation, analytics, and advanced features for better project tracking and team collaboration.",
  keywords: [
    "jira integration",
    "project management",
    "task automation",
    "team collaboration",
    "issue tracking",
    "sprint planning",
    "agile development"
  ],
  openGraph: {
    title: "Jira Integration - Smart Project Management | NeuroGen Lab",
    description: "Enhance your project management with AI technology",
    url: "https://neurogenlab.de/tools/jira",
    images: [
      {
        url: "/images/tools/jira.jpg",
        alt: "Jira Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Jira Integration - Smart Project Management",
    description: "Enhance project management with AI",
    images: [
      {
        url: "/images/tools/jira.jpg",
        alt: "Jira Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/jira",
    languages: {
      'en': '/tools/jira',
      'de': '/de/tools/jira',
      'es': '/es/tools/jira',
      'ru': '/ru/tools/jira'
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