"use client";

import MuImage from "@/components/MuImage";
import Link from "next/link";
import { cardProps, IGSectionProps } from "@/lib/types";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion, Variants, easeInOut } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const Card = ({
  name,
  image,
  link,
  description,
  largeImg,
  date,
}: cardProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={`flex flex-col items-start p-4 gap-4 w-[310px] h-[475px] bg-mulearn-whitish shadow-[8px_8px_28px_rgba(0,0,0,0.12)] rounded-[17px] mt-4 mb-4 transition-all duration-300 ease-in-out cursor-pointer
        hover:-translate-y-2 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.15)] ${
          largeImg ? "group" : ""
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex justify-center items-center w-[278px] h-[214px] bg-mulearn-whitish rounded-[17px] overflow-hidden">
          <MuImage
            src={image}
            alt="domain images"
            width={188}
            height={200}
            className={`object-cover h-auto w-full object-top transition-all duration-300 ease-in-out ${
              largeImg ? "group-hover:object-bottom" : ""
            }`}
          />
        </div>

        <p className="font-medium text-[28px] leading-10">{name}</p>
        <p className="font-light text-[16px] leading-[22px]">{date}</p>
        <p className="font-light text-[16px] leading-[22px]">{description}</p>

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
      </motion.div>
    </Link>
  );
};

const IGEvents = ({ cards, heading, largeImg }: IGSectionProps) => {
  return (
    <>
      <motion.div
        className="my-8 md:my-12 px-4 md:px-12 flex flex-col md:items-start items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
          {heading ? heading : "Partnered Events"}
        </h3>
      </motion.div>

      <div className="px-4 md:px-12 my-6 md:my-12 flex justify-center">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center gap-6 md:gap-8 w-full">
          {cards.map((card) => (
            <Card
              {...card}
              key={card.name}
              link={card.link}
              largeImg={largeImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IGEvents;
