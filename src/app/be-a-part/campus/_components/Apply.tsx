"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Apply() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-mulearn-trusty-blue p-12 text-center shadow-xl lg:p-16"
      >
        <h2 className="mb-4 font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
          Ready to Start?
        </h2>
        <p className="mb-8 text-xl text-primary-foreground/90">
          Join the movement. Build your community. Create impact.
        </p>
        <Link
          href="https://airtable.com/appFdefxOwIVlTv1b/shrmtngt3zopg8eVh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="mulearn-blue"
            className="bg-mulearn-whitish text-mulearn-trusty-blue hover:text-mulearn-whitish group inline-flex items-center text-center justify-center gap-2 px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto"
          >
            Apply to Start a Chapter
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
