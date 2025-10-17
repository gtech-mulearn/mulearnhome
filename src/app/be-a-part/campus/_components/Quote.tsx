"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-6 text-3xl font-medium leading-relaxed text-mulearn-blackish lg:text-4xl">
            &quot;A Campus Chapter isn&apos;t about events. It&apos;s about
            building a culture of learning by doing.&quot;
          </p>
          <footer className="text-lg font-semibold text-mulearn-blackish">
            Start small. Stay consistent. The impact compounds.
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
