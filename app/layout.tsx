import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),

  title: {
    default: "Syed Kamran Shah — AI Full-Stack Developer",
    template: "%s — Syed Kamran Shah",
  },

  description: siteConfig.description,

  icons: {
    icon: "/logo/topfavicon.png",
    shortcut: "/logo/topfavicon.png",
    apple: "/logo/topfavicon.png",
  },

  keywords: [
    "AI full-stack developer",
    "Next.js developer",
    "SaaS developer",
    "RAG applications",
    "Supabase",
    "business automation",
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,

  openGraph: {
    title: "Syed Kamran Shah — AI Full-Stack Developer",
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: "Syed Kamran Shah Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Syed Kamran Shah — AI Full-Stack Developer",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080a09" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-canvas"><body className="min-h-screen bg-canvas font-sans text-ink antialiased"><Navbar /><main>{children}</main><Footer /></body></html>;
}
