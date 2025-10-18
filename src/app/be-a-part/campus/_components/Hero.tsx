"use client";

import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-5xl lg:text-6xl font-semibold mb-3 tracking-wide text-mulearn-blackish">
              <span className="text-mulearn-trusty-blue">µLearn</span> Campus
              Chapter
            </h2>
            <h3 className="mb-2 text-2xl lg:text-3xl font-bold text-mulearn-blackish">
              Ignite Your{" "}
              <span className="text-mulearn-trusty-blue">Community</span>
            </h3>

            <p className="mb-10 text-xl lg:text-2xl leading-relaxed text-mulearn-gray-600">
              Build the future through peer-to-peer learning, proof-of-work, and
              a 55,000+ strong community.
            </p>

            <Link
              href="https://airtable.com/appFdefxOwIVlTv1b/shrmtngt3zopg8eVh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"mulearn-blue"}
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all cursor-pointer"
              >
                Start a Chapter
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
              className="w-full h-auto max-w-md rounded-2xl object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
