"use client";

import type { Variants } from "framer-motion";
import { Sparkle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import {
  AnimatedCounter,
  cdnUrl,
  fetchPublicProfileImage,
  StatsLoader,
  useLandingStats,
} from "@/shared";
import { enablerFaculties } from "../../data/enablers.data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function MissionAndGrowth() {
  const { counts, hasError } = useLandingStats();
  const [displayedCount, setDisplayedCount] = useState(12);
  const [publicProfileImages, setPublicProfileImages] = useState<Record<string, string | null>>({});
  const fallbackImage = cdnUrl("public/assets/team/default.webp");

  useEffect(() => {
    const visibleFaculties = enablerFaculties.slice(0, displayedCount);
    const missingMuidList = visibleFaculties
      .map((faculty) => faculty.muid)
      .filter((muid) => publicProfileImages[muid] === undefined);

    if (missingMuidList.length === 0) return;

    let isCancelled = false;
    const loadPublicProfileImages = async () => {
      const imageEntries = await Promise.all(
        missingMuidList.map(async (muid) => [muid, await fetchPublicProfileImage(muid)] as const),
      );

      if (!isCancelled) {
        setPublicProfileImages((prev) => {
          const next = { ...prev };
          for (const [muid, imageUrl] of imageEntries) {
            next[muid] = imageUrl;
          }
          return next;
        });
      }
    };

    void loadPublicProfileImages();

    return () => {
      isCancelled = true;
    };
  }, [displayedCount, publicProfileImages]);

  const handleLoadMore = () => {
    setDisplayedCount((prev) => prev + 18);
  };

  const hasMore = displayedCount < enablerFaculties.length;

  if (hasError) {
    return null;
  }

  if (!counts) {
    return (
      <div className="flex justify-center">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full py-24">
          <StatsLoader count={4} className="flex flex-wrap justify-center gap-9 px-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center relative">
      <div className="hidden md:block absolute top-6 right-10 z-10">
        <Sparkle className="w-6 h-6 fill-mulearn text-mulearn" />
      </div>
      <div className="hidden md:block absolute bottom-6 left-8 z-10">
        <Sparkle className="w-6 h-6 fill-mulearn text-mulearn" />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32  max-w-7xl">
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
            <div className="flex flex-wrap justify-center gap-9 mt-6 px-8">
              {counts.org_type_counts
                .filter((org) => org.org_type.toLowerCase() === "college")
                .map((org) => (
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
              {counts.enablers_mentors_count.map((role) => (
                <StatCard
                  key={role.role__title}
                  value={role.role_count}
                  label={`${role.role__title}s`}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3 mt-6">
              {enablerFaculties.slice(0, displayedCount).map((c) => (
                <Link
                  key={c.muid}
                  href={`${clientEnv.NEXT_PUBLIC_APP_URL}profile/${c.muid}`}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <div className="rounded-full ring-2 ring-mulearn transition-all relative h-20 w-20">
                    <MuImage
                      // src={publicProfileImages[c.muid] ?? fallbackImage}
                      src={c.profile_pic ?? fallbackImage}
                      alt={c.full_name}
                      fill
                      sizes="80px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center leading-tight truncate w-full">{c.full_name}</p>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-6">
                <Button variant={"default"} onClick={handleLoadMore}>
                  Load more
                </Button>
              </div>
            )}
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
      <p className="font-semibold text-mulearn text-2xl sm:text-3xl lg:text-[2rem]">
        {isString ? value : <AnimatedCounter end={value as number} duration={5} separator="," />}
      </p>
      <p className="text-sm sm:text-base font-medium mt-1">{label}</p>
    </div>
  );
}
