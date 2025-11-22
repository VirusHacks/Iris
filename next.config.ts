import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@prisma/client": path.resolve(__dirname, "./prisma/generated/client"),
    };
    return config;
  },
};

export default nextConfig;
