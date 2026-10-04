"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { MotionDiv } from "@/components/layouts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface YearSection {
  year: string;
  content: ReactNode;
}

/** Thin client shell holding only the year-toggle state — `sections[].content` is
 * pre-rendered server-side, so team.data.ts never crosses the client boundary. */
export function TeamYearSwitcher({ sections }: { sections: YearSection[] }) {
  const [activeYear, setActiveYear] = useState(sections[0]?.year ?? "");
  const active = sections.find((s) => s.year === activeYear);

  return (
    <div className="flex flex-col items-center mt-20 max-w-7xl mx-auto px-4">
      <div className="mt-6 mb-12 flex justify-center">
        <Select value={activeYear} onValueChange={setActiveYear}>
          <SelectTrigger className="w-[200px] border-mulearn-trusty-blue text-mulearn-trusty-blue">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {sections.map((section) => (
              <SelectItem key={section.year} value={section.year}>
                {section.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-8">
        {active && (
          <MotionDiv
            key={activeYear}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="w-full"
          >
            {active.content}
          </MotionDiv>
        )}
      </div>
    </div>
  );
}
