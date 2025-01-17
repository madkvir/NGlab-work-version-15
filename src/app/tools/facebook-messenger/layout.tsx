import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhance Messaging with Facebook Messenger Integration",
  description:
    "Enhance your customer communication with our Facebook Messenger integration. Provide instant, intelligent responses and seamless customer support through social messaging.",
  keywords: ["facebook messenger", "messenger integration", "social messaging", "customer support"],
  openGraph: {
    title: "Facebook Messenger Integration - Smart Social Support | NeuroGen Lab",
    description: "Connect with customers through intelligent Messenger automation",
    url: "https://neurogenlab.de/tools/facebook-messenger",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Facebook Messenger Integration - Smart Communication",
    description: "Enhance customer support with Messenger automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/facebook-messenger",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 