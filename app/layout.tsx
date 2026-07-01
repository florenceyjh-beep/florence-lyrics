import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";

export const metadata: Metadata = {
  title: {
    default: "Florence Japanese",
    template: "%s | Florence Japanese",
  },
  description: "A mobile-first Japanese learning PWA built around songs, lessons, vocabulary, grammar, and review.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Florence Japanese",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <ServiceWorkerRegistration />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
