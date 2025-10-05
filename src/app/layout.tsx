import type { Metadata } from "next";

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
    <html lang="en" suppressHydrationWarning> {/* suppress hydration warning */}
      <body>
        {children}
      </body>
    </html>
  );
}
