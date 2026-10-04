"use client";

import type { Variants } from "framer-motion";
import { MotionDiv, MotionSection } from "@/components/layouts";
import { AnimatedCounter, StatsLoader, useLandingStats } from "@/shared";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function Stats() {
  const { counts, hasError } = useLandingStats();

  if (hasError) {
    return null;
  }

  if (!counts) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full py-24">
        <StatsLoader
          count={10}
          className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-8"
        />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <MotionSection
        className="flex flex-col justify-center py-24 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv className="flex flex-col items-center text-center w-full" variants={fadeInUp}>
          <h2>
            The Impact of <span className="text-mulearn">μLearn</span>
          </h2>
          <p className="font-normal mb-16 max-w-[800px] mx-auto text-center text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
            Over the last year, we as a community have made an impact on a significant number of
            students, mentors, and facilitators, enabling them to gain more knowledge about the
            ecosystem of learning and upskill themselves.
          </p>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 px-4 sm:px-8">
            <StatCard value={counts.members} label="Members" />
            <StatCard value={counts.learning_circle_count} label="Learning Circles" />
            {counts.org_type_counts.map((org) => (
              <StatCard
                key={org.org_type}
                value={org.org_count}
                label={
                  org.org_type.endsWith("y")
                    ? `${org.org_type.slice(0, -1)}ies`
                    : `${org.org_type}s`
                }
              />
            ))}
            <StatCard value={378} label="Events" />
            <StatCard value={counts.ig_count} label="Interest Groups" />
            <StatCard value={counts.karma_pow_count.karma_count} label="Total Karma Mined" />
            <StatCard value={counts.karma_pow_count.pow_count} label="Number of Proof of Works" />
            <StatCard value={2270} label="Number of Internships" />
            <StatCard value={1320} label="Jobs" />
            <StatCard value={120} label="Products" />
            <StatCard value="1.3Cr" label="Worth of Gig Works" isString />
            {counts.enablers_mentors_count.map((role) => (
              <StatCard
                key={role.role__title}
                value={role.role_count}
                label={`${role.role__title}s`}
              />
            ))}
          </div>
        </MotionDiv>
      </MotionSection>
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
    <div className="flex flex-col justify-center items-center p-4">
      <p className="font-semibold text-mulearn text-2xl sm:text-3xl lg:text-[2rem]">
        {isString ? value : <AnimatedCounter end={value as number} duration={10} separator="," />}
      </p>
      <p className="text-sm sm:text-base font-medium mt-1 text-mulearn-blackish">{label}</p>
    </div>
  );
}
