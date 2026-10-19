import { MotionLi } from "@/components/layouts";
import { Section, SectionHeading, StatPanel } from "@/components/sections";
import { levels } from "../data/levels.data";

/** The seven levels at a glance; each tile jumps to its level below. */
export function LevelsOverview() {
  return (
    <Section id="levels">
      <SectionHeading
        title={
          <>
            Seven levels, one <span className="text-mulearn">odyssey</span>
          </>
        }
        description="Each level builds on the last, from owning your story to opportunities in the µVerse."
      />
      <StatPanel className="mt-12">
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {levels.map((level, index) => (
            <MotionLi
              key={level.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="last:col-span-2 sm:last:col-span-1"
            >
              <a
                href={`#level-${level.number}`}
                className="flex h-full flex-col rounded-2xl bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="font-(family-name:--font-display) text-2xl font-black text-mulearn">
                  {String(level.number).padStart(2, "0")}
                </span>
                <span className="mt-2 text-sm font-semibold leading-snug text-mulearn-blackish">
                  {level.summary}
                </span>
              </a>
            </MotionLi>
          ))}
        </ol>
      </StatPanel>
    </Section>
  );
}
