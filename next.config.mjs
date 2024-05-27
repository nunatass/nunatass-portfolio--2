/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'pub-2815e42a47aa405db2fb0aeb816612b8.r2.dev',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
