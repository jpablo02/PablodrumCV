// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: [
      "ipfs.io",
      "bafybeiac6cjqivfvx3zrmx3gdoojsvlse2a4ss5gqdpvgofj46vyjzkhzq.ipfs.dweb.link",
      "bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link",
      "ipfs.io",
    ], // Añade esta línea para permitir imágenes desde ipfs.io
  },
};

module.exports = nextConfig;
