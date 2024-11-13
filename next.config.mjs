/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
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
