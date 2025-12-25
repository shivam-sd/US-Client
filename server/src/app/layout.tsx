import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    default: "Brilson — Premium NFC & Digital Business Cards",
    template: "%s — Brilson",
  },
  description:
    "Showcase-worthy NFC and digital business cards. Premium materials, instant sharing, and seamless setup.",
  metadataBase: new URL("https://brilson.example"),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm shadow-blue-300/40" />
              <span className="text-lg font-semibold tracking-tight group-hover:opacity-90">
                brilson
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
              <Link
                className="hover:text-neutral-900 transition-colors"
                href="#features"
              >
                Features
              </Link>
              <Link
                className="hover:text-neutral-900 transition-colors"
                href="#pricing"
              >
                Pricing
              </Link>
              <Link
                className="hover:text-neutral-900 transition-colors"
                href="#faq"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm shadow-blue-300/40 hover:bg-blue-700 transition-colors"
              >
                Get yours
              </Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-neutral-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Brilson. All rights reserved.
            </p>
            <div className="text-sm text-neutral-500 flex items-center gap-6">
              <Link href="#" className="hover:text-neutral-800">
                Privacy
              </Link>
              <Link href="#" className="hover:text-neutral-800">
                Terms
              </Link>
              <Link href="#" className="hover:text-neutral-800">
                Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
