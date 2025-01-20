import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Solution | NeuroGen Lab - Intelligent Email Management",
  description: "Enhance email communication with AI technology. Smart filtering, automated responses, and advanced security for better email management.",
  keywords: [
    "email solution",
    "ai email",
    "smart email",
    "email management",
    "email security",
    "automated responses",
    "email analytics"
  ],
  openGraph: {
    title: "Email Solution - Intelligent Email Management | NeuroGen Lab",
    description: "Enhance your email communication with AI technology",
    url: "https://neurogenlab.de/tools/email",
    images: [
      {
        url: "/images/tools/email.jpg",
        alt: "Email Solution by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Email Solution - Smart Management",
    description: "Enhance email communication with AI",
    images: [
      {
        url: "/images/tools/email.jpg",
        alt: "Email Solution by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/email",
    languages: {
      'en': '/tools/email',
      'de': '/de/tools/email',
      'es': '/es/tools/email',
      'ru': '/ru/tools/email'
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