import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/psychotherapy",
    "/services/workshops",
    "/services/presentations",
    "/team",
    "/contact",
    "/privacy",
    "/terms",
  ];

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
  ];
}
