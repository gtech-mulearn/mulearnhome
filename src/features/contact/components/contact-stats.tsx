"use client";

import { AnimatedCounter, StatsLoader, useLandingStats } from "@/shared";

export function ContactStats() {
  const { counts, hasError } = useLandingStats();

  if (hasError) {
    return null;
  }

  if (!counts) {
    return <StatsLoader count={3} className="grid-cols-3" />;
  }

  const learnersCount = counts.members ?? 0;
  // Partners count is mapped to the number of companies from landing stats
  const partnersCount =
    counts.org_type_counts?.find((o) => o.org_type === "Company")?.org_count ?? 0;

  return (
    <div className="grid grid-cols-3 gap-6 pt-6">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-mulearn">
          <AnimatedCounter end={learnersCount} duration={2.5} separator="," />+
        </div>
        <div className="text-sm text-mulearn-gray-600">Learners</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-mulearn">
          <AnimatedCounter end={partnersCount} duration={2.5} separator="," />+
        </div>
        <div className="text-sm text-mulearn-gray-600">Partners</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-mulearn">48h</div>
        <div className="text-sm text-mulearn-gray-600">Response</div>
      </div>
    </div>
  );
}
