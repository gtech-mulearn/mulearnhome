"use client";

import type { Variants } from "framer-motion";
import { ArrowRight, Atom, Info } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionHeader, MotionP, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { useRedirectToApp } from "@/lib/utils";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.05, duration: 0.3 },
  }),
};

export function Hero() {
  const redirect = useRedirectToApp();

  return (
    <MotionHeader
      id="home"
      className="relative flex flex-col items-center justify-between h-[70vh] lg:min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f1f2f7 30%, #dce0f4 100%)",
      }}
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <MotionH1
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-mulearn-blackish leading-snug sm:leading-tight lg:leading-tight max-w-3xl sm:max-w-4xl"
          >
            Your Ultimate Gateway
            <br />
            to <span className="text-mulearn">Peer-Led Growth</span>
          </MotionH1>

          <MotionP
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-lg md:text-xl text-mulearn-gray-600 mb-4 sm:mb-6 max-w-xs sm:max-w-xl md:max-w-2xl font-normal"
          >
            An open community for learners, makers, and innovators
          </MotionP>
          <MotionDiv
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            {/* badge linking to the self-determination theory page */}
            <Link
              href="/self-determination-theory"
              className="group inline-flex mb-4 items-center gap-2 rounded-full border border-mulearn/20 bg-mulearn/5 py-2 pl-2 pr-4 transition-colors hover:bg-mulearn/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mulearn text-white">
                <Info className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-semibold text-mulearn sm:text-base">
                Backed by Self-Determination Theory — Deci &amp; Ryan
              </span>
              <ArrowRight className="h-4 w-4 text-mulearn transition-transform group-hover:translate-x-0.5" />
            </Link>
          </MotionDiv>
          <div className="flex flex-col md:flex-row gap-4">
            <MotionDiv
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
            >
              <Button
                variant={"default"}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-lg md:text-lg"
                onClick={() => redirect("/")}
              >
                Join µLearn
              </Button>
            </MotionDiv>

            <MotionDiv
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
            >
              {/* launch event for the Quantum Technologies IG */}
              <Button
                asChild
                variant={"outline"}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-lg md:text-lg rounded-full"
              >
                <Link
                  href="https://quantum-tech-matrix.mulearn.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Atom className="size-4 sm:size-5" />
                  Explore Quantum Tech Matrix
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-auto flex justify-center items-end">
        <MuImage
          src="/assets/illustration.webp"
          alt="Community illustration showcasing µLearn peer learning platform"
          className="object-cover object-bottom h-auto w-full max-w-screen md:max-w-[90vw] lg:max-w-[80vw]"
          priority
          fetchPriority="high"
          quality={85}
          width={1300}
          height={900}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 80vw, 70vw"
        />
      </div>
    </MotionHeader>
  );
}
