/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['secure.gravatar.com', 'blog.100f.com'],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noarchive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;