"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv, MotionButton } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";
import WelcomePage from "./_components/WelcomePage";

export default function LevelStructure() {
  const smallRocks = cdnUrl("src/components/assests/NotFound/SmallRocks.webp");
  const stone = cdnUrl("src/components/assests/NotFound/Stone.webp");

  const [showWelcome, setShowWelcome] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBeginJourney = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowWelcome(true);
      setIsAnimating(false);
    }, 1500);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "levelstructure-mulearn-whitish-theme";
    style.textContent = `
      
      @keyframes ufoFloat {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-15px) translateX(8px) rotate(2deg); }
        50% { transform: translateY(-8px) translateX(-5px) rotate(-1deg); }
        75% { transform: translateY(-20px) translateX(12px) rotate(3deg); }
      }
      
      @keyframes ufoGlow {
        0%, 100% { filter: drop-shadow(0 0 15px rgba(46, 133, 254, 0.4)); }
        50% { filter: drop-shadow(0 0 20px rgba(46, 133, 254, 0.6)) drop-shadow(0 0 25px rgba(175, 46, 230, 0.3)); }
      }
      
      .ufo-floating {
        animation: ufoFloat 8s ease-in-out infinite, ufoGlow 4s ease-in-out infinite;
      }
      
      
      @keyframes rocketThrust {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(45deg); }
        25% { transform: translateY(-8px) translateX(-3px) rotate(47deg); }
        50% { transform: translateY(5px) translateX(2px) rotate(43deg); }
        75% { transform: translateY(-5px) translateX(-2px) rotate(46deg); }
      }
      
      @keyframes rocketGlow {
        0%, 100% { filter: drop-shadow(0 0 12px rgba(175, 46, 230, 0.4)); }
        50% { filter: drop-shadow(0 0 18px rgba(175, 46, 230, 0.6)) drop-shadow(0 0 20px rgba(46, 133, 254, 0.3)); }
      }
      
      .rocket-thrust {
        animation: rocketThrust 3s ease-in-out infinite, rocketGlow 2.5s ease-in-out infinite;
      }

      
      .rock-static {
        animation: gentleFloat 6s ease-in-out infinite;
      }
      
      @keyframes gentleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }

      
      .level-section {
        scroll-behavior: smooth;
      }
      
      .level-locked {
        opacity: 0.4;
        filter: grayscale(1);
        pointer-events: none;
      }
      
      .level-unlocked {
        opacity: 1;
        filter: grayscale(0);
        transition: all 0.8s ease-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const styleEl = document.getElementById(
        "levelstructure-mulearn-whitish-theme"
      );
      if (styleEl) styleEl.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomePage key="welcome" />
        ) : (
          <MotionDiv
            key="main"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <div className="min-h-screen bg-mulearn-whitish overflow-x-hidden relative">
              <div className="absolute inset-0 pointer-events-none z-0">
                <div
                  className="absolute top-16 left-8 rock-static"
                  style={{ animationDelay: "0s" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={60}
                    height={60}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain opacity-40"
                  />
                </div>

                <div
                  className="absolute top-24 right-16 rock-static"
                  style={{ animationDelay: "2s" }}
                >
                  <MuImage
                    src={stone}
                    alt="Stone"
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain opacity-35"
                  />
                </div>

                <div
                  className="absolute bottom-32 left-16 rock-static"
                  style={{ animationDelay: "4s" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={50}
                    height={50}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain opacity-30"
                  />
                </div>

                <div
                  className="absolute bottom-20 right-8 rock-static"
                  style={{ animationDelay: "1s" }}
                >
                  <MuImage
                    src={stone}
                    alt="Stone"
                    width={70}
                    height={70}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain opacity-45"
                  />
                </div>

                <div
                  className="absolute top-1/2 left-4 rock-static"
                  style={{ animationDelay: "3s" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={55}
                    height={55}
                    className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 object-contain opacity-38"
                  />
                </div>

                <div
                  className="absolute top-1/3 right-12 rock-static"
                  style={{ animationDelay: "5s" }}
                >
                  <MuImage
                    src={stone}
                    alt="Stone"
                    width={65}
                    height={65}
                    className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 object-contain opacity-32"
                  />
                </div>

                <div
                  className="absolute top-8 left-2 rock-static"
                  style={{ animationDelay: "6s", transform: "rotate(15deg)" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={45}
                    height={45}
                    className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-13 lg:h-13 object-contain opacity-25"
                  />
                </div>
                <div
                  className="absolute top-2/3 left-6 rock-static"
                  style={{ animationDelay: "7s", transform: "rotate(-10deg)" }}
                >
                  <MuImage
                    src={stone}
                    alt="Stone"
                    width={75}
                    height={75}
                    className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 lg:w-17 lg:h-17 object-contain opacity-42"
                  />
                </div>

                <div
                  className="absolute bottom-8 left-2 rock-static"
                  style={{ animationDelay: "8s", transform: "rotate(25deg)" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={40}
                    height={40}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain opacity-33"
                  />
                </div>

                <div
                  className="absolute top-1/4 left-12 rock-static"
                  style={{ animationDelay: "9s", transform: "rotate(-20deg)" }}
                >
                  <MuImage
                    src={stone}
                    alt="Stone"
                    width={60}
                    height={60}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain opacity-28"
                  />
                </div>

                <div
                  className="absolute top-1/2 left-0 rock-static"
                  style={{ animationDelay: "10s", transform: "rotate(35deg)" }}
                >
                  <MuImage
                    src={smallRocks}
                    alt="Small Rocks"
                    width={35}
                    height={35}
                    className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 object-contain opacity-20"
                  />
                </div>
              </div>
              <div className="absolute inset-0  z-5" />

              <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="flex flex-col lg:flex-row md:pl-10 items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                    <div className="flex-1 relative flex items-center justify-center lg:order-2 order-1 px-4 sm:px-6">
                      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
                        <div
                          className="absolute inset-0 rounded-full bg-linear-radial from-mulearn-trusty-blue/20 via-mulearn-duke-purple/10 to-transparent animate-spin"
                          style={{ animationDuration: "20s" }}
                        />

                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                          <MuImage
                            src="/assets/levelstructure/planet.svg"
                            alt="μLearn Planet"
                            width={160}
                            height={160}
                            className="w-full h-full object-contain animate-spin  [animation-duration:30s]"
                            style={{
                              filter:
                                "drop-shadow(0 0 20px rgba(46, 133, 254, 0.4))",
                            }}
                          />
                        </div>

                        <div
                          className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-mulearn-trusty-blue/30 rounded-full animate-spin"
                          style={{ animationDuration: "15s", aspectRatio: "1" }}
                        >
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-mulearn-trusty-blue rounded-full shadow-lg shadow-mulearn-trusty-blue/50" />
                        </div>

                        <div
                          className="absolute inset-2 sm:inset-3 md:inset-4 border-2 border-mulearn-duke-purple/25 rounded-full animate-spin"
                          style={{
                            animationDuration: "25s",
                            animationDirection: "reverse",
                            aspectRatio: "1",
                          }}
                        >
                          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-mulearn-duke-purple rounded-full shadow-lg shadow-mulearn-duke-purple/50" />
                        </div>

                        <div className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 right-0 sm:right-2 md:-right-6 lg:-right-8">
                          <MuImage
                            src="/assets/levelstructure/ufo.svg"
                            alt="UFO"
                            width={100}
                            height={100}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain ufo-floating"
                          />
                        </div>

                        <div className="absolute -bottom-6 sm:-bottom-10 md:-bottom-12 lg:-bottom-16 -left-8 sm:-left-10 md:-left-12 lg:-left-16">
                          <MuImage
                            src="/assets/levelstructure/rocket.svg"
                            alt="Rocket"
                            width={90}
                            height={90}
                            className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 xl:w-30 xl:h-30 object-contain rocket-thrust"
                            style={{
                              filter:
                                "drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 lg:order-1 order-2 px-4 sm:px-6 lg:px-0">
                      <div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-mulearn-blackish mb-4 leading-tight">
                          The{" "}
                          <span className="text-transparent bg-clip-text bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple">
                            μLearn
                          </span>
                          <br />
                          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                            Learning Odyssey
                          </span>
                        </h1>
                        <div className="h-1 w-24 sm:w-32 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple lg:mx-0 mx-auto mb-6 rounded-full" />
                      </div>

                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-mulearn-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                        Step into an{" "}
                        <span className="text-mulearn-trusty-blue font-semibold">
                          unexplored universe
                        </span>{" "}
                        where you design your own trajectory through
                        <span className="text-mulearn-duke-purple font-semibold">
                          {" "}
                          7 levels of transformation
                        </span>
                      </p>

                      <div className="mt-6 sm:mt-8">
                        <MotionButton
                          onClick={handleBeginJourney}
                          disabled={isAnimating}
                          className={`bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish px-6 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-m shadow-lg shadow-mulearn-trusty-blue/25 ${
                            isAnimating ? "cursor-not-allowed opacity-80" : ""
                          }`}
                          whileHover={{
                            scale: 1.05,
                            boxShadow:
                              "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={
                            isAnimating
                              ? {
                                  scale: [1, 1.2, 1.4, 2, 5, 0],
                                  rotate: [0, 10, -10, 5, -5, 0],
                                  opacity: [1, 1, 1, 0.8, 0.3, 0],
                                  filter: [
                                    "brightness(1) blur(0px)",
                                    "brightness(1.2) blur(0px)",
                                    "brightness(1.5) blur(1px)",
                                    "brightness(2) blur(2px)",
                                    "brightness(3) blur(5px)",
                                    "brightness(5) blur(10px)",
                                  ],
                                }
                              : {}
                          }
                          transition={{
                            duration: isAnimating ? 1.5 : 0.2,
                            ease: isAnimating
                              ? [0.25, 0.46, 0.45, 0.94]
                              : "easeOut",
                            times: isAnimating
                              ? [0, 0.2, 0.4, 0.6, 0.8, 1]
                              : undefined,
                          }}
                        >
                          Begin Your Journey
                        </MotionButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
