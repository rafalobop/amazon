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
  },
  env:{
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
