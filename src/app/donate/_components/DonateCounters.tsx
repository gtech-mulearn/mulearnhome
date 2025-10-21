"use client";
import React from "react";
import CountUp from "react-countup";

export default function DonateCounters() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
          <CountUp end={62} duration={2.5} suffix="K+" />
        </div>
        <div className="text-sm text-mulearn-blackish">Students</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
          <CountUp end={300} duration={2.2} separator="," suffix="+" />
        </div>
        <div className="text-sm text-mulearn-blackish">Events</div>
      </div>
    </div>
  );
}
