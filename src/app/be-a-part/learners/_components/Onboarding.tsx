import { Fragment } from "react";
import { MotionDiv } from "@/components/MuFramer";
import type { OnboardingStep } from "@/lib/types";

interface OnboardingStepsProps {
  data: OnboardingStep[];
}

const OnboardingSteps: React.FC<OnboardingStepsProps> = ({ data }) => {
  return (
    <section id="onboarding" className="text-center">
      <h2>How to Begin Your Journey</h2>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
        {data.map((step, index) => (
          <Fragment key={step.step}>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center px-2 text-center md:w-48"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-mulearn text-base font-bold text-mulearn-whitish">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-bold text-mulearn-blackish">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mulearn-gray-600">
                {step.description}
              </p>
            </MotionDiv>

            {index < data.length - 1 && (
              <div
                aria-hidden
                className="mt-5 hidden min-w-8 flex-1 border-t-2 border-dashed border-mulearn-trusty-blue md:block"
              />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default OnboardingSteps;
