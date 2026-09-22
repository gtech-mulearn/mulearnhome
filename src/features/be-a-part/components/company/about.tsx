"use client";
import type { Variants } from "framer-motion";
import { MotionDiv, MotionH1, MotionP } from "@/components/layouts";

export const About = () => {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05, duration: 0.3 },
    }),
  };
  return (
    <section className="py-14 px-4 bg-mulearn-whitish overflow-hidden z-10 relative">
      <MotionDiv
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col">
          <MotionH1
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl text-center text-mulearn-blackish leading-snug sm:leading-tight lg:leading-tight max-w-3xl sm:max-w-4xl"
          >
            <span className="text-mulearn-blackish">What is </span>{" "}
            <span className="text-mulearn">µLearn company partner </span>
            <span className="text-mulearn-blackish">?</span>
          </MotionH1>

          <div className="text-center text-mulearn-gray-600 max-w-5xl  sm:text-lg  mx-auto mb-16 font-light flex flex-col gap-2 mt-3">
            <MotionP
              custom={2}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-center"
            >
              A µLearn Company Partner is an organization that collaborates with µLearn to discover
              skilled learners, offer job or internship opportunities, and engage with our talent
              community. Partners gain access to verified candidates, tailored hiring support, and a
              steady pipeline of learners trained in industry-relevant skills.
            </MotionP>
            <MotionP
              custom={2}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-center"
            >
              Through this partnership, companies can easily connect with motivated individuals who
              are ready to contribute, grow, and make an impact
            </MotionP>
          </div>
        </div>
        <div className="absolute right-1/8 pr-6 top-12 text-mulearn-blackish  hidden lg:block">
          <svg
            width="60"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="1"
            aria-hidden="true"
            focusable="false"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="absolute right-1/6  top-24 text-mulearn-blackish  hidden lg:block ">
          <svg
            width="20"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="absolute left-1/9 bottom-32 text-mulearn-blackish  hidden lg:block ">
          <svg
            width="20"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="1"
            aria-hidden="true"
            focusable="false"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </MotionDiv>
    </section>
  );
};
