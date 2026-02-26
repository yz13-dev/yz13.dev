import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from "next";

const withMDX = createMDX({});


const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  enablePrerenderSourceMaps: false,
  experimental: {
    optimizeCss: true,
    serverSourceMaps: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "checkhouse.app",
      },
    ],
  },
};

export default withMDX(nextConfig);
