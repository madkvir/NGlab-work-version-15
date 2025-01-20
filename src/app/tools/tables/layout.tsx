import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Tables | NeuroGen Lab - Intelligent Data Management",
  description: "Transform your data management with AI technology. Smart organization, analytics, and advanced features for better data handling.",
  keywords: [
    "smart tables",
    "data management",
    "data organization",
    "data analytics",
    "data visualization",
    "column management",
    "data filtering"
  ],
  openGraph: {
    title: "Smart Tables - Intelligent Data Management | NeuroGen Lab",
    description: "Transform your data management with AI technology",
    url: "https://neurogenlab.de/tools/tables",
    images: [
      {
        url: "/images/tools/tables.jpg",
        alt: "Smart Tables by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Smart Tables - Intelligent Data Management",
    description: "Transform data management with AI",
    images: [
      {
        url: "/images/tools/tables.jpg",
        alt: "Smart Tables by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/tables",
    languages: {
      'en': '/tools/tables',
      'de': '/de/tools/tables',
      'es': '/es/tools/tables',
      'ru': '/ru/tools/tables'
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