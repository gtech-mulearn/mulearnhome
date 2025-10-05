"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { features } from "@/data/data";

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1320 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1320);
      if (window.innerWidth < 1320) setIsHovering(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const totalCards = features.length;
  const baseWidth = `${100 / totalCards}%`;
  const expandedWidth = `calc(${baseWidth} + 200px)`;
  const shrunkWidth = `calc(${baseWidth} - (100px / ${totalCards - 1}))`;

  const isCardActive = (index: number) =>
    isMobile ? false : isHovering ? expandedIndex === index : index === 0;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full text-center flex flex-col items-center justify-center gap-4">
      <div className="pt-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-left max-w-[35rem] font-extrabold leading-normal">
          What <span className="text-[var(--mulearn-trusty-blue)]">µLearn</span>{" "}
          offers
        </h1>
      </div>

      <h6 className="font-normal max-w-[800px] text-center text-lg sm:text-xl text-[var(--mulearn-gray-600)]">
        µLearn offers a wide range of features and opportunities that help you
        learn, grow, and upskill yourself in a fun and engaging way. Here are
        some of the key features that µLearn offers.
      </h6>

      <motion.div
        className="flex w-full mt-12 overflow-hidden relative flex-wrap lg:flex-nowrap justify-center"
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
              setExpandedIndex(i);
              setIsHovering(true);
            }}
            className={`flex flex-col items-center justify-between p-8 overflow-hidden h-[280px] border border-gray-200 transition-all duration-300 ${
              i === 0
                ? "rounded-l-xl"
                : i === totalCards - 1
                ? "rounded-r-xl"
                : ""
            }`}
            style={{
              backgroundColor: isCardActive(i) ? feature.bgColor : "white",
              width: isMobile
                ? "calc(33% - 30px)"
                : isCardActive(i)
                ? expandedWidth
                : shrunkWidth,
              transition: "all 0.3s ease",
            }}
          >
            <div className="flex flex-col items-center text-center mb-4 transition-transform duration-300">
              <h3
                className="font-semibold mb-2 transition-all duration-300"
                style={{
                  fontSize: isCardActive(i) ? "1.5rem" : "1.2rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="transition-all duration-300 text-[var(--mulearn-gray-600)]"
                style={{
                  fontSize: isCardActive(i) ? "1rem" : "0.83rem",
                }}
              >
                {feature.description}
              </p>
            </div>

            <div
              className="relative transition-transform duration-300"
              style={{
                transform: isCardActive(i) ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={
                  feature.title === "Community"
                    ? 140
                    : feature.title === "Mentors"
                    ? 120
                    : feature.title === "Interest Groups"
                    ? 90
                    : feature.title === "Roadmaps"
                    ? 110
                    : feature.title === "Challenges"
                    ? 130
                    : 90
                }
                height={140}
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
