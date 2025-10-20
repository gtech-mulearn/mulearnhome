"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  School, 
  Calendar, 
  Handshake, 
  GraduationCap, 
  TrendingUp 
} from "lucide-react";
import { impactStats } from "@/data/data";
import { ImpactStat } from "@/lib/types";

const iconMap = {
  Users,
  School,
  Calendar,
  Handshake,
  GraduationCap,
  TrendingUp,
};

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-4xl font-bold text-center text-mulearn-blackish mb-12 font-display"
        >
          Our Impact in Numbers
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {impactStats.map((stat: ImpactStat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4 inline-block text-mulearn-trusty-blue"
                >
                  <IconComponent size={40} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl font-bold mb-2 font-display"
                  style={{
                    background: "var(--mulearn-trusty)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-mulearn-gray-600 font-semibold font-sans">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}