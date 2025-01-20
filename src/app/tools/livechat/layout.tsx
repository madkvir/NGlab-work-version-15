import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiveChat Integration | NeuroGen Lab - Smart Customer Support",
  description: "Enhance your customer support with AI technology. Real-time chat, automated responses, and advanced analytics for better customer communication.",
  keywords: [
    "livechat integration",
    "customer support",
    "real-time chat",
    "chat automation",
    "visitor analytics",
    "customer communication",
    "support automation"
  ],
  openGraph: {
    title: "LiveChat Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance your customer support with AI technology",
    url: "https://neurogenlab.de/tools/livechat",
    images: [
      {
        url: "/images/tools/livechat.jpg",
        alt: "LiveChat Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "LiveChat Integration - Smart Customer Support",
    description: "Enhance customer support with AI",
    images: [
      {
        url: "/images/tools/livechat.jpg",
        alt: "LiveChat Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/livechat",
    languages: {
      'en': '/tools/livechat',
      'de': '/de/tools/livechat',
      'es': '/es/tools/livechat',
      'ru': '/ru/tools/livechat'
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