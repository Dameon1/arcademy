/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  PUBLIC_URL: "https://www.dameonmendoza.com/arcademy",
  assetPrefix: './',
  images: { loader: 'custom' },
}


module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  nextConfig,
  images: {
    loader: 'imgix',
    path: '/',
  },
}