/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'jeuxvideo.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.jeuxvideo.com',
        port: '',
        pathname: `/**/**`,
      },
    ],
  },
};

module.exports = nextConfig;