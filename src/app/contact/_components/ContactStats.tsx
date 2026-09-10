"use client";

import CountUp from "react-countup";
import { useLandingStats } from "@/services/useLandingStats";

export default function ContactStats() {
  const { counts, hasError } = useLandingStats();

  if (hasError || !counts) {
    return null;
  }

  const learnersCount = counts?.members ?? 60000;
  // Partners count is mapped to the number of companies from landing stats
  const partnersCount =
    counts?.org_type_counts?.find((o) => o.org_type === "Company")?.org_count ?? 400;

  return (
    <div className="grid grid-cols-3 gap-6 pt-6">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-mulearn">
          <CountUp end={learnersCount} duration={2.5} separator="," autoAnimate autoAnimateOnce />+
        </div>
        <div className="text-sm text-mulearn-gray-600">Learners</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-mulearn">
          <CountUp end={partnersCount} duration={2.5} separator="," autoAnimate autoAnimateOnce />+
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
