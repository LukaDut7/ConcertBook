/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.vggcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
