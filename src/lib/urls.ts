import { siteConfig } from "@/content/site";

/**
 * Absolute page URL with a trailing slash, matching WordPress permalinks
 * (`/about/`) so search engines keep the URLs they already indexed.
 * Do not use this for files (`sitemap.xml`, images).
 */
export function pageUrl(path = "/"): string {
  if (path === "" || path === "/") return `${siteConfig.url}/`;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${siteConfig.url}${withSlash}`;
}
