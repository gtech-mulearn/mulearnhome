import type { Metadata } from "next";
import React, { Suspense } from "react";
import MuLoader from "@components/Loader";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mulearn",
  description: "Break the echo chamber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense fallback={<MuLoader />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}