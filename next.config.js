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
    PUBLIC_URL: "https://your-organization-or-username.github.io/my-nextjs-app",
    assetPrefix: './'
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
}