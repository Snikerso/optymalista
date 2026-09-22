import { projectDetails } from "@/data/projectDetails";
import { siteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/portfolio/", priority: 0.9 },
  { path: "/blog/", priority: 0.5 },
  { path: "/materialy/", priority: 0.4 },
  { path: "/filaments/", priority: 0.3 },
  { path: "/cognitive-training/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route.path, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...projectDetails.map((project) => ({
      url: new URL(`/projekty/${project.slug}/`, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
