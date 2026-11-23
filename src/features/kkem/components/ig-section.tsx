"use client";

import type { Variants } from "framer-motion";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { useRedirectToApp } from "@/lib/utils";
import { cdnUrl } from "@/shared";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export const IGSection = () => {
  const redirect = useRedirectToApp();

  return (
    <MotionDiv
      className="bg-mulearn rounded-2xl px-6 py-12 md:px-0 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between md:mx-12">
        <div className="md:-m-12 mt-0">
          <MuImage
            src={cdnUrl("src/modules/Public/KKEM/assets/IGS/fvimg.webp")}
            alt="Learning Circles"
            width={576}
            height={576}
            className="w-72 md:w-[36rem] hidden md:block"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-mulearn-whitish font-semibold text-5xl md:text-[5rem] leading-[6rem] mb-8 md:max-w-[40rem]">
            Introducing Learning Circles
          </h3>
          <p className="text-mulearn-whitish font-normal text-base md:text-lg leading-7 md:leading-8 mb-4 md:mb-0 md:max-w-[45rem]">
            An informal mechanism for bringing together learners who are interested in the same
            topic from across different fields and disciplines. A fantastic way to spend a small
            amount of time learning about new things with a group of people with same interests!
          </p>
          <Button
            variant="inverted"
            className="cursor-pointer mt-6 px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:text-lg md:text-lg gap-1 mx-auto md:mx-0"
            onClick={() => redirect?.("/")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </MotionDiv>
  );
};
