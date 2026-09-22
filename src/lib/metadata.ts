import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  keywords?: string[];
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonical,
  keywords,
}: MetadataParams = {}): Metadata {
  const isBrandInTitle = title === siteConfig.name || title.includes(siteConfig.shortName);
  const titleObj = isBrandInTitle
    ? { absolute: title }
    : { default: title, template: `%s | ${siteConfig.shortName}` };

  return {
    title: titleObj,
    description,
    keywords: keywords
      ? [...new Set([...keywords, ...siteConfig.keywords])]
      : [...siteConfig.keywords],
    authors: [{ name: siteConfig.creator, url: siteConfig.url }],
    creator: siteConfig.creator,
    icons: { icon: "/favicon.ico" },
    openGraph: {
      type: "website",
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: canonical || siteConfig.url },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
