import { MotionLi } from "@/components/layouts";
import { benefits } from "../../data/learners.data";
import { Section, SectionHeading } from "../shared";

export const WhyMuLearn = () => {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Why <span className="text-mulearn">µLearn</span>?
          </>
        }
        description="Learn by doing. Grow with purpose."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title }, index) => (
          <MotionLi
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
            className="flex items-center gap-4 rounded-2xl border border-mulearn/10 bg-card p-5 shadow-sm"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mulearn/10 text-mulearn">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <p className="font-medium leading-snug text-mulearn-blackish">{title}</p>
          </MotionLi>
        ))}
      </ul>
    </Section>
  );
};
