/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com','assets.aceternity.com','store.storeimages.cdn-apple.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'store.storeimages.cdn-apple.com',
                port: '',
                pathname: '**',
            }
        ],
    },
    
}

module.exports = nextConfig
