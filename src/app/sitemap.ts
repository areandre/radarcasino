import type { MetadataRoute } from "next";
import { casinos } from "@/lib/casinos";
import { siteConfig } from "@/lib/site";
import { states } from "@/lib/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = ["", "/casinos", "/bonuses", "/states", "/banking", "/guides", "/legal", "/responsible-play", "/privacy", "/terms"];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: now })),
    ...casinos.map((casino) => ({ url: `${base}/reviews/${casino.slug}`, lastModified: now })),
    ...states.map((state) => ({ url: `${base}/states/${state.slug}`, lastModified: now }))
  ];
}
