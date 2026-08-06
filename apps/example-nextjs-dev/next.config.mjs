/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ↓↓↓ この2行を新しく追加してください ↓↓↓
  basePath: '/my-shadergradient',
  assetPrefix: '/my-shadergradient',
  // ↑↑↑ ここまで ↑↑↑

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;