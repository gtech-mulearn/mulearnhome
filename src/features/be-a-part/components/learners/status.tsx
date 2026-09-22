"use client";

import { MotionDiv } from "@/components/layouts";
import { AnimatedCounter, StatsLoader, useLandingStats } from "@/shared";

export const LearnersStatus = () => {
  const { counts, hasError } = useLandingStats();

  // Format number to display with K+ suffix
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000);
      const decimal = Math.floor((num % 1000) / 100);
      return decimal > 0 ? `${thousands}.${decimal}K+` : `${thousands}K+`;
    }
    return `${num}+`;
  };

  const stats = counts
    ? [
        {
          number: counts.members,
          displayNumber: formatNumber(counts.members),
          label: "Active Learners",
        },
        {
          number: counts.ig_count,
          displayNumber: `${counts.ig_count}+`,
          label: "Skill Tracks",
        },
        {
          number: 2500,
          displayNumber: "2.5K+",
          label: "Verified Projects",
        },
      ]
    : null;

  if (hasError) {
    return null;
  }

  if (!stats) {
    return (
      <section className="py-16 md:py-20 bg-mulearn-whitish">
        <div className="container mx-auto px-4">
          <div className="border-t border-mulearn-gray-600 mb-16"></div>
          <StatsLoader
            count={3}
            className="grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto"
          />
          <div className="border-t border-mulearn-gray-600 mt-16"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-mulearn-whitish">
      <div className="container mx-auto px-4">
        <div className="border-t border-mulearn-gray-600 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mulearn mb-4">
                <AnimatedCounter end={stat.number} duration={2.5} separator="," />
              </h3>

              <p className="text-lg md:text-xl font-medium">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
        <div className="border-t border-mulearn-gray-600 mt-16"></div>
      </div>
    </section>
  );
};
