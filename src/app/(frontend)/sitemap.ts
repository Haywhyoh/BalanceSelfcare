import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { getPayloadClient } from "@/lib/payload";

// Posts live in the production DB, which the CI build can't see. Render on
// request so the sitemap is never frozen with build-time content.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/psychotherapy",
    "/services/workshops",
    "/services/presentations",
    "/team",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    overrideAccess: false,
    depth: 0,
    limit: 200,
    sort: "-publishedAt",
  });

  return [
    // lastModified is intentionally omitted for static routes. Stamping every
    // URL with "now" on each build teaches Google to ignore the field.
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.startsWith("/services") || path === "/team" ? 0.9 : 0.7,
    })),
    ...teamMembers.map((member) => ({
      url: `${siteConfig.url}/team/${member.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
