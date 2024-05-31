/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media-assets.swiggy.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
