"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { enablers } from "@/data/enablers";
import type { Counts } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";

export default function MissionAndGrowth() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [displayedCount, setDisplayedCount] = useState(6);
  const socketRef = useRef<WebSocket | null>(null);
  const fallbackImage = cdnUrl("public/assets/team/default.webp");

  useEffect(() => {
    if (!socketRef.current) {
      const socket = new WebSocket("wss://mulearn.org/ws/v1/public/landing-stats/");
      socketRef.current = socket;

      const handleMessage = (event: MessageEvent) => {
        setCounts(JSON.parse(event.data) as Counts);
      };
      const handleError = (event: Event) => {
        console.error("WebSocket error:", event);
      };

      socket.addEventListener("message", handleMessage);
      socket.addEventListener("error", handleError);

      return () => {
        socket.removeEventListener("message", handleMessage);
        socket.removeEventListener("error", handleError);
        socket.close();
        socketRef.current = null;
      };
    }
  }, []);

  const collegeCount =
    counts?.org_type_counts?.find((o) => o.org_type.toLowerCase() === "college")?.org_count ?? 0;
  const enablerCount =
    counts?.enablers_mentors_count?.find((r) => r.role__title.toLowerCase() === "enabler")
      ?.role_count ?? 0;
  const mentorCount =
    counts?.enablers_mentors_count?.find((r) => r.role__title.toLowerCase() === "mentor")
      ?.role_count ?? 0;

  const stats = [
    { value: collegeCount, label: "Colleges" },
    { value: enablerCount, label: "Enablers" },
    { value: mentorCount, label: "Mentors" },
  ];

  const hasMore = displayedCount < enablers.faculties.length;

  return (
    <section id="mission" className="text-center">
      <h2>
        Our <span className="text-mulearn">Mission</span> &{" "}
        <span className="text-mulearn">Growth</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <AnimatedNumber
              value={stat.value}
              separator=","
              scrollSpy
              className="text-3xl font-black text-mulearn md:text-4xl"
            />
            <span className="mt-1 text-sm text-mulearn-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>

      <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
        {enablers.faculties.slice(0, displayedCount).map((faculty) => (
          <li key={faculty.muid}>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}profile/${faculty.muid}`}
              className="flex flex-col items-center gap-2"
            >
              <span className="relative size-16 overflow-hidden rounded-full bg-muted">
                <MuImage
                  src={faculty.profile_pic ?? fallbackImage}
                  alt={faculty.full_name}
                  fill
                  className="object-cover"
                />
              </span>
              <span className="line-clamp-2 text-xs text-mulearn-gray-600">
                {faculty.full_name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setDisplayedCount((prev) => prev + 12)}>Load more</Button>
        </div>
      )}
    </section>
  );
}
