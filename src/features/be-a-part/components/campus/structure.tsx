import { Section, SectionHeading, StatPanel, StatTile } from "@/components/sections";
import { campusChapter } from "../../data/campus.data";

export function Structure() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Chapter <span className="text-mulearn">Structure</span>
          </>
        }
        description="A simple, effective framework for peer-led learning."
      />
      <StatPanel className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campusChapter.structure.map((item) => (
            <StatTile
              key={item.label}
              value={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </StatPanel>
    </Section>
  );
}
