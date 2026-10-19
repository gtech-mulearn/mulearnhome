"use client";

import { Section, SectionHeading, StatPanel, StatTile } from "@/components/sections";
import { StatsLoader, useLandingStats } from "@/shared";

export const LearnersStatus = () => {
  const { counts, hasError } = useLandingStats();

  if (hasError) return null;

  return (
    <Section>
      <SectionHeading
        title={
          <>
            µLearn in <span className="text-mulearn">numbers</span>
          </>
        }
      />
      <StatPanel className="mt-12">
        {counts ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <StatTile value={counts.members} label="Active Learners" />
            <StatTile value={counts.ig_count} label="Skill Tracks" />
            <StatTile value={2500} label="Verified Projects" />
          </div>
        ) : (
          <StatsLoader count={3} className="grid-cols-1 sm:grid-cols-3 gap-4" />
        )}
      </StatPanel>
    </Section>
  );
};
