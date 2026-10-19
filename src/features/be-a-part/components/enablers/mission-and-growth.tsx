"use client";

import Link from "next/link";
import { useState } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { cdnUrl, StatsLoader, useLandingStats } from "@/shared";
import { enablerFaculties } from "../../data/enablers.data";
import { Section, SectionHeading, StatPanel, StatTile } from "../shared";

const PAGE_SIZE = 16;

export function MissionAndGrowth() {
  const { counts, hasError } = useLandingStats();
  const [displayedCount, setDisplayedCount] = useState(PAGE_SIZE);
  const fallbackImage = cdnUrl("public/assets/team/default.webp");
  const hasMore = displayedCount < enablerFaculties.length;

  return (
    <Section>
      <SectionHeading
        title={
          <>
            Our <span className="text-mulearn">mission</span> &amp;{" "}
            <span className="text-mulearn">growth</span>
          </>
        }
        description="The institutions and people behind µLearn's campus network."
      />

      <StatPanel className="mt-12">
        {!hasError &&
          (counts ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {counts.org_type_counts
                .filter((org) => org.org_type.toLowerCase() === "college")
                .map((org) => (
                  <StatTile
                    key={org.org_type}
                    value={org.org_count}
                    label={
                      org.org_type.endsWith("y")
                        ? `${org.org_type.slice(0, -1)}ies`
                        : `${org.org_type}s`
                    }
                  />
                ))}
              {counts.enablers_mentors_count.map((role) => (
                <StatTile
                  key={role.role__title}
                  value={role.role_count}
                  label={`${role.role__title}s`}
                />
              ))}
            </div>
          ) : (
            <StatsLoader count={3} className="grid-cols-1 sm:grid-cols-3 gap-4" />
          ))}

        <div className={hasError ? "" : "mt-10"}>
          <h3 className="text-center text-xl md:text-2xl font-bold">Meet our enablers</h3>
          <ul className="mt-8 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {enablerFaculties.slice(0, displayedCount).map((faculty) => (
              <li key={faculty.muid}>
                <Link
                  href={`${clientEnv.NEXT_PUBLIC_APP_URL}profile/${faculty.muid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="relative size-16 overflow-hidden rounded-full bg-card ring-4 ring-mulearn-whitish shadow-sm transition-transform group-hover:-translate-y-0.5">
                    <MuImage
                      src={faculty.profile_pic ?? fallbackImage}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span className="w-full truncate text-center text-sm font-medium text-mulearn-blackish group-hover:text-mulearn">
                    {faculty.full_name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full bg-card"
                onClick={() => setDisplayedCount((prev) => prev + PAGE_SIZE * 2)}
              >
                Show more enablers
              </Button>
            </div>
          )}
        </div>
      </StatPanel>
    </Section>
  );
}
