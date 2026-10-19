import { obtainables } from "../../data/learners.data";
import { FeatureCard, Section, SectionHeading } from "../shared";

export const WhatYouGet = () => {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            What you get as a <span className="text-mulearn">Learner</span>
          </>
        }
        description="Everything you need to go from curious to capable, with proof to show for it."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {obtainables.map((item, index) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};
