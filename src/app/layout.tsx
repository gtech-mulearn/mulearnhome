import type { Metadata } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";
import MuLoader from "@components/Loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "µlearn",
  description: "Break the echo chamber",
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakarta.variable}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="µLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers. µLearn is here to assist you in breaking through the echo chambers and free you from the shackles that have you grounded."
        />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />

        <meta property="og:title" content="µLearn" data-react-helmet="true" />
        <meta property="og:site_name" content="µLearn" />
        <meta property="og:url" content="https://app.mulearn.org/" />
        <meta
          property="og:description"
          content="µLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers. µLearn is here to assist you in breaking through the echo chambers and free you from the shackles that have you grounded."
        />
        <meta property="og:image" content="/assets/µLearn.png" />
        <meta name="author" content="µLearn" />
        <meta property="og:type" content="website" />

        <title>µLearn</title>
      </Head>
      <body className="font-sans antialiased">
        <Suspense fallback={<MuLoader />}>{children}</Suspense>
      </body>
    </html>
  );
}
