import { Check, GraduationCap, type LucideIcon, Users } from "lucide-react";
import type { ReactNode } from "react";
import { MotionDiv } from "@/components/layouts";
import { Section, SectionHeading } from "@/components/sections";
import { cn } from "@/lib/utils";

interface Audience {
  icon: LucideIcon;
  title: string;
  points: { id: string; content: ReactNode }[];
}

const audiences: Audience[] = [
  {
    icon: Users,
    title: "For Students",
    points: [
      {
        id: "karma",
        content: (
          <>
            Earn <strong>Karma Points</strong> as proof-of-work
          </>
        ),
      },
      { id: "circles", content: "Build peer-to-peer learning circles across domains" },
      {
        id: "internships",
        content: (
          <>
            Access internships via <strong>Launchpad</strong> and the{" "}
            <strong>Top 100 Series</strong>
          </>
        ),
      },
      { id: "community", content: "Join a 64,000+ community with 400+ partner companies" },
    ],
  },
  {
    icon: GraduationCap,
    title: "For Colleges",
    points: [
      {
        id: "education",
        content: (
          <>
            Align with <strong>Education 4.0</strong> standards
          </>
        ),
      },
      { id: "naac", content: "Show proof of student skilling for NAAC and CSR metrics" },
      { id: "ecosystem", content: "Connect to Kerala's largest skilling ecosystem" },
    ],
  },
];

export function WhyChapter() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Why start a <span className="text-mulearn">Chapter</span>?
          </>
        }
        description="A chapter turns a campus into a place where students learn by building, and colleges can see it happen."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {audiences.map(({ icon: Icon, title, points }, index) => (
          <MotionDiv
            key={title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={cn(
              "rounded-3xl p-8 sm:p-10",
              index === 0
                ? "border border-mulearn/10 bg-card shadow-sm"
                : "bg-mulearn-trusty-blue/10",
            )}
          >
            <div className="flex items-center gap-4">
              <Icon className="size-10 text-mulearn" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            </div>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li
                  key={point.id}
                  className="flex gap-3 text-lg text-mulearn-gray-600 [&_strong]:font-semibold [&_strong]:text-mulearn-blackish"
                >
                  <Check
                    className="mt-1 size-5 shrink-0 text-mulearn"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{point.content}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
