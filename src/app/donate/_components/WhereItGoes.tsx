"use client";

import type { Variants } from "framer-motion";
import { MotionDiv, MotionSection } from "@/components/MuFramer";
import { whereItGoesCategories } from "@/data/donate";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.06, duration: 0.4 },
  }),
};

export default function WhereItGoes() {
  return (
    <MotionSection
      className="w-full bg-mulearn px-4 py-20 text-mulearn-whitish sm:px-6 md:px-12 lg:px-24 xl:px-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-end">
        <MotionDiv custom={0} variants={fadeInUp}>
          <p className="text-sm font-bold uppercase tracking-widest text-mulearn-whitish/70">
            Where your donation goes
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-mulearn-whitish sm:text-4xl lg:text-5xl">
            Small support.
            <br />
            <span className="italic">Big community energy.</span>
          </h2>
        </MotionDiv>

        <MotionDiv custom={1} variants={fadeInUp}>
          <p className="text-base leading-relaxed text-mulearn-whitish/70 sm:text-lg">
            Every contribution you make powers real impact across campus and beyond. Here&apos;s how
            your support helps µLearn grow.
          </p>
        </MotionDiv>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {whereItGoesCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <MotionDiv
              key={category.label}
              custom={i + 2}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-mulearn-whitish text-mulearn">
                <Icon className="size-7" />
              </div>
              <h4 className="mt-4 font-bold text-mulearn-whitish">{category.label}</h4>
              <p className="mt-2 text-sm leading-snug text-mulearn-whitish/70">
                {category.description}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </MotionSection>
  );
}
