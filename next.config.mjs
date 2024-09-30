/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ["src"],
	},
	images: {
		remotePatterns: [
			{ hostname: "images.unsplash.com" },
			{ hostname: "images.pexels.com" },
			{ hostname: "utfs.io" },
		],
	},
};

export default nextConfig;
