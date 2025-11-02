"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";

export default function Level2Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <div className="w-full max-w-md lg:max-w-2xl">
              <MuImage
                src="/assets/levelstructure/help.svg"
                alt="Help - Mindset Transformation"
                width={700}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                The Mindset{" "}
                <span className="text-mulearn-trusty-blue">Shift</span>
              </h2>
              <p className="text-xl text-mulearn-gray-600">
                From{" "}
                <span className="text-mulearn-trusty-blue font-semibold">
                  Fixed
                </span>{" "}
                →{" "}
                <span className="text-mulearn-trusty-blue font-semibold">
                  Growth
                </span>{" "}
                →{" "}
                <span className="text-mulearn-trusty-blue font-semibold">
                  Abundance
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                Most students walk into μLearn trapped in{" "}
                <span className="font-semibold text-mulearn-duke-purple">
                  invisible cages
                </span>
                .
              </p>

              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                μLearn rewires these narratives. Through experiences, reflection
                spaces, and peer nudges, a fixed mindset stretches into a growth
                mindset… and finally into abundance thinking.
              </p>

              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Web Dev Student:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;I&apos;ll never be good enough to compete
                      globally.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Comics Artist:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;I doubt whether my passion has career
                      potential.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Space Enthusiast:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;I feel locked out because labs are pricey.&rdquo;
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mulearn-gray-50 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-mulearn-blackish">
                The Impact
              </h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Students internalize grit, self-learning, and peer
                collaboration. Failure becomes feedback.{" "}
                <span className="font-semibold text-mulearn-blackish">
                  Peers become allies, not competitors
                </span>
                .
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
