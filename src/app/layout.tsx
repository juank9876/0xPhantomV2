import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "@/components/LoadingScreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "0x-Phantom - Your affiliate site faster than ever",
  description:
    "Build and grow your casino affiliate site 3× faster — no tech hassle",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden bg-black">
      <body className={`overflow-x-hidden font-sans bg-black ${poppins.variable} ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <LoadingScreen />
        {children}
        <Analytics />

      </body>
    </html>
  );
}
