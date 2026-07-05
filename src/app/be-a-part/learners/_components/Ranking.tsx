"use client";

import { useCallback, useEffect, useState } from "react";
import type { TopLearner } from "@/lib/types";
import { cn } from "@/lib/utils";
import { fetchTopLearners } from "@/services/profile";
import { accentChip, accentText } from "./accents";

interface ExtendedTopLearner extends TopLearner {
  email?: string;
  avatar?: string;
}

export default function RankingSection() {
  const [topLearners, setTopLearners] = useState<ExtendedTopLearner[]>([]);

  const fetchData = useCallback(async () => {
    const learners = await fetchTopLearners(10);
    setTopLearners(learners);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section id="rankings">
      <div className="text-center">
        <h2>Top Learners</h2>
        <p className="mt-3 text-base text-mulearn-gray-600">
          Recognizing consistent learners who set the pace for all.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {topLearners.map((learner, index) => (
          <li key={learner.name} className="flex items-center justify-center gap-3">
            <span
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-mulearn-whitish",
                accentChip[index % accentChip.length],
              )}
            >
              {learner.name.charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-mulearn-blackish">{learner.name}</p>
              <p className="text-xs text-mulearn-gray-600">Karma Leader</p>
              <p className={cn("text-xs font-semibold", accentText[index % accentText.length])}>
                {learner.kp.toLocaleString()} KP
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
