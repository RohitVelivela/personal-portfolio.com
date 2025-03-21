/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig
