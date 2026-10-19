import { enablerBenefits } from "../../data/enablers.data";
import { FeatureCard, Section, SectionHeading } from "../shared";

export function EnablersBenefits() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Benefits of an <span className="text-mulearn">Enabler</span>
          </>
        }
        description="What you and your institution gain by enabling a µLearn chapter."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {enablerBenefits.map((benefit, index) => (
          <FeatureCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
