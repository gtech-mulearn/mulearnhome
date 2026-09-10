"use client";

import { Star, TrendingUp, Users } from "lucide-react";
import CountUp from "react-countup";
import { MotionDiv } from "@/components/MuFramer";
import { Card } from "@/components/ui/card";
import type { Counts } from "@/lib/types";

interface TestimonialStatsProps {
  counts: Counts | null;
  hasError?: boolean;
}

export default function TestimonialStats({ counts, hasError }: TestimonialStatsProps) {
  const stats = counts
    ? [
        {
          icon: Users,
          value: counts.members,
          label: "Active Learners",
        },
        {
          icon: Star,
          value:
            counts.enablers_mentors_count?.find((r) => r.role__title === "Mentor")?.role_count || 0,
          label: "Expert Mentors",
        },
        {
          icon: TrendingUp,
          value: counts.org_type_counts?.find((o) => o.org_type === "Company")?.org_count || 0,
          label: "Partner Companies",
        },
      ]
    : [];

  if (hasError || stats.length === 0) {
    return null;
  }

  return (
    <MotionDiv
      className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="p-8 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-mulearn/5 flex items-center justify-center mb-4 text-mulearn">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-mulearn mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  autoAnimate
                  autoAnimateOnce
                />
                <span className="text-2xl ml-0.5">+</span>
              </div>
              <div className="text-sm font-bold text-mulearn-gray-600 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          </Card>
        );
      })}
    </MotionDiv>
  );
}
