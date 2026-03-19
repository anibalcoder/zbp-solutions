import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anibalcoder.vercel.app',
        pathname: '/projects/tres-en-raya.webp',
      },
    ],
  },
};

export default nextConfig;
