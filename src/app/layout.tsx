import type { Viewport } from "next";
import { Black_Ops_One, Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import { BackToTop, Footer, Navbar } from "@/components/layouts";
import "./globals.css";
import { Toaster } from "sonner";
import { constructMetadata } from "@/lib/metadata";
import { AnalyticsProvider, CookieConsent, DebugPanel } from "@/shared";
import Loader from "./loading";

export const metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0961F5",
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const blackopsone = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-blackopsone",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://s3.ap-south-1.amazonaws.com" />
      </head>
      <body
        className={`${plusJakarta.variable} ${bricolage.variable} ${blackopsone.variable} font-sans antialiased`}
      >
        <AnalyticsProvider>
          <Navbar />
          <Suspense fallback={<Loader />}>{children}</Suspense>
          <Footer />
          <Toaster richColors theme="light" position="bottom-right" />
          <div className="fixed bottom-4 right-4 z-50">
            <BackToTop />
          </div>
          <CookieConsent />
          <DebugPanel />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
