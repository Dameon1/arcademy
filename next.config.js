/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },

  images: { loader: 'custom' },
}

module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  nextConfig,
  basePath = isProd ? '/arcademy' : '',
  assetPrefix = isProd ? '/arcademy' : '',
  images: {
    loader: 'imgix',
    path: '/',
  },
}