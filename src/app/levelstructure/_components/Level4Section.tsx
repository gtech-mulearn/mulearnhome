"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";

export default function Level4Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                The Path of{" "}
                <span className="text-mulearn-duke-purple">Choice</span>
              </h2>
              <p className="text-xl text-mulearn-gray-600">
                Choose Your Interest Group
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                This is where the hero chooses their{" "}
                <span className="font-semibold text-mulearn-duke-purple">
                  tribe
                </span>
                . Students anchor under mentors & industry-aligned pathways.
              </p>

              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> AI Guild:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;Driven by algorithms and machine learning.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Web Tribe:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;Chasing digital experiences and interfaces.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Film & Animation:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;Telling stories with light and motion.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Space/Hardware:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;Bold ones touching the stars and circuits.&rdquo;
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
                Learners start building{" "}
                <span className="font-semibold text-mulearn-blackish">
                  portfolios of proof-of-work
                </span>{" "}
                within their chosen interest group. No more drifting through
                scattered learning.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
            }
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="grid grid-cols-3 gap-6 w-full max-w-md">
              <MuImage
                src="/assets/InterestGroups/webdev.svg"
                alt="Web Development"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/design.svg"
                alt="Design"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/game.svg"
                alt="Game Development"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/arvr.svg"
                alt="AR/VR"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/cloud.svg"
                alt="Cloud Computing"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/marketing.svg"
                alt="Marketing"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/cyber.svg"
                alt="Cyber Security"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/iot.svg"
                alt="IoT"
                width={120}
                height={120}
                className="w-full h-auto"
              />
              <MuImage
                src="/assets/InterestGroups/product.svg"
                alt="Product Management"
                width={120}
                height={120}
                className="w-full h-auto"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
