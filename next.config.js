/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'pngimg.com'
      },
      {
        protocol: 'https',
        hostname:'links.papareact.com'
      }
    ],
    minimumCacheTTL: 1500000
  }
}
