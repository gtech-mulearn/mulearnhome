"use client";

import { motion } from "framer-motion";
import { campusChapter } from "@/data/data";

export default function BestPractices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
          Best <span className="text-mulearn-trusty-blue">Practices</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campusChapter.bestpractices.map((practice, idx) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-sm border transition-all hover:scale-105 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mulearn-trusty-blue text-primary">
                  {typeof Icon === "string" ? (
                    <span className="text-2xl text-mulearn-whitish">
                      {Icon}
                    </span>
                  ) : (
                    <Icon className="h-6 w-6 text-mulearn-whitish" />
                  )}
                </div>

                <h3 className="mb-2 text-lg font-bold text-mulearn-blackish">
                  {practice.title}
                </h3>
                <p className="text-mulearn-gray-600">{practice.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
