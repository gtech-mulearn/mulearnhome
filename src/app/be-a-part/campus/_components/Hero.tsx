"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-mulearn-blackish lg:text-7xl">
            Ignite Your <span className="text-mulearn-trusty-blue">Community</span>
          </h1>

          <p className="mb-10 text-pretty text-xl leading-relaxed text-mulearn-gray-600 lg:text-2xl">
            Build the future through peer-to-peer learning, proof-of-work, and a
            55,000+ strong community
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
