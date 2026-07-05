"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import type { Counts } from "@/lib/types";

export default function CareersStats() {
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

  const companyCount =
    counts?.org_type_counts?.find((o) => o.org_type === "Company")?.org_count ?? 100;

  const stats = [
    { value: 1222, label: "Hired Candidates" },
    { value: companyCount, label: "Companies" },
    { value: 233, label: "Hiring Calls" },
  ];

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-8 lg:justify-start">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center lg:items-start">
          <AnimatedNumber
            value={stat.value}
            suffix="+"
            separator=","
            className="text-3xl font-black text-mulearn"
          />
          <span className="text-sm text-mulearn-gray-600">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
