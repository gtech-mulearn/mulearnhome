"use client";

import { motion, Variants, easeOut } from "framer-motion";
import SpecialEventCard from "@/app/(home)/components/SpecialEventCard";
import { specialevents } from "@/data/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function SpecialEvents() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--mulearn-blackish)]">
            Special Events
          </h1>
          <h6 className="text-lg text-[var(--mulearn-gray-600)] max-w-3xl mx-auto">
            Discover exclusive events designed to inspire innovation, enhance
            skills, and foster meaningful connections across technology,
            management, and creativity.
          </h6>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center">
            {specialevents.map((specialevent) => (
              <SpecialEventCard
                key={specialevent.id}
                specialevent={specialevent}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
