"use client";

import { campusChapter } from "@/data/data";
import { motion } from "framer-motion";

export default function Structure() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
            Chapter <span className="text-mulearn-trusty-blue">Structure</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-mulearn-gray-600">
            A simple, effective framework for peer-led learning
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {campusChapter.structure.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-6 text-center shadow-sm transition-all border hover:scale-105 hover:shadow-md"
              >
                <div className="mb-2 text-3xl font-bold text-mulearn-trusty-blue">
                  {item.value}
                </div>
                <div className="mb-1 font-semibold text-mulearn-blackish">
                  {item.label}
                </div>
                <div className="text-sm text-mulearn-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
