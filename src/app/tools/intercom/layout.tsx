import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - Smart Customer Communication",
  description: "Enhance your customer communication with AI technology. Smart routing, automated responses, and advanced analytics for better customer support.",
  keywords: [
    "intercom integration",
    "customer communication",
    "chat automation",
    "customer support",
    "team collaboration",
    "conversation management",
    "support analytics"
  ],
  openGraph: {
    title: "Intercom Integration - Smart Customer Communication | NeuroGen Lab",
    description: "Enhance your customer communication with AI technology",
    url: "https://neurogenlab.de/tools/intercom",
    images: [
      {
        url: "/images/tools/intercom.jpg",
        alt: "Intercom Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Intercom Integration - Smart Customer Support",
    description: "Enhance customer communication with AI",
    images: [
      {
        url: "/images/tools/intercom.jpg",
        alt: "Intercom Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/intercom",
    languages: {
      'en': '/tools/intercom',
      'de': '/de/tools/intercom',
      'es': '/es/tools/intercom',
      'ru': '/ru/tools/intercom'
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