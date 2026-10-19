import type { ReactNode } from "react";
import { MotionLi } from "@/components/layouts";
import { Section, SectionHeading } from "./section";

export interface Step {
  title: string;
  description: string;
}

interface StepsSectionProps {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  steps: Step[];
  action?: ReactNode;
}

/** Numbered process: the intro sticks on the left while the steps scroll past on the right. */
export function StepsSection({ id, title, description, steps, action }: StepsSectionProps) {
  return (
    <Section id={id}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <SectionHeading
            align="left"
            title={title}
            description={description}
            className="mx-auto text-center lg:mx-0 lg:text-left"
          />
          {action && <div className="mt-8 flex justify-center lg:justify-start">{action}</div>}
        </div>

        <ol>
          {steps.map((step, index) => (
            <MotionLi
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-12 bottom-0 w-px -translate-x-1/2 bg-mulearn/20"
                />
              )}
              <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-mulearn/20 bg-card font-(family-name:--font-display) text-lg font-bold text-mulearn shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-mulearn-gray-600">{step.description}</p>
              </div>
            </MotionLi>
          ))}
        </ol>
      </div>
    </Section>
  );
}
