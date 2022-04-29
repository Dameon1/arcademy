/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "./" }
    };
  },
  PUBLIC_URL: "/",
  assetPrefix: './',
  images: { loader: 'custom' },
}


module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  nextConfig,
  env: {
    PUBLIC_URL: "https://www.dameonmendoza.com/arcademy",
    assetPrefix: './'
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
}