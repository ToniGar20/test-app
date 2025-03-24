import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactDevOverlay: false,
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

export default nextConfig;
