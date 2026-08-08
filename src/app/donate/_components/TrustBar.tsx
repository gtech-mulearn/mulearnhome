"use client";

import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import type { Counts } from "@/lib/types";

export default function TrustBar() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      const socket = new WebSocket("wss://mulearn.org/ws/v1/public/landing-stats/");
      socketRef.current = socket;
      const handleMessage = (event: MessageEvent) => {
        setCounts(JSON.parse(event.data) as Counts);
      };
      socket.addEventListener("message", handleMessage);
      return () => {
        socket.removeEventListener("message", handleMessage);
        socket.close();
        socketRef.current = null;
      };
    }
  }, []);

  const learnersCount = counts?.members ?? 60000;
  const campusCount =
    counts?.org_type_counts?.find((o) => o.org_type === "College")?.org_count ?? 500;
  const learningCircleCount = counts?.learning_circle_count ?? 1000;
  const interestGroupCount = counts?.ig_count ?? 30;
  const companyCount =
    counts?.org_type_counts?.find((o) => o.org_type === "Company")?.org_count ?? 400;
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

        <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-mulearn sm:text-3xl">
                <CountUp end={stat.value} duration={2.5} separator="," />
              </p>
              <p className="text-sm text-mulearn-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
