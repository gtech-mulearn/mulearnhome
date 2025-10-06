"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/app/(home)/components/Hero";
import Features from "@/app/(home)/components/Features";
import Story from "@/app/(home)/components/Story";
import Comparison from "@/app/(home)/components/Comparison";
import Stats from "@/app/(home)/components/Stats";
import Newsletter from "@/app/(home)/components/Newsletter";
import Footer from "@/components/Footer";
const Page = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero redirect={handleRedirect} />
      <Features />
      <Story />
      <Comparison />
      <Stats />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
