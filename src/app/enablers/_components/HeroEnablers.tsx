"use client";

import Image from "next/image";
import { cdnUrl } from "@/services/cdn";
import { motion } from "framer-motion";

const heroImage = cdnUrl("src/modules/Public/EnablersPage/assests/Hero.webp");

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mulearn-whitish text-mulearn-blackish">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Polish your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">skills</span>
              </span>{" "}
              through{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-mulearn-trusty-blue">
                  µLearn
                </span>
              </span>
            </h1>
            <p className="text-pretty text-lg text-mulearn-gray-600 md:text-xl max-w-xl mx-auto lg:mx-0">
              Make students industry ready by enhancing your teaching
              capabilities and connecting with a vibrant community of enablers.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={400}
                height={400}
                className="h-auto object-contain rounded-2xl shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
