import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Business Integration | NeuroGen Lab - Messaging Solution",
  description:
    "Optimize your business communication with our WhatsApp integration. Enable automated responses, secure messaging, and enhanced customer engagement through WhatsApp Business API.",
  keywords: [
    "whatsapp business",
    "messaging integration",
    "customer communication",
    "business api",
  ],
  openGraph: {
    title: "WhatsApp Business Integration - Smart Messaging | NeuroGen Lab",
    description: "Enhance customer communication with WhatsApp automation",
    url: "https://neurogenlab.de/tools/whatsapp",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "WhatsApp Business Integration - Messaging Solution",
    description: "Transform business messaging with WhatsApp integration",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/whatsapp",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 