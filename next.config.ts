import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Hanya terapkan upgrade HTTPS & HSTS jika dideploy di cloud (Vercel/Live domain)
// JANGAN terapkan di localhost karena localhost menggunakan HTTP dan akan memblokir CSS/aset!
const isLiveDomain = isProd && Boolean(process.env.VERCEL || process.env.LIVE_DOMAIN);

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' data:;
    connect-src 'self' https: ws: wss:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${isLiveDomain ? "upgrade-insecure-requests;" : ""}
`;

const headersList = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/g, ''),
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
];

if (isLiveDomain) {
  headersList.push({
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  });
}

const nextConfig: NextConfig = {
  // Enable AVIF and WebP image formats for optimal compression
  images: {
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Image sizes for fixed-size images (like the profile photo 240px wide)
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async headers() {
    if (!isProd) {
      return [];
    }
    return [
      {
        source: '/(.*)',
        headers: headersList,
      },
    ];
  },
};

export default nextConfig;
