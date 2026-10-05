import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const defaultOgImage = "/images/home/welcome.jpg";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  /**
   * Use the title exactly as written, skipping the "| Balance Self-Care"
   * suffix template. Use for the homepage so the keyword leads the title.
   */
  absoluteTitle?: boolean;
  /**
   * Set to "article" for blog posts to get article-specific OpenGraph tags
   * (publishedTime, modifiedTime, authors) and unlock rich previews on
   * socials and some search engines.
   */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    absoluteTitle || title === siteConfig.name
      ? title
      : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph:
      type === "article"
        ? {
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: "en_CA",
            type: "article",
            images: [{ url: image, alt: fullTitle }],
            publishedTime,
            modifiedTime,
            authors,
          }
        : {
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: "en_CA",
            type: "website",
            images: [{ url: image, alt: fullTitle }],
          },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
