import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 정적 HTML 내보내기 활성화
  images: { unoptimized: true }, // 정적 내보내기 시 Next.js 이미지 최적화 비활성화
};

export default nextConfig;
