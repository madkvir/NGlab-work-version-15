import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiveChat Integration | NeuroGen Lab - Customer Support Solution",
  description:
    "Transform your customer support with our LiveChat integration. Combine human interaction with AI assistance for exceptional customer service and improved engagement.",
  keywords: ["livechat integration", "customer support", "live chat", "customer service"],
  openGraph: {
    title: "LiveChat Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance customer support with AI-powered live chat",
    url: "https://neurogenlab.de/tools/livechat",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "LiveChat Integration - Customer Support Solution",
    description: "Transform support with intelligent live chat",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/livechat",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 