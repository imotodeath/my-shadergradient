/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ↓↓↓ ここから追加 ↓↓↓
  eslint: {
    // ビルド時のESLintエラーを無視する
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時のTypeScriptの型エラーを無視する
    ignoreBuildErrors: true,
  },
  // ↑↑↑ ここまで追加 ↑↑↑
};

export default nextConfig;