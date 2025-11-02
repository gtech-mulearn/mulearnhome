"use client";

import { MotionDiv, MotionH2 } from "@/components/MuFramer";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  School,
  Calendar,
  Handshake,
  GraduationCap,
  TrendingUp,
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
    <section ref={ref} className="py-16 bg-mulearn-whitish">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-4xl font-bold text-center text-mulearn-blackish mb-12 "
        >
          Our Impact in Numbers
        </MotionH2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {impactStats.map((stat: ImpactStat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];

            return (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <MotionDiv
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4 inline-block bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent"
                >
                  <IconComponent size={40} />
                </MotionDiv>
                <MotionDiv
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl font-bold mb-2 "
                  style={{
                    background: "var(--mulearn-trusty)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </MotionDiv>
                <div className="text-mulearn-gray-600 font-semibold ">
                  {stat.label}
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
