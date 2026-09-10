"use client";

import type { Variants } from "framer-motion";
import CountUp from "react-countup";
import { MotionDiv, MotionSection } from "@/components/MuFramer";
import { useLandingStats } from "@/services/useLandingStats";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Mission() {
  const { counts, hasError } = useLandingStats();

  if (hasError || !counts) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32  max-w-7xl bg-mulearn-trusty-blue/10 rounded-2xl">
        <MotionSection
          className="flex flex-col justify-center py-24 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionDiv
            className="text-4xl md:text-5xl lg:text-6xl flex flex-col items-center text-center w-full"
            variants={fadeInUp}
          >
            <h1>
              Our <span className="text-mulearn">Mission</span> &
              <span className="text-mulearn">Growth</span>
            </h1>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-9 mt-6 px-4 sm:px-8">
              <StatCard value={counts.members} label="Members" />
              <StatCard value={counts.learning_circle_count} label="Learning Circles" />
              <StatCard value={378} label="Events" />
              <StatCard value={counts.karma_pow_count.karma_count} label="Total Karma Mined" />
              <StatCard value={counts.karma_pow_count.pow_count} label="Number of Proof of Works" />
              <StatCard value={2270} label="Number of Internships" />
              <StatCard value={1320} label="Jobs" />
              <StatCard value={120} label="Products" />
            </div>
          </MotionDiv>
        </MotionSection>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  isString = false,
}: {
  value: number | string;
  label: string;
  isString?: boolean;
}) {
  return (
    <div className="bg-card rounded-2xl shadow-sm flex flex-col justify-center items-center p-4">
      <p className="font-semibold text-mulearn text-xl sm:text-2xl lg:text-[2rem]">
        {isString ? (
          value
        ) : (
          <CountUp end={value as number} duration={5} separator="," autoAnimate autoAnimateOnce />
        )}
      </p>
      <p className="text-sm sm:text-base font-medium mt-1 text-mulearn-blackish">{label}</p>
    </div>
  );
}
