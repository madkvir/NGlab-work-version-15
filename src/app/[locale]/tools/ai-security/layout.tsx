import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Security | NeuroGen Lab - Advanced Protection Solutions",
  description:
    "Secure your business with AI-powered protection. Detect and prevent threats in real-time with our advanced security solutions.",
  keywords: ["AI security", "threat detection", "cybersecurity", "AI protection", "security automation"],
  openGraph: {
    title: "AI Security - Advanced Protection | NeuroGen Lab",
    description: "Protect your business with AI-powered security solutions",
    url: "https://neurogenlab.de/tools/ai-security",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "AI Security - Smart Protection",
    description: "Advanced AI-powered security solutions for your business",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/ai-security",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 