"use client";

import { Heart } from "lucide-react";
import { AnimatedCounter, StatsLoader, useLandingStats } from "@/shared";

export function TrustBar() {
  const { counts, hasError } = useLandingStats();

  const learnersCount = counts?.members ?? 0;
  const campusCount =
    counts?.org_type_counts?.find((o) => o.org_type === "College")?.org_count ?? 0;
  const learningCircleCount = counts?.learning_circle_count ?? 0;
  const interestGroupCount = counts?.ig_count ?? 0;
  const companyCount =
    counts?.org_type_counts?.find((o) => o.org_type === "Company")?.org_count ?? 0;
  const eventsCount = 378;

  const stats = [
    { value: learnersCount, label: "Learners empowered" },
    { value: campusCount, label: "Campus communities" },
    { value: learningCircleCount, label: "Learning circles" },
    { value: interestGroupCount, label: "Interest groups" },
    { value: companyCount, label: "Companies" },
  ];

  return (
    <section className="w-full border-t border-mulearn-gray-600/10 bg-mulearn-whitish px-4 py-12 sm:px-6 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-md items-start gap-3 text-center lg:text-left">
          <Heart className="mt-1 hidden size-6 shrink-0 text-mulearn lg:block" />
          <div>
            <h4 className="font-bold text-mulearn-blackish">
              Transparent. Accountable. Community first.
            </h4>
            <p className="mt-1 text-sm text-mulearn-gray-600">
              We share our updates, finances, and impact openly with our community. Because trust
              builds everything we do.
            </p>
          </div>
        </div>

        {!counts && !hasError ? (
          <StatsLoader
            count={5}
            className="grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center"
          />
        ) : (
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-mulearn sm:text-3xl">
                  <AnimatedCounter end={stat.value} duration={2.5} separator="," />
                </p>
                <p className="text-sm text-mulearn-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
