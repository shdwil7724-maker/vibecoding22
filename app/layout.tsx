import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { absoluteUrl } from "@/lib/feeds";
import { siteConfig } from "@/lib/site";
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
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    types: {
      "application/rss+xml": absoluteUrl("/rss.xml"),
    },
  },
  verification: {
    google: "RmXJo5G1J8wt-WwfXlCtOhk76d5qj3TdMJwz1GbseN4",
    other: {
      "naver-site-verification": "46927fd26e66a36aefc5874e1cdca282965d8225",
    },
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
      <body className="flex min-h-full flex-col text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
