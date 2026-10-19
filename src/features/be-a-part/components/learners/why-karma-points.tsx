import { whyKarma } from "../../data/learners.data";
import { IconList, Section, SectionHeading } from "../shared";

export const WhyKarmaPoints = () => {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <SectionHeading
          align="left"
          title={
            <>
              Why karma points matter in <span className="text-mulearn">µLearn</span>
            </>
          }
          description="Karma points represent your real effort inside µLearn. They show how active, consistent and committed you are as you complete tasks."
          className="mx-auto text-center lg:mx-0 lg:text-left"
        />
        <IconList items={whyKarma} />
      </div>
    </Section>
  );
};
