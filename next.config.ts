import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname:'/**'
      }
    ],
  },
  
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  
};
module.exports = {
      eslint: {
        ignoreDuringBuilds: true,
      },
    };

export default nextConfig;
