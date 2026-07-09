import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.heroSub,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
