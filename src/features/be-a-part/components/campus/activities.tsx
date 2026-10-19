import { campusChapter } from "../../data/campus.data";
import { FeatureCard, Section, SectionHeading } from "../shared";

export function Activities() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            What chapters <span className="text-mulearn">do</span>
          </>
        }
        description="A steady rhythm of activities that builds skills and community."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {campusChapter.activity.map((activity, index) => (
          <FeatureCard
            key={activity.title}
            icon={activity.icon}
            meta={activity.cadence}
            title={activity.title}
            description={activity.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
