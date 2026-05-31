import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정수환 | 자기소개",
  description: "정수환의 자기소개 사이트 — GitHub Pages 배포 테스트",
  verification: {
    google: "RmXJo5G1J8wt-WwfXlCtOhk76d5qj3TdMJwz1GbseN4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-[#4a4458]">
        {children}
      </body>
    </html>
  );
}
