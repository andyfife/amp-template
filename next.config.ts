import { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'milkywayfiasco.sfo2.cdn.digitaloceanspaces.com',
          },
          {
            protocol: 'https',
            hostname: 'i0.wp.com',
          },
        ],
      },
}

module.exports = nextConfig
