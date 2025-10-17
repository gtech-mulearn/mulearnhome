"use client";

import { Card, CardContent } from "@/components/ui/card";
import { enablers } from "@/data/data";
import MuImage from "@/components/MuImage";
import Link from "next/link";
import { motion, Variants, easeOut } from "framer-motion";

export default function Onboarding() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="Onboarding"
      className="py-16 md:py-24 bg-mulearn-whitish text-mulearn-blackish"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="relative inline-block">
              <span className="relative z-10 text-mulearn-trusty-blue">
                Onboarding
              </span>
            </span>{" "}
            <span>Process</span>
          </h2>
          <p className="text-mulearn-gray-600 text-lg max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {enablers.onboarding.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr] items-start">
                    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                      <div className="text-7xl font-bold text-mulearn-trusty-blue/10 select-none">
                        {step.number}
                      </div>
                      <MuImage
                        src={step.image}
                        alt={step.title}
                        width={100}
                        height={100}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold flex items-center gap-3 flex-wrap">
                        {step.title}
                        <Link
                          href={step.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-light text-mulearn-trusty-blue hover:underline inline-flex items-center gap-1"
                        >
                          {step.linkText}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              className="text-mulearn-trusty-blue"
                            />
                          </svg>
                        </Link>
                      </h3>
                      <p className="text-mulearn-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
