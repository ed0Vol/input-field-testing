/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: "/input-field-testing",
  assetPrefix: "/input-field-testing"
}

module.exports = nextConfig
