"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Hero from "@/app/(home)/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/app/(home)/components/Features";
import Story from "@/app/(home)/components/Story";
import Newsletter from "@/app/(home)/components/Newsletter";
import Footer from "@/components/Footer";
import Comparison from "@/app/(home)/components/Comparison";

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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
