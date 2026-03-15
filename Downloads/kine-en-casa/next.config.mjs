/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Commented out to enable optimization
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kineum.cl',
          },
        ],
        destination: 'https://kineum.cl/:path*',
        permanent: true, // 301 redirect for SEO
      },
    ]
  },
}

export default nextConfig
