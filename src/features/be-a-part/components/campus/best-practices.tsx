import { MotionDiv } from "@/components/layouts";
import { IconList, Section, SectionHeading } from "@/components/sections";
import { campusChapter } from "../../data/campus.data";

export function BestPractices() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            title={
              <>
                Best <span className="text-mulearn">Practices</span>
              </>
            }
            description="What the strongest chapters have in common."
            className="mx-auto text-center lg:mx-0 lg:text-left"
          />
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <figure className="mt-10 border-l-4 border-mulearn pl-6">
              <blockquote className="text-2xl md:text-3xl font-medium leading-snug text-mulearn-blackish text-pretty">
                “A Campus Chapter isn’t about events. It’s about building a culture of learning by
                doing.”
              </blockquote>
              <figcaption className="mt-4 text-lg font-semibold text-mulearn">
                Start small. Stay consistent. The impact compounds.
              </figcaption>
            </figure>
          </MotionDiv>
        </div>
        <IconList items={campusChapter.bestpractices} />
      </div>
    </Section>
  );
}
