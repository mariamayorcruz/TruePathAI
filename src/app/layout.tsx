import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SkipLink } from "@/components/shared/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
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
  applicationName: "TruePath AI",
  title: {
    default: "TruePath AI | Ethical youth self-discovery",
    template: "%s | TruePath AI",
  },
  description:
    "Human-centered AI-powered self-discovery for students exploring strengths, learning style, personality, and future possibilities.",
  metadataBase: new URL("https://truepath-ai-mvp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "student self-discovery",
    "ethical AI education",
    "youth development",
    "career exploration",
    "student wellbeing",
    "school pilot",
  ],
  creator: "TruePath AI",
  publisher: "TruePath AI",
  category: "education",
  openGraph: {
    title: "TruePath AI | Ethical youth self-discovery",
    description:
      "A human-centered platform helping students explore strengths, learning style, and future possibilities without labels or pressure.",
    url: "https://truepath-ai-mvp.vercel.app",
    siteName: "TruePath AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruePath AI | Ethical youth self-discovery",
    description:
      "A human-centered platform helping students explore strengths, learning style, and future possibilities without labels or pressure.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SkipLink />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
