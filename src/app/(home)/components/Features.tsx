"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { features } from "@/data/data";

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (windowWidth === 0) return null;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth > 768 && windowWidth < 1024;

  const totalCards = features.length;
  const baseWidth = `${100 / totalCards}%`;
  const expandedWidth = `calc(${baseWidth} + 200px)`;
  const shrunkWidth = `calc(${baseWidth} - (200px / ${totalCards - 1}))`;

  const isCardActive = (index: number) =>
    !isMobile && !isTablet
      ? isHovering
        ? expandedIndex === index
        : index === 0
      : false;

  const getCardWidth = () => {
    if (isMobile) return "100%";
    if (isTablet) return "calc(50% - 12px)";
    return undefined;
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 w-full text-center flex flex-col items-center justify-center gap-4">
      <div className="pt-10 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-left max-w-[35rem] font-extrabold leading-snug">
          What <span className="text-[var(--mulearn-trusty-blue)]">µLearn</span>{" "}
          offers
        </h1>
      </div>
      <h6 className="font-normal max-w-[800px] text-center text-base sm:text-lg md:text-xl text-[var(--mulearn-gray-600)] px-2">
        µLearn offers a wide range of features and opportunities that help you
        learn, grow, and upskill yourself in a fun and engaging way. Here are
        some of the key features that µLearn offers.
      </h6>
      <motion.div
        className={`featuresGrid flex w-full mt-10 overflow-hidden relative justify-center ${
          isMobile || isTablet ? "flex-wrap gap-5" : "flex-nowrap"
        }`}
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
            className={`featureCard flex flex-col items-center justify-between p-5 sm:p-6 overflow-hidden border border-gray-200 transition-all duration-300 ${
              i === 0
                ? "rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                : i === totalCards - 1
                ? "rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none"
                : "rounded-none"
            }`}
            style={{
              backgroundColor: isCardActive(i) ? feature.bgColor : "white",
              width:
                isMobile || isTablet
                  ? getCardWidth()
                  : isCardActive(i)
                  ? expandedWidth
                  : shrunkWidth,
              height: isMobile ? "auto" : "300px",
              transition: "all 0.3s ease",
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
                className="transition-all duration-300 text-[var(--mulearn-gray-600)] leading-snug"
                style={{
                  fontSize: isCardActive(i)
                    ? "1rem"
                    : isMobile
                    ? "0.9rem"
                    : "0.85rem",
                }}
              >
                {feature.description}
              </p>
            </div>
            <div
              className="relative transition-transform duration-300 mb-2 sm:mb-0"
              style={{
                transform: isCardActive(i) ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={
                  feature.title === "Community"
                    ? 110
                    : feature.title === "Mentors"
                    ? 100
                    : feature.title === "Interest Groups"
                    ? 80
                    : feature.title === "Roadmaps"
                    ? 90
                    : feature.title === "Challenges"
                    ? 100
                    : 90
                }
                height={120}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
