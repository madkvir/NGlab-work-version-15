import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import axios from "axios";
import {
  generateHrefLangs,
  generateOpenGraphAlternateLocales,
} from "../../../../utils/generateHrefLangs";

type generateMetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: generateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const apiUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_API_URL || "https://neurogenlab.de";

  const { data: post } = await axios.get(`${apiUrl}/api/blog/${slug}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return {
    title: post.title,
    description: "page description",
    openGraph: {
      type: "website",
      title: post.title,
      description: post.excerpt,
      url: `${apiUrl}/blog/${slug}`,
      siteName: "NeuroGen Lab",
      images: post.images,
      locale: "en",
      alternateLocale: generateOpenGraphAlternateLocales(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.images,
      creator: "@neurogenlab",
      site: "@neurogenlab",
    },
    // alternates: generateHrefLangs(path),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "NeuroGen Lab Team" }],
  };
}

export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
