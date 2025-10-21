"use client";

import { motion } from "framer-motion";
import { enablers } from "@/data/data";

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className=" mb-12 text-center text-3xl font-bold text-mulearn-blackish md:text-4xl lg:text-5xl">
          <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
            Benefits
          </span>{" "}
          to the Enabler
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className={`${enablers.benefits[0].bgColor} ${enablers.benefits[0].textColor} relative overflow-hidden rounded-3xl p-8 shadow-lg`}
          >
            <h3 className=" mb-6 text-xl font-bold md:text-2xl">
              {enablers.benefits[0].title}
            </h3>
            <ul className=" space-y-4">
              {enablers.benefits[0].items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 text-sm leading-relaxed md:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="absolute right-6 top-6 opacity-80">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/30"
              >
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${enablers.benefits[1].bgColor} ${enablers.benefits[1].textColor} relative overflow-hidden rounded-3xl p-8 shadow-lg`}
          >
            <h3 className=" mb-6 text-xl font-bold md:text-2xl">
              {enablers.benefits[1].title}
            </h3>
            <ul className=" space-y-4">
              {enablers.benefits[1].items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple/20">
                    <svg
                      className="h-3 w-3 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 text-sm leading-relaxed md:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${enablers.benefits[2].bgColor} ${enablers.benefits[2].textColor} relative overflow-hidden rounded-3xl p-8 shadow-lg`}
          >
            <h3 className=" mb-6 text-xl font-bold md:text-2xl">
              {enablers.benefits[2].title}
            </h3>
            <ul className=" space-y-4">
              {enablers.benefits[2].items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 text-sm leading-relaxed md:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="absolute right-6 bottom-6 opacity-80">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/30"
              >
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex items-center justify-center overflow-hidden rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg"
          >
            <div className="absolute right-6 top-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-mulearn-blackish opacity-10"
              >
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <p className=" text-lg font-semibold italic text-mulearn-blackish md:text-xl lg:text-2xl">
                &quot;Beyond Teaching - Become the spark
                <br />
                That Shapes Tomorrow&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
