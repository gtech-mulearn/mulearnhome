"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import type { Counts } from "@/lib/types";

const LearnersStatus = () => {
  const [counts, setCounts] = useState<Counts | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

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

  const stats = [
    { value: counts?.members ?? 0, label: "Active Learners" },
    { value: counts?.ig_count ?? 0, label: "Skill Tracks" },
    { value: 2500, label: "Verified Projects" },
  ];

  return (
    <section id="learners-status">
      <div className="grid grid-cols-1 gap-8 border-y border-border py-12 md:grid-cols-3 md:gap-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedNumber
              value={stat.value}
              separator=","
              scrollSpy
              className="text-4xl font-black text-mulearn md:text-5xl"
            />
            <p className="mt-2 text-base font-medium text-mulearn-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnersStatus;
