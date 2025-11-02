"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";

export default function Level3Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const ufo = cdnUrl("src/components/assests/NotFound/UFO.webp");

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-3"
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
                Tool <span className="text-mulearn-trusty-blue">Mastery</span>
              </h2>
              <p className="text-xl text-mulearn-gray-600">
                The Explorer&apos;s Compass
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                At this point, tools become the{" "}
                <span className="font-semibold text-mulearn-trusty-blue">
                  compass
                </span>
                . Knowledge transforms from abstract to actionable.
              </p>

              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Web Dev Student:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;GitHub, hosting, and Figma become my
                      workflow.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> AI Student:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;HuggingFace and ChatGPT streamline my
                      workflows.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Film Student:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;DaVinci Resolve and AI editing tools unlock
                      creativity.&rdquo;
                    </span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Civil Engineer:</span>{" "}
                    <span className="text-mulearn-gray-600">
                      &ldquo;AutoCAD + Project Management tools bring ideas to
                      life.&rdquo;
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
                Students move from passive learners to active creators. They{" "}
                <span className="font-semibold text-mulearn-blackish">
                  command technology
                </span>{" "}
                instead of being commanded by it.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
            }
            transition={{ duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-xl h-80">
              <MotionDiv
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="absolute inset-0 flex items-center  justify-center"
              >
                <MuImage
                  src={ufo}
                  alt="UFO - Tool Mastery"
                  width={600}
                  height={350}
                  className="w-100 h-auto"
                />
              </MotionDiv>

              <MotionDiv
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="absolute top-40 left-45 w-12 h-12 bg-mulearn-whitish rounded-lg shadow-lg p-2"
              >
                <svg viewBox="0 0 24 24" fill="#181717">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </MotionDiv>

              <MotionDiv
                animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.2,
                }}
                className="absolute top-70 right-62 w-12 h-12 bg-mulearn-whitish rounded-lg shadow-lg p-2"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#f24e1e"
                    d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
                  />
                  <path
                    fill="#a259ff"
                    d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
                  />
                  <path
                    fill="#ff7262"
                    d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
                  />
                  <path
                    fill="#1abcfe"
                    d="M12 8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8z"
                  />
                  <path
                    fill="#0acf83"
                    d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
                  />
                </svg>
              </MotionDiv>

              <MotionDiv
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.4,
                }}
                className="absolute bottom-4 left-36 w-12 h-12 bg-mulearn-whitish rounded-lg shadow-lg p-2"
              >
                <svg viewBox="0 0 24 24" fill="#007ACC">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
              </MotionDiv>

              <MotionDiv
                animate={{ y: [0, -11, 0], rotate: [0, -4, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 0.6,
                }}
                className="absolute -bottom-20 right-80 w-12 h-12 bg-mulearn-whitish rounded-lg shadow-lg p-2"
              >
                <svg viewBox="0 0 24 24" fill="#E51937">
                  <path d="M6.25 8.5h1.5v7h-1.5zm2.5 0H10v7H8.75zm2.5 0h1.25v7h-1.25zm2.5 0h1.5v7h-1.5zM2 0v24h20V0H2zm18 22H4V2h16v20z" />
                  <path d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 13c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z" />
                </svg>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
