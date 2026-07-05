import { Fragment } from "react";
import { MotionDiv } from "@/components/MuFramer";
import { cn } from "@/lib/utils";

const steps = [
  { step: 1, label: "Register as µLearn Enabler", highlight: true },
  { step: 2, label: "Connect with your Chapter leads" },
  { step: 3, label: "Review Chapter health" },
  { step: 4, label: "Conduct Periodic Check-ins" },
  { step: 5, label: "Encourage task completions" },
];

const Connector = () => (
  <div
    aria-hidden
    className="mt-5 hidden min-w-8 flex-1 border-t-2 border-dashed border-mulearn-trusty-blue md:block"
  />
);

const Step = ({
  step,
  label,
  highlight,
  index,
}: {
  step: number;
  label: string;
  highlight?: boolean;
  index: number;
}) => (
  <MotionDiv
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.4 }}
    className="flex flex-col items-center px-2 text-center md:w-44"
  >
    <div className="flex size-10 items-center justify-center rounded-full bg-mulearn text-base font-bold text-mulearn-whitish">
      {step}
    </div>
    <p
      className={cn("mt-4 text-sm font-bold", highlight ? "text-mulearn" : "text-mulearn-blackish")}
    >
      {label}
    </p>
  </MotionDiv>
);

export default function HowToBegin() {
  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3, 5);

  return (
    <section id="how-to-begin" className="text-center">
      <h2>How to begin as an Enabler</h2>

      <div className="mt-12 flex flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
          {row1.map((s, i) => (
            <Fragment key={s.step}>
              <Step {...s} index={i} />
              {i < row1.length - 1 && <Connector />}
            </Fragment>
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
          {row2.map((s, i) => (
            <Fragment key={s.step}>
              <Step {...s} index={i + 3} />
              {i < row2.length - 1 && <Connector />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
