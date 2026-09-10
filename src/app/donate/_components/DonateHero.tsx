"use client";

import type { Variants } from "framer-motion";
import { MotionDiv, MotionH1, MotionHeader, MotionP } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { cdnUrl } from "@/services/cdn";

const heroImg = cdnUrl("src/modules/Public/Donation/assets/heroImg.jpg");

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.08, duration: 0.4 },
  }),
};

export default function DonateHero() {
  return (
    <MotionHeader
      className="w-full overflow-hidden bg-linear-to-b from-white via-mulearn/5 to-mulearn/10 px-4 py-16 sm:px-6 md:px-12 lg:px-24 xl:px-40"
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <MotionH1
            custom={0}
            variants={fadeInUp}
            className="text-4xl font-black leading-tight text-mulearn-blackish sm:text-5xl"
          >
            Your contribution doesn&apos;t end with a receipt.
            <br />
            <span className="text-mulearn">It begins with a learner.</span>
          </MotionH1>

          <MotionP
            custom={1}
            variants={fadeInUp}
            className="mt-4 max-w-md text-mulearn-gray-600 lg:mx-0"
          >
            Powering communities, learning spaces, events, technology, and opportunities across the
            µLearn ecosystem.
          </MotionP>

          <MotionDiv
            custom={2}
            variants={fadeInUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg" variant="default">
              <a href="#donate-form">Donate now</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                target="_blank"
                href="https://youtu.be/6vewFUcWk_A?si=F9nW2zL9tpIvejvl"
                rel="noopener"
              >
                Watch Video
              </a>
            </Button>
          </MotionDiv>
        </div>

        <MotionDiv
          custom={1}
          variants={fadeInUp}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <MuImage
            src={heroImg}
            alt="µLearn community members collaborating"
            width={600}
            height={480}
            className="h-auto w-full rounded-3xl object-cover shadow-xl"
          />
        </MotionDiv>
      </div>
    </MotionHeader>
  );
}
