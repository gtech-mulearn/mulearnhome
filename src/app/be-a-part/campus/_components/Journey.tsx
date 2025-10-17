"use client";

import { motion } from "framer-motion";
import { campusChapter } from "@/data/data";

export default function Journey() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
            Your Chapter <span className="text-mulearn-trusty-blue">Journey</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-mulearn-gray-600">
            Seven steps from interest to impact
          </p>

          <div className="space-y-4">
            {campusChapter.journey.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex items-center gap-6 rounded-2xl border p-6 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-mulearn-trusty-blue font-bold text-mulearn-whitish transition-colors">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-mulearn-blackish">
                    {step.title}
                  </h3>
                  <p className="text-mulearn-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
