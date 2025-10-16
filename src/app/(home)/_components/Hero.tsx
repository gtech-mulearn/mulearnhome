"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { cdnUrl } from "@services/cdn";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";

interface HeroProps {
  refreshToken?: string | null;
  redirect: (path: string) => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const illustration = cdnUrl("src/modules/Public/Home/assets/illustration.webp");

export default function Hero({ refreshToken, redirect }: HeroProps) {
  return (
    <motion.header
      className="relative flex flex-col items-center justify-start overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f1f2f7 30%, #dce0f4 100%)",
      }}
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 md:pt-28 lg:pt-32">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-mulearn-blackish leading-snug sm:leading-tight lg:leading-tight mb-4 sm:mb-6 max-w-3xl sm:max-w-4xl"
          >
            Your Ultimate Gateway
            <br />
            to <span className="text-mulearn-trusty-blue">Peer-Led Growth</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-mulearn-gray-600 mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl font-normal"
          >
            An open community for learners, makers, and innovators
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            <Button
              variant={"mulearn-blue"}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:text-lg md:text-lg hover:shadow-xl hover:scale-105 active:scale-95"
              onClick={() =>
                refreshToken
                  ? redirect("/dashboard/home")
                  : redirect("/register")
              }
            >
              Join µLearn
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="relative w-full mt-8 sm:mt-12 md:mt-16 flex justify-center"
      >
        <MuImage
          src={illustration}
          alt="Community illustration"
          width={1300}
          height={900}
          className="object-cover h-auto"
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
        />
      </motion.div>
    </motion.header>
  );
}
