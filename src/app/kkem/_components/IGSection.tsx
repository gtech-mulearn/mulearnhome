"use client";

import type { Variants } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { cardProps, IGSectionProps } from "@/lib/types";
import { useRedirectToApp } from "@/lib/utils";
import { cdnUrl } from "@/services/cdn";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const IGSection = ({ cards, heading, largeImg }: IGSectionProps) => {
  const redirect = useRedirectToApp();

  return (
    <>
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
              preload
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

      <MotionDiv
        className="my-8 md:my-12 px-4 md:px-12 flex flex-col md:items-start items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
          {heading ? heading : "Existing Interest Groups"}
        </h3>
      </MotionDiv>

      <div className="px-4 md:px-12 my-6 md:my-12 flex justify-center">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center gap-6 md:gap-8 w-full">
          {cards.map((card, index) => (
            <MotionDiv
              key={card.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <CardItem {...card} link={card.link} largeImg={largeImg} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default IGSection;

const CardItem = ({ name, image, link, description, largeImg, date }: cardProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className={`flex flex-col items-start gap-4 w-80 h-118 mt-4 mb-4 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.15)] ${
          largeImg ? "group" : ""
        }`}
      >
        <CardContent className="p-4 pb-12 bg-mulearn-whitish shadow-[8px_8px_28px_rgba(0,0,0,0.12)] rounded-[17px] h-full flex flex-col">
          <div className="flex justify-center items-center w-[278px] h-[214px] rounded-[17px] overflow-hidden">
            <MuImage
              src={image}
              alt="domain images"
              width={188}
              height={200}
              className={`object-cover w-full h-full object-top transition-all duration-300 ease-in-out ${
                largeImg ? "group-hover:object-bottom" : ""
              }`}
            />
          </div>

          <p className="font-medium text-[26px] leading-10">{name}</p>
          <p className="font-light text-[16px] leading-[22px]">{date}</p>
          <p className="font-light text-[16px] leading-[22px]">{description}</p>

          {link !== "#" ? (
            <div className="mt-auto flex flex-row items-center gap-2 hover:text-mulearn-trusty-blue">
              <span className="uppercase font-medium text-[16px] leading-[22px]">Explore More</span>
              <SquareArrowOutUpRight />
            </div>
          ) : (
            <div className="mt-auto">
              <span className="uppercase font-medium text-[16px] leading-[22px]">Coming Soon!</span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
