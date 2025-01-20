import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Messenger Solution | NeuroGen Lab - Intelligent Messaging",
  description: "Enhance Messenger communication with AI technology. Automated responses, analytics, and advanced features for better message management.",
  keywords: [
    "facebook messenger",
    "messenger automation",
    "ai messaging",
    "chat management",
    "message analytics",
    "automated responses",
    "business messaging"
  ],
  openGraph: {
    title: "Facebook Messenger Solution - Intelligent Messaging | NeuroGen Lab",
    description: "Enhance your Messenger communication with AI technology",
    url: "https://neurogenlab.de/tools/facebook-messenger",
    images: [
      {
        url: "/images/tools/facebook-messenger.jpg",
        alt: "Facebook Messenger Solution by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Facebook Messenger Solution - Smart Communication",
    description: "Enhance Messenger communication with AI",
    images: [
      {
        url: "/images/tools/facebook-messenger.jpg",
        alt: "Facebook Messenger Solution by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/facebook-messenger",
    languages: {
      'en': '/tools/facebook-messenger',
      'de': '/de/tools/facebook-messenger',
      'es': '/es/tools/facebook-messenger',
      'ru': '/ru/tools/facebook-messenger'
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