import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export: the site has no server routes, so it deploys as plain files (Cloudflare Pages). */
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
