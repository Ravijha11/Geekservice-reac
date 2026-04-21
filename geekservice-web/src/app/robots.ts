import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${env.SITE_URL ?? siteConfig.domain}`;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}

