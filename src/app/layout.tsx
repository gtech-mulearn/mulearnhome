import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Archivo, Noto_Sans, Poppins } from 'next/font/google';

// 1. Define and configure each font family
const archivo = Archivo({
  subsets: ['latin'],
  // Extract all the weights you need from your URL: 100 to 900
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  style: ['normal', 'italic'], // Include italic styles
  variable: '--font-archivo', // Optional: Define CSS variable for use in components
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  // Extract all the weights you need from your URL: 100 to 900
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-noto-sans',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  // Extract all the weights you need from your URL: 200 to 800 + italics
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  // Extract all the weights you need from your URL: 100 to 900
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "µLearn",
  description: "Personalized learning journey, tailored to each student's abilities and interests",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  )
}