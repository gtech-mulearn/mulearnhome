"use client";

import { Separator } from "@/components/ui/separator";
import { AnimatedCounter, StatsLoader, useLandingStats } from "@/shared";

export function ImpactStats() {
  const { counts, hasError } = useLandingStats();

  if (hasError) {
    return null;
  }

  if (!counts) {
    return (
      <section className="w-full py-12 border-y border-mulearn-gray-600">
        <div className="container mx-auto px-4">
          <StatsLoader count={4} className="grid-cols-2 md:grid-cols-4" />
        </div>
      </section>
    );
  }

  const stats = [
    { value: counts.members, label: "Total Learners" },
    {
      value: counts.org_type_counts?.find((o) => o.org_type === "Company")?.org_count,
      label: "Companies",
    },
    {
      value: counts.enablers_mentors_count?.find((r) => r.role__title.includes("Mentor"))
        ?.role_count,
      label: "Mentors",
    },
    {
      value: counts.org_type_counts?.find((o) => o.org_type === "College")?.org_count,
      label: "Total Institutions",
    },
  ];

  return (
    <section className="w-full py-12 border-y border-mulearn-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-y-8 md:gap-x-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <StatCard value={stat.value ?? 0} label={stat.label} />
              {index < stats.length - 1 && (
                <Separator className="hidden md:block h-12 w-px mx-8 lg:mx-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
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
        {isString ? value : <AnimatedCounter end={value as number} duration={5} separator="," />}
      </p>
      <p className="text-sm sm:text-base font-medium mt-1">{label}</p>
    </div>
  );
}
