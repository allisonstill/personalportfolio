
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enables static HTML export
    distDir: 'out',
    images: {
      unoptimized: true, // Required for static export
    },
    // Add basePath if you're not using a custom domain
    // basePath: '/personalportfolio',
  }
  
  module.exports = nextConfig