import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import MuLoader from "@components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
  weight: ["400"],
  variable: "--font-sans",
  display: "swap",
});

const circe = localFont({
  src: "../components/fonts/CirceRounded-Bold.otf",
  variable: "--font-display",
  display: "swap",
});

const retro = localFont({
  src: "../components/fonts/Retro_Team.otf",
  variable: "--font-retro",
  display: "swap",
});

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
const cdnDomain = cdnUrl ? cdnUrl.replace(/\/.*$/, "") : null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${circe.variable} ${retro.variable}`}
    >
      <head>
        {cdnDomain && (
          <link rel="preconnect" href={cdnDomain} crossOrigin="anonymous" />
        )}
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<MuLoader />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
