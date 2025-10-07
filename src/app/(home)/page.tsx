"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/app/(home)/components/Hero";
import Features from "@/app/(home)/components/Features";
import Story from "@/app/(home)/components/Story";
import SpecialEvents from "@/app/(home)/components/SpecialEvents";
import Comparison from "@/app/(home)/components/Comparison";
import Opportunities from "@/app/(home)/components/Opportunities";
import Roles from "@/app/(home)/components/Roles";
import Stats from "@/app/(home)/components/Stats";
import Community from "./components/Community";
import Newsletter from "@/app/(home)/components/Newsletter";
import Footer from "@/components/Footer";

const Home = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen">
      <Hero redirect={handleRedirect} />
      <Features />
      <Story />
      <SpecialEvents />
      <Comparison />
      <Opportunities />
      <Roles />
      <Stats />
      <Community />
      <Newsletter />
    </div>
  );
};

export default Home;
