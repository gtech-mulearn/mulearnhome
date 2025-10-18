"use client";

import MuImage from "@/components/MuImage";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 tracking-wide text-mulearn-blackish">
              <span className="text-mulearn-trusty-blue">µLearn</span> Campus
              Chapter
            </h2>

            <h3 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight tracking-tight text-mulearn-blackish">
              Ignite Your{" "}
              <span className="text-mulearn-trusty-blue">Community</span>
            </h3>

            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-mulearn-gray-600 mb-8 sm:mb-10">
              Build the future through peer-to-peer learning, proof-of-work, and
              a 55,000+ strong community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <MuImage
              src="/assets/campus/illustration.webp"
              alt="μLearn Campus Chapter Illustration"
              width={300}
              height={300}
              className="w-64 sm:w-80 md:w-full h-auto max-w-md rounded-2xl object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
