import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import MuLoader from "@/components/MuLoader";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "sonner";
import { AnalyticsProvider, CookieConsent, DebugPanel } from "@/components/analytics";
import BackToTop from "@/components/BacktoTop";

export const metadata: Metadata = {
  title: "µLearn",
  description: "Break the echo chamber",
  authors: [{ name: "µLearn" }],
  openGraph: {
    title: "µLearn",
    description:
      "µLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers. µLearn is here to assist you in breaking through the echo chambers and free you from the shackles that have you grounded.",
    siteName: "µLearn",
    url: "https://mulearn.org/",
    type: "website",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://mulearn.org/"),
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

const retro = localFont({
  src: "../components/fonts/Retro_Team.otf",
  variable: "--font-retro",
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
        <link rel="preconnect" href="https://s3.ap-south-1.amazonaws.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://s3.ap-south-1.amazonaws.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        className={`${plusJakarta.variable} ${bricolage.variable} ${retro.variable} font-sans antialiased`}
      >
        <AnalyticsProvider>
          <Navbar />
          <Suspense fallback={<MuLoader />}>{children}</Suspense>
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
