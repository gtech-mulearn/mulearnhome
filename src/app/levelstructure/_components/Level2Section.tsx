"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

export default function Level2Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-gradient-to-br from-mulearn-trusty-blue/5 via-blue-50/10 to-mulearn-whitish flex items-center justify-center py-12 sm:py-16 md:py-20"
      id="level-2"
    >




      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Help SVG Visual */}
          <div className="relative order-1 lg:order-1">
            <div className="relative w-full flex items-center justify-center">
              <motion.div
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:max-w-[700px] lg:h-[700px] mx-auto flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <MuImage
                  src="/assets/levelstructure/help.svg"
                  alt="Help - Mindset Transformation"
                  width={700}
                  height={700}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Content - Text & Cards */}
          <div className="space-y-3 sm:space-y-4 order-2 lg:order-2">
            {/* Level Badge & Title */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-mulearn-trusty-blue text-mulearn-whitish px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-mulearn-whitish/20 rounded-full flex items-center justify-center">
                <span className="text-mulearn-whitish font-bold text-sm sm:text-base">2</span>
              </div>
              <span className="sm:inline">Level 2 - The Mindset Shift</span>
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-mulearn-blackish leading-tight mb-3 sm:mb-4">
                From{' '}
                <span className="text-mulearn-duke-purple">
                  Fixed
                </span>
                {' '}→{' '}
                <span className="text-mulearn-trusty-blue">
                  Growth
                </span>
                {' '}→{' '}
                <span className="text-mulearn-trusty-blue">
                  Abundance
                </span>
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-mulearn-trusty-blue rounded-full" />
            </motion.div>

            {/* Story Content */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-mulearn-blackish/80 leading-relaxed">
                Most students walk into μLearn trapped in <em className="text-mulearn-duke-purple font-semibold">invisible cages</em>:
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-mulearn-trusty-blue rounded-r-lg p-2 sm:p-3 my-2 sm:my-4">
                <p className="text-xs sm:text-sm md:text-base text-mulearn-blackish/70 leading-relaxed italic">
                  &ldquo;μLearn rewires these narratives. Through experiences, reflection spaces, and peer nudges, a fixed mindset stretches into a <strong className="text-mulearn-trusty-blue">growth mindset</strong>… and finally into <strong className="text-mulearn-trusty-blue">abundance thinking</strong>.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Student Example Cards - Compact */}
            <div className="space-y-2 mt-3 sm:mt-4">
              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">💻</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Web Dev:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;I&apos;ll never be good enough to compete globally.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-trusty-blue/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🎨</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Comics:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;I doubt whether my passion has career potential.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🚀</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Space:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;I feel locked out because labs are pricey.&rdquo;
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Impact section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-mulearn-trusty-blue/10 rounded-xl p-4 sm:p-5 border border-mulearn-trusty-blue/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-mulearn-blackish mb-2 sm:mb-3">The Impact</h3>
              <p className="text-sm sm:text-base text-mulearn-blackish/80 leading-relaxed">
                Students internalize <em className="text-mulearn-trusty-blue font-semibold">grit, self-learning, and peer collaboration</em>. 
                Failure becomes feedback. <strong className="text-mulearn-trusty-blue">Peers become allies, not competitors</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}