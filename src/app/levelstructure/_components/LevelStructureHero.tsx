"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import { levelStructure } from "@/data/data";
// icons are provided by the benefit items via their `icon` property, so no direct imports needed here

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const iconVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function LevelStructureHero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-mulearn-whitish via-blue-50 to-purple-50"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mulearn-trusty-blue/5 to-mulearn-duke-purple/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center mb-16">
          <motion.h1
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-mulearn-blackish mb-6 leading-tight"
          >
            {levelStructure.title}
          </motion.h1>
          
          <motion.p
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-mulearn-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            {levelStructure.subtitle}
          </motion.p>
          
          <motion.p
            custom={3}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-lg text-mulearn-gray-600 max-w-2xl mx-auto font-medium"
          >
            {levelStructure.description}
          </motion.p>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {levelStructure.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={iconVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#2E85FE' }}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-mulearn-blackish mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-mulearn-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
