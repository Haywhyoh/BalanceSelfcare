import type { Media } from "@/payload-types";

type MediaSize = "thumbnail" | "card" | "og";

/**
 * File URLs from Payload include a trailing slash because the site uses
 * `trailingSlash`. Next.js redirects that slash away, and the image optimizer
 * rejects the redirect, so cards render a broken image. Strip it before use.
 */
export function mediaFileUrl(
  media: Media | number | null | undefined,
  size?: MediaSize,
): string | null {
  if (!media || typeof media === "number") return null;

  const raw = (size ? media.sizes?.[size]?.url : undefined) ?? media.url ?? null;
  if (!raw) return null;

  return raw.replace(/\/+$/, "");
}
