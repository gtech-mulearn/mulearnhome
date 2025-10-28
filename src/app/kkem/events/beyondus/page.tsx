"use client";

import React from "react";
import Link from "next/link";
import { cardProps } from "@/lib/types";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";
import { kkem } from "@/data/data";
import { SquareArrowOutUpRight } from "lucide-react";
import { easeInOut, motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeInOut } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeInOut } },
};

export default function BeyondUs() {
  const renderCard = (
    { name, description, image, link }: cardProps,
    index: number
  ) => (
    <motion.div
      key={name}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-start p-4 gap-4 w-[310px] h-[475px] bg-mulearn-whitish shadow-lg rounded-xl mt-4 mb-4 transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex justify-center items-center w-[278px] h-[214px] rounded-xl overflow-hidden">
            <MuImage
              src={image}
              alt={name}
              width={188}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="font-semibold text-2xl md:text-3xl text-mulearn-blackish">
            {name}
          </p>
          <p className="font-light text-base text-mulearn-blackish">
            {description}
          </p>
          {link !== "#" ? (
            <div className="flex flex-row items-center gap-2 hover:text-mulearn-trusty-blue">
              <span className="uppercase font-medium text-[16px] leading-[22px]">
                Explore More
              </span>
              <SquareArrowOutUpRight />
            </div>
          ) : (
            <span className="uppercase font-medium text-[16px] leading-[22px]">
              Coming Soon!
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="w-full mx-auto px-6 md:px-12">
      <div className="flex flex-wrap justify-between items-center py-8 md:py-12">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-mulearn-blackish mb-4">
            Beyond Us
          </h1>
          <p className="text-lg md:text-xl font-medium text-mulearn-blackish mb-2">
            A hackathon like never before in association with Kerala Knowledge
            Economy Mission as a part of Kerala Skill Express wherein your
            skills of technical knowledge and problem solving will be put to the
            test.
          </p>
          <p className="text-lg md:text-xl font-light text-mulearn-gray-600">
            08 August 2023 - 09 August 2023
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <MuImage
            src={cdnUrl(
              "src/modules/Public/KKEM/assets/past_events/beyondus/beyondus.png"
            )}
            alt="Beyond Us Event"
            width={384}
            height={384}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      <motion.div
        className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple py-8 flex justify-center rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex flex-wrap justify-between w-full max-w-7xl px-4 md:px-12">
          <div className="text-center mb-6 md:mb-0">
            <p className="text-4xl md:text-5xl font-semibold text-mulearn-whitish">
              200+
            </p>
            <p className="text-lg font-normal text-mulearn-whitish">
              Participants
            </p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <p className="text-4xl md:text-5xl font-semibold text-mulearn-whitish">
              375+
            </p>
            <p className="text-lg font-normal text-mulearn-whitish">
              Registrations
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-mulearn-whitish">
              50K
            </p>
            <p className="text-lg font-normal text-mulearn-whitish">
              Worth Prize
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="py-8 md:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-mulearn-blackish text-center mb-8">
          Winners: Design Domain
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {kkem.winnersDesign.map(renderCard)}
        </div>
      </motion.div>

      <motion.div
        className="py-8 md:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-mulearn-blackish text-center mb-8">
          Winners: Software Domain
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {kkem.winnersSoftware.map(renderCard)}
        </div>
      </motion.div>
    </div>
  );
}
