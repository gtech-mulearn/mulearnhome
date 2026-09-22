import type React from "react";

export default function TestimonialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://i.ytimg.com" />
      {children}
    </>
  );
}
