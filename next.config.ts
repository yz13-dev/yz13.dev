import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from "next";

const withMDX = createMDX({});


const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  enablePrerenderSourceMaps: false,
  cacheComponents: true,
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
        hostname: "hostkitjs.ru",
      },
      {
        protocol: "https",
        hostname: "yz13.site",
      },
      {
        protocol: "https",
        hostname: "*.yz13.dev",
      },
      {
        protocol: "https",
        hostname: "yz13.dev",
      },
      {
        protocol: "https",
        hostname: "checkhouse.app",
      },
    ],
  },
};

export default withMDX(nextConfig);
