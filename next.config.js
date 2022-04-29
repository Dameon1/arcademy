/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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