"use client";

import type { Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "../data/home.data";

export function Features() {
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
    !isMobile && !isTablet ? (isHovering ? expandedIndex === index : index === 0) : false;

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 w-full text-center flex flex-col items-center justify-center gap-4">
      <MotionSection
        className="flex flex-col justify-center py-10 pb-0 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center max-w-140 font-extrabold leading-snug">
          What <span className="text-mulearn">µLearn</span> offers
        </h2>
        <p className="font-normal max-w-[800px] mx-auto text-center text-base sm:text-lg md:text-xl text-mulearn-gray-600 px-2">
          µLearn offers a wide range of features and opportunities that help you learn, grow, and
          upskill yourself in a fun and engaging way. Here are some of the key features that µLearn
          offers.
        </p>

        <MotionDiv
          className={`flex w-full mt-10 overflow-hidden relative justify-center gap-2 flex-wrap`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          onMouseLeave={() => setIsHovering(false)}
        >
          {features.map((feature, i) => (
            <MotionDiv
              key={feature.title}
              variants={fadeInUp}
              custom={i}
              onHoverStart={() => {
                if (!isMobile && !isTablet) {
                  setExpandedIndex(i);
                  setIsHovering(true);
                }
              }}
              className={`grow transition-all duration-300
                min-w-[200px]
                sm:min-w-[240px]
                md:min-w-[250px]
                lg:min-w-[360px]
                `}
              style={{
                flex: isCardActive(i) ? 2 : 1,
              }}
            >
              <Card
                className="h-full border-mulearn-gray-600/20 transition-all duration-300"
                style={{
                  backgroundColor: isCardActive(i) ? feature.bgColor : "white",
                  height: isMobile ? "auto" : "350px",
                }}
              >
                <CardHeader className="flex-none">
                  <CardTitle
                    className="font-semibold text-center transition-all duration-300"
                    style={{
                      fontSize: isCardActive(i) ? "1.4rem" : isMobile ? "1rem" : "1.1rem",
                    }}
                  >
                    {feature.title}
                  </CardTitle>
                  <p
                    className="transition-all duration-300 text-mulearn-blackish leading-tight text-center"
                    style={{
                      fontSize: isCardActive(i) ? "1rem" : isMobile ? "0.9rem" : "0.9rem",
                    }}
                  >
                    {feature.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex items-center justify-center py-4">
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{ height: "140px", minHeight: "140px" }}
                  >
                    {(() => {
                      const imageWidth =
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
                                  : 100;
                      return (
                        <MuImage
                          src={feature.image}
                          alt={feature.title}
                          width={imageWidth}
                          height={120}
                          className="object-contain max-w-full max-h-full"
                          quality={85}
                          priority={true}
                          sizes={`${imageWidth}px`}
                        />
                      );
                    })()}
                  </div>
                </CardContent>

                <CardFooter className="flex-none justify-center">
                  <Link
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant={"default"} className="px-4 py-2 font-semibold w-full">
                      {feature.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
