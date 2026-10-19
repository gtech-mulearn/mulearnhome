import { enablerFeatures } from "../../data/enablers.data";
import { IconList, Section, SectionHeading } from "../shared";

export function WhoIsEnabler() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <SectionHeading
          align="left"
          title={
            <>
              Who is an <span className="text-mulearn">Enabler</span>?
            </>
          }
          description="Enablers help students learn the right way: through action, proof-of-work and community engagement."
          className="mx-auto text-center lg:mx-0 lg:text-left"
        />
        <IconList
          items={enablerFeatures.map((feature) => ({ icon: feature.icon, title: feature.text }))}
        />
      </div>
    </Section>
  );
}
