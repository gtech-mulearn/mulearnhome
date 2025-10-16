"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import MuImage from "@/components/MuImage";
import { features } from "@/data/data";

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const isCardActive = (index: number) =>
    !isMobile && !isTablet
      ? isHovering
        ? expandedIndex === index
        : index === 0
      : false;

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 w-full text-center flex flex-col items-center justify-center gap-4">
      <motion.section
        className="flex flex-col justify-center py-24 pb-0 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="pt-10 sm:pt-12">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-left max-w-[35rem] font-extrabold leading-snug">
            What <span className="text-mulearn-trusty-blue">µLearn</span> offers
          </h1>
        </div>
        <h6 className="font-normal max-w-[800px] text-center text-base sm:text-lg md:text-xl text-mulearn-gray-600 px-2">
          µLearn offers a wide range of features and opportunities that help you
          learn, grow, and upskill yourself in a fun and engaging way. Here are
          some of the key features that µLearn offers.
        </h6>

        <motion.div
          className={`flex w-full mt-10 overflow-hidden relative justify-center gap-5 flex-wrap`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onMouseLeave={() => setIsHovering(false)}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              onHoverStart={() => {
                if (!isMobile && !isTablet) {
                  setExpandedIndex(i);
                  setIsHovering(true);
                }
              }}
              className={`flex flex-col items-center justify-between p-5 sm:p-6 border border-mulearn-gray-600/20 transition-all duration-300
                rounded-xl
                flex-grow
                min-w-[200px]
                sm:min-w-[240px]
                md:min-w-[250px]
                lg:min-w-[360px]
                `}
              style={{
                backgroundColor: isCardActive(i) ? feature.bgColor : "white",
                flex: isCardActive(i) ? 2 : 1,
                height: isMobile ? "auto" : "300px",
              }}
            >
              <div className="flex flex-col items-center text-center mb-4 transition-transform duration-300 px-2">
                <h3
                  className="font-semibold mb-1 sm:mb-2 transition-all duration-300"
                  style={{
                    fontSize: isCardActive(i)
                      ? "1.4rem"
                      : isMobile
                      ? "1rem"
                      : "1.1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="transition-all duration-300 text-mulearn-blackish leading-tight"
                  style={{
                    fontSize: isCardActive(i)
                      ? "1rem"
                      : isMobile
                      ? "0.9rem"
                      : "0.9rem",
                  }}
                >
                  {feature.description}
                </p>
              </div>
              <div
                className="relative transition-transform duration-300 mb-2 sm:mb-0 w-full flex justify-center"
                style={{
                  transform: isCardActive(i) ? "scale(1.1)" : "scale(1)",
                }}
              >
                <MuImage
                  src={feature.image}
                  alt={feature.title}
                  width={
                    feature.title === "Community"
                      ? 150
                      : feature.title === "Mentors"
                      ? 120
                      : feature.title === "Interest Groups"
                      ? 120
                      : feature.title === "Roadmaps"
                      ? 130
                      : feature.title === "Challenges"
                      ? 170
                      : 100
                  }
                  height={120}
                  className="object-cover max-w-full h-auto"
                />
              </div>
              <Link
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="mulearn-blue"
                  className="mt-auto px-4 py-2 font-semibold w-full sm:w-auto"
                >
                  {feature.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
