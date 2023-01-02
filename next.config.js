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
      },
      {
        protocol:'https',
        hostname:'fakestoreapi.com'
      }
    ],
    minimumCacheTTL: 1500000
  }
}
