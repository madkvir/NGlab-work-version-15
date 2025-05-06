import type { Metadata, ResolvingMetadata } from "next";
import axios from "axios";
import { generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://neurogenlab.de";

  const { data: post } = await axios.get(`${apiUrl}/api/blog/${slug}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const translation = post.translations?.find((t) => t.locale === locale);

  return {
    title: translation?.title || post.title,
    description: translation?.excerpt || post.excerpt,
    openGraph: {
      type: "website",
      title: translation?.title || post.title,
      description: translation?.excerpt || post.excerpt,
      url: `${apiUrl}/blog/${slug}`,
      siteName: "NeuroGen Lab",
      images: post.images,
      locale: locale,
      alternateLocale: generateOpenGraphAlternateLocales(),
    },
    twitter: {
      card: "summary_large_image",
      title: translation?.title || post.title,
      description: translation?.excerpt || post.excerpt,
      images: post.images,
      creator: "@neurogenlab",
      site: "@neurogenlab",
    },
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
