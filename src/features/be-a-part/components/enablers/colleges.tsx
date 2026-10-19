import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections";
import LogoLoop from "@/components/ui/logo-loop";
import { enablerColleges as colleges } from "../../data/enablers.data";

const toChip = (college: (typeof colleges)[number]) => ({
  title: college.title,
  node: (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-mulearn/15 bg-card px-5 py-2.5 text-sm font-semibold text-mulearn-blackish shadow-xs">
      <GraduationCap className="size-4 text-mulearn" aria-hidden="true" />
      {college.title}
    </span>
  ),
});

export function FiftyPlusColleges() {
  const half = Math.ceil(colleges.length / 2);

  return (
    <Section className="overflow-hidden">
      <SectionHeading
        title={
          <>
            80+ colleges are <span className="text-mulearn">µLearn</span>ified
          </>
        }
        description="Institutions where enablers and campus chapters are already at work."
      />
      <div className="mt-12 space-y-4">
        <LogoLoop
          logos={colleges.slice(0, half).map(toChip)}
          speed={30}
          direction="left"
          gap={16}
          pauseOnHover
          fadeOut
          fadeOutColor="#fefefe"
          ariaLabel="µLearnified colleges, row 1"
        />
        <LogoLoop
          logos={colleges.slice(half).map(toChip)}
          speed={30}
          direction="right"
          gap={16}
          pauseOnHover
          fadeOut
          fadeOutColor="#fefefe"
          ariaLabel="µLearnified colleges, row 2"
        />
      </div>
    </Section>
  );
}
