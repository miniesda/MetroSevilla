import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    'https://192.168.1.128:3000',
  ],
};

export default nextConfig;
