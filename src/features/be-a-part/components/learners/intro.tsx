import { MotionDiv, MuImage } from "@/components/layouts";
import { Section, SectionHeading, Sparkles } from "@/components/sections";

export const LearnerIntro = () => {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-20">
        <div className="text-center lg:text-left">
          <SectionHeading
            align="left"
            title={
              <>
                Who is a <span className="text-mulearn">Learner</span>?
              </>
            }
            className="mx-auto lg:mx-0"
          />
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 space-y-5 text-mulearn-gray-600"
          >
            <p className="text-lg md:text-xl">
              A Learner is anyone who chooses to grow. Students, professionals, beginners and career
              changers from any background are welcome.
            </p>
            <p className="font-(family-name:--font-display) text-2xl md:text-3xl font-bold leading-snug text-mulearn-blackish">
              Your degree does not define your potential.{" "}
              <span className="text-mulearn">Your curiosity does.</span>
            </p>
            <p className="text-lg md:text-xl">
              µLearn supports learners in building strong portfolios through real tasks,
              collaboration and consistent effort.
            </p>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-52 sm:max-w-60"
        >
          <div className="absolute -inset-x-16 sm:-inset-x-24 -inset-y-10 bg-radial from-mulearn/25 to-transparent to-70%" />
          <Sparkles className="top-6 -right-20" />
          <MuImage
            src="/assets/learners/learner-curious.webp"
            alt="A curious µLearn learner with a lightbulb idea"
            width={526}
            height={1100}
            className="relative w-full h-auto"
          />
        </MotionDiv>
      </div>
    </Section>
  );
};
