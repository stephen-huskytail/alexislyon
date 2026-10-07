/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  }
];

const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/the-foundation', destination: '/philosophy', permanent: true },
      { source: '/work-with-me', destination: '/#work', permanent: true },
      // 2026-10-07: the two psychological-flexibility essays were merged into one at the exact-match URL.
      { source: '/blog/psychological-flexibility-overlooked-superpower', destination: '/blog/psychological-flexibility', statusCode: 301 }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
