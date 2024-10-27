import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cookie-Control',
            value: 'strict'
          }
        ],
      },
    ]
  },
  serverRuntimeConfig: {
    // Increase header size limit (8MB)
    maxHeaderSize: 8192 * 1024,
  },
  experimental: {
    largePageDataBytes: 128 * 1024, // 128KB
  },
  /* config options here */
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  reactStrictMode: true,
};

export default nextConfig;
