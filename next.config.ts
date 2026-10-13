import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'ordivy-web.vercel.app' }],
      destination: 'https://www.ordivy.app/:path*',
      permanent: true,
    }];
  },
};

export default nextConfig;
