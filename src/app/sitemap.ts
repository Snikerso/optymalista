import { blogPosts } from "@/data/blogPosts";
import { projectDetails } from "@/data/projectDetails";
import { siteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/projekty/", priority: 0.95 },
  { path: "/portfolio/", priority: 0.9 },
  { path: "/blog/", priority: 0.5 },
  { path: "/materialy/", priority: 0.4 },
  { path: "/filaments/", priority: 0.3 },
  { path: "/cognitive-training/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route.path, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...blogPosts.filter((post) => post.source === "portfolio").map((post) => ({
      url: new URL(post.link, siteUrl).toString(),
      lastModified: post.date ? new Date(post.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projectDetails.map((project) => ({
      url: new URL(`/projekty/${project.slug}/`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
