import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { getPayloadClient } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

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
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.startsWith("/services") || path === "/team" ? 0.9 : 0.7,
    })),
    ...teamMembers.map((member) => ({
      url: `${siteConfig.url}/team/${member.slug}`,
      lastModified: now,
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
