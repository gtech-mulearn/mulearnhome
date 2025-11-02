"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Level7Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-7"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <MuImage
          src="/assets/levelstructure/ring.svg"
          alt="μVerse Portal Ring"
          width={800}
          height={800}
          className="w-170 max-w-5xl h-auto"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-mulearn-blackish leading-tight">
              Welcome to the{" "}
              <span className="text-mulearn-duke-purple">μVerse</span>
            </h2>
            <p className="text-xl md:text-2xl text-mulearn-gray-600 leading-relaxed max-w-3xl mx-auto">
              Where learning transforms into opportunity, and students become
              global contributors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-mulearn-trusty-blue">
                Access
              </h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Direct pathways to fellowships, startups, and global
                opportunities curated for your journey.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-mulearn-duke-purple">
                Network
              </h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Connect with mentors, industry leaders, and peers who accelerate
                your growth.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-mulearn-trusty-blue">
                Impact
              </h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Build solutions that matter, ship to real users, and contribute
                to meaningful projects.
              </p>
            </div>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-mulearn-blackish">
              Where Learners Go
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-t-4 border-t-mulearn-trusty-blue w-full h-58 flex flex-col">
                <CardHeader className="flex-1 flex flex-col justify-center p-4">
                  <CardTitle className="text-mulearn-blackish text-xl">
                    Global Fellowship Programs
                  </CardTitle>
                  <CardDescription className="text-mulearn-gray-600 text-xs">
                    CubeSat challenges, research opportunities, and
                    international collaborations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-t-4 border-t-mulearn-trusty-blue w-full h-58 flex flex-col">
                <CardHeader className="flex-1 flex flex-col justify-center p-4">
                  <CardTitle className="text-mulearn-blackish text-xl">
                    Fast-Scaling Startups
                  </CardTitle>
                  <CardDescription className="text-mulearn-gray-600 text-xs">
                    Early engineering roles in AI, web development, and emerging
                    technologies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-t-4 border-t-mulearn-trusty-blue w-full h-58 flex flex-col">
                <CardHeader className="flex-1 flex flex-col justify-center p-4">
                  <CardTitle className="text-mulearn-blackish text-xl">
                    Entrepreneurial Ventures
                  </CardTitle>
                  <CardDescription className="text-mulearn-gray-600 text-xs">
                    Funded prototypes, creative agencies, and independent
                    innovations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-t-4 border-t-mulearn-trusty-blue w-full h-58 flex flex-col">
                <CardHeader className="flex-1 flex flex-col justify-center p-4">
                  <CardTitle className="text-mulearn-blackish text-xl">
                    Industry Leadership
                  </CardTitle>
                  <CardDescription className="text-mulearn-gray-600 text-xs">
                    Technical roles, project management, and interdisciplinary
                    collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <div className="w-20 h-1 bg-mulearn-duke-purple rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-mulearn-blackish leading-relaxed max-w-3xl mx-auto">
              The μVerse is not a destination. It&apos;s a continuous cycle of
              learning, building, and contributing that keeps you growing
              throughout your career.
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
