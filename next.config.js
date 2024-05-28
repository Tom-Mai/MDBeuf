/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-tel-input'],
}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {hostname:'primary.jwwb.nl'},
        {hostname:'images.unsplash.com'}], // Ajoutez ici les domaines autorisés
    },
  };
  