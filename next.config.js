/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix: 'dameon1.github.io/arcademy',
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