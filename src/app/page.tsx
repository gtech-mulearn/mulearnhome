"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-3xl font-bold">
        <Image
          src="/assets/logo.png"
          alt="MuLearn Logo"
          width={500}
          height={160}
          className="mb-6"
        />
        <p>This website is open for Hacktoberfest 2025 Contributions</p>
      </div>
    </div>
  );
};

export default Page;
