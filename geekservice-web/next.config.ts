import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Prevent Turbopack from picking the wrong repo root when multiple lockfiles exist.
    root: __dirname,
  },
  experimental: {
    // On slow disks (often Windows HDDs), Turbopack's persistent FS cache can make dev feel "stuck".
    // Disabling it reduces heavy `.next/dev` IO at the cost of slower cold starts.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
