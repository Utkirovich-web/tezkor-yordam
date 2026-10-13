import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages uchun statik HTML (out/ papkasiga) chiqaradi
  output: "export",
  // GitHub Pages sayt /tezkor-yordam/ ostida ochiladi; lokalda bo‘sh qoladi
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
