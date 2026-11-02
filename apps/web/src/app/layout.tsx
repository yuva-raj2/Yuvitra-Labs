import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuvitra Labs | Industrial Software & Digital Engineering",
  description:
    "Yuvitra Labs develops industrial software, custom digital platforms, AI-powered assistants and intelligent automation solutions that help businesses modernize their operations.",
  icons: {
    icon: [
      { url: "/brand/yl-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/yl-favicon.svg",
    apple: "/brand/yl-favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090A0F] text-[#F4F4F5] font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300">
        <Header />
        <div className="flex-1 flex flex-col min-w-0 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
