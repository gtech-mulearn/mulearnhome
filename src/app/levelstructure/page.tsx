"use client";

import { MotionDiv } from "@/components/MuFramer";

import Level1Section from "./_components/Level1Section";
import Level2Section from "./_components/Level2Section";
import Level3Section from "./_components/Level3Section";
import Level4Section from "./_components/Level4Section";
import Level5Section from "./_components/Level5Section";
import Level6Section from "./_components/Level6Section";
import Level7Section from "./_components/Level7Section";

export default function LevelStructure() {
  return (
    <div className="min-h-screen bg-mulearn-whitish">
      {/* Intro */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/levelstructure/bg_image1.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16 sm:mt-0 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mulearn-blackish tracking-tight leading-[1.1]">
            The <span className="text-mulearn">µLearn</span> Odyssey
          </h1>

          <div className="text-sm sm:text-base md:text-lg text-mulearn-gray-600 max-w-3xl mx-auto space-y-4 leading-relaxed font-medium">
            <p>
              All learners enter their college life with a bag full of hopes and pocket full dreams.
              However,for the majority of them,the next 3 or 4 years will be predictable-attend
              lectures,write some exams,finish the degree and so on.
            </p>
            <p>Like every single one around them,they hold some quiet dreams within them.</p>
            <ul className="list-none inline-block text-left space-y-2 py-2 border-y border-mulearn/20">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mulearn" />
                Maybe they love coding
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mulearn" />
                Maybe they sketch during lectures
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mulearn" />
                Maybe they dream of building things on their own
              </li>
            </ul>
            <p>But all of these remain invisible until spoken aloud.</p>
            <p className="font-semibold text-mulearn-blackish text-base sm:text-lg md:text-xl">
              And exactly at this point,their journey with µlearn begins.
            </p>
          </div>

          <div className="pt-10 pb-16 flex flex-col items-center select-none w-full max-w-sm">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80 }}
              className="relative w-full bg-mulearn-whitish border border-mulearn-greyish/30 rounded-lg p-6 shadow-[3px_5px_25px_rgba(0,0,0,0.02)] hover:shadow-[5px_8px_35px_rgba(0,0,0,0.05)] hover:border-mulearn/40 transition-all duration-500 group text-left cursor-pointer"
              onClick={() => {
                document.getElementById("level-1")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ y: -4, rotate: -1 }}
            >
              {/* Ring Binder Spiral Holes (Left edge) */}
              <div className="absolute top-6 bottom-6 left-2 flex flex-col justify-between w-2 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative flex items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-mulearn-blackish/20 shadow-inner" />
                    <div className="absolute w-5 h-4 border-2 border-t-0 border-l-0 border-mulearn-greyish rounded-br-lg -left-1.5 top-[-2px] shadow-sm transform rotate-12" />
                  </div>
                ))}
              </div>

              <div className="pl-6 border-l-2 border-mulearn-greyish/40 space-y-4 font-sans relative">
                <div className="flex items-center justify-between border-b border-mulearn-greyish/20 pb-1">
                  <span className="text-[11px] font-bold tracking-widest text-mulearn-gray-600 uppercase">
                    Notes
                  </span>
                  <span className="text-[9px] font-mono text-mulearn-gray-600">Page 1 of 7</span>
                </div>

                <div className="space-y-3 text-sm text-mulearn-blackish font-medium leading-relaxed tracking-tight relative">
                  <p className="line-through decoration-mulearn-gray-600/40 opacity-40 font-normal">
                    Attend class. Get degree. Predictable.
                  </p>

                  <p className="text-mulearn-trusty-blue font-bold flex items-center gap-1">
                    <span>Create something real.</span>
                  </p>

                  <div className="text-mulearn-duke-purple font-bold flex items-center gap-1.5">
                    <span>Descend into the levels</span>
                    <svg
                      className="w-4 h-4 text-mulearn animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>

                  <div className="absolute right-0 bottom-4 opacity-70 text-mulearn-trusty-blue">
                    <svg
                      className="w-6 h-6 animate-spin"
                      style={{ animationDuration: "15s" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 2L14.8 8.6L22 9.2L16.5 13.9L18.3 21L12 17.3L5.7 21L7.5 13.9L2 9.2L9.2 8.6L12 2Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-mulearn-greyish/20 text-[11px] font-bold text-mulearn-gray-600 group-hover:text-mulearn transition-colors duration-300">
                  <span>Turn to page 2...</span>
                  <span className="text-[9px] font-mono opacity-60">TAP OR SCROLL</span>
                </div>
              </div>

              <div className="absolute -bottom-10 left-[60%] flex flex-col items-center">
                <MotionDiv
                  className="w-1 h-12 bg-mulearn rounded-full origin-top"
                  animate={{ rotate: [-4, 4, -4], y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                />
                <MotionDiv
                  className="w-4 h-4 rounded-full bg-mulearn-whitish border-2 border-mulearn shadow-sm flex items-center justify-center -mt-1 text-[8px] font-bold text-mulearn"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  µ
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <Level1Section />
      <Level2Section />
      <Level3Section />
      <Level4Section />
      <Level5Section />
      <Level6Section />
      <Level7Section />
    </div>
  );
}
