import { Sparkle } from "lucide-react";
import { MotionDiv } from "@/components/layouts";

const steps = [
  {
    step: 1,
    title: "Create your µLearn account",
    description: "Register as µLearn Enabler",
    bold: true,
  },
  {
    step: 2,
    title: "Connect with your Chapter leads",
    description: "Know their interests, abilities and plan.",
  },
  {
    step: 3,
    title: "Review Chapter health",
    description: "Analyze current chapter growth and design your own plan.",
  },
  {
    step: 4,
    title: "Conduct Periodic Check-Ins",
    description: "Plan monthly/weekly meetings for knowing impact of latest activities",
  },
  {
    step: 5,
    title: "Encourage task completions",
    description: "Complete tasks, collaborate, and grow your karma points.",
  },
];

const Connector = () => (
  <div className="flex items-center h-16 px-1 flex-shrink-0">
    <div className="relative flex items-center w-20 lg:w-28 h-0.5">
      <div className="w-full border-t-2 border-dashed border-mulearn" />
      <div className="absolute left-0 w-2 h-2 bg-mulearn rounded-full -translate-x-1/2" />
      <div className="absolute right-0 w-2 h-2 bg-mulearn rounded-full translate-x-1/2" />
    </div>
  </div>
);

const StepBox = ({
  step,
  title,
  description,
  bold,
  index,
}: {
  step: number;
  title: string;
  description: string;
  bold?: boolean;
  index: number;
}) => (
  <div className="flex flex-col items-center w-36 lg:w-44 text-center">
    <MotionDiv
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.45 }}
      className="mb-5"
    >
      <div className="w-16 h-16 bg-mulearn rounded-xl flex items-center justify-center shadow-md">
        <span className="text-mulearn-whitish text-2xl font-bold">{step}</span>
      </div>
    </MotionDiv>

    <MotionDiv
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.1, duration: 0.4 }}
    >
      <h3 className="text-sm font-bold mb-1 leading-snug">{title}</h3>
      <p
        className={`text-[11px] leading-relaxed ${
          bold ? "text-mulearn font-bold not-italic" : "text-mulearn-gray-600 italic"
        }`}
      >
        {description}
      </p>
    </MotionDiv>
  </div>
);

export function Onboarding() {
  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3, 5);

  return (
    <section className="hidden md:block w-full relative overflow-hidden py-16 px-6">
      {/* Sparkle accents */}
      <div className="absolute top-8 right-16 opacity-60">
        <Sparkle size={18} className="fill-mulearn text-mulearn" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-60">
        <Sparkle size={14} className="fill-mulearn text-mulearn" />
      </div>

      <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-4xl lg:text-5xl font-bold leading-tight">
            How to begin as an Enabler
          </h2>
        </MotionDiv>

        {/* Steps */}
        <div className="flex flex-col items-center gap-10 w-full">
          {/* Row 1 — steps 1, 2, 3 */}
          <div className="hidden md:flex justify-center items-start">
            {row1.map((s, i) => (
              <div key={s.step} className="flex items-start">
                <StepBox
                  step={s.step}
                  title={s.title}
                  description={s.description}
                  bold={(s as { bold?: boolean }).bold}
                  index={i}
                />
                {i < row1.length - 1 && <Connector />}
              </div>
            ))}
          </div>

          {/* Row 2 — steps 4, 5 (centered) */}
          <div className="hidden md:flex justify-center items-start">
            {row2.map((s, i) => (
              <div key={s.step} className="flex items-start">
                <StepBox step={s.step} title={s.title} description={s.description} index={i + 3} />
                {i < row2.length - 1 && <Connector />}
              </div>
            ))}
          </div>

          {/* Mobile — single column */}
          <div className="md:hidden flex flex-col items-center gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center">
                <StepBox
                  step={s.step}
                  title={s.title}
                  description={s.description}
                  bold={(s as { bold?: boolean }).bold}
                  index={i}
                />
                {i < steps.length - 1 && (
                  <div className="flex flex-col items-center mt-4 h-10">
                    <div className="w-2 h-2 bg-mulearn rounded-full" />
                    <div className="flex-1 border-l-2 border-dashed border-mulearn my-0.5" />
                    <div className="w-2 h-2 bg-mulearn rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
