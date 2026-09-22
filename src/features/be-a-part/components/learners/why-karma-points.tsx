import type { ElementType } from "react";
import { MotionDiv } from "@/components/layouts";
import { whyKarma } from "../../data/learners.data";

interface Benefit {
  icon: ElementType;
  title: string;
  description: string;
}

export const WhyKarmaPoints = () => {
  return (
    <section className="py-20 bg-mulearn-whitish">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Karma Points Matter
            <br />
            in <span className="text-mulearn">µLearn</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Karma points represent your real effort inside µLearn. They show how active, consistent
            and committed you are as you complete tasks.
          </p>
        </MotionDiv>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-16">
            {whyKarma.slice(0, 3).map((benefit, index) => (
              <Card key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto">
            {whyKarma.slice(3, 5).map((benefit, index) => (
              <Card key={benefit.title} benefit={benefit} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ✅ USE TYPE HERE */
const Card = ({ benefit, index }: { benefit: Benefit; index: number }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative pt-8"
  >
    <div className="bg-mulearn-whitish rounded-xl p-8 pt-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full flex flex-col items-center text-center">
      {/* Icon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-mulearn rounded-full flex items-center justify-center shadow-lg text-mulearn-whitish">
        <benefit.icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
      <p className="leading-relaxed text-[15px]">{benefit.description}</p>
    </div>
  </MotionDiv>
);
