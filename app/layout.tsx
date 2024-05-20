import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoriel Bucris",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
