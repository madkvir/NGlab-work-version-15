import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Integration | NeuroGen Lab - Smart Customer Messaging",
  description: "Enhance your customer messaging with AI technology. Smart automation, analytics, and advanced features for better customer communication.",
  keywords: [
    "whatsapp integration",
    "customer messaging",
    "message automation",
    "chat analytics",
    "customer engagement",
    "message templates",
    "bot integration"
  ],
  openGraph: {
    title: "WhatsApp Integration - Smart Customer Messaging | NeuroGen Lab",
    description: "Enhance your customer messaging with AI technology",
    url: "https://neurogenlab.de/tools/whatsapp",
    images: [
      {
        url: "/images/tools/whatsapp.jpg",
        alt: "WhatsApp Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "WhatsApp Integration - Smart Customer Messaging",
    description: "Enhance customer messaging with AI",
    images: [
      {
        url: "/images/tools/whatsapp.jpg",
        alt: "WhatsApp Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/whatsapp",
    languages: {
      'en': '/tools/whatsapp',
      'de': '/de/tools/whatsapp',
      'es': '/es/tools/whatsapp',
      'ru': '/ru/tools/whatsapp'
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