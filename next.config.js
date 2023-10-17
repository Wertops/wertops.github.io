/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {unoptimized:true},
    distDir: 'docs'
    
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
  //images.unoptimized = true
  module.exports = nextConfig
