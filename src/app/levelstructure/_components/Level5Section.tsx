"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

export default function Level5Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-12 sm:py-16 md:py-20"
      id="level-5"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Image Space */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-1  md:flex items-center justify-center"
          >
            {/* Character Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              <MuImage
                src="/assets/levelstructure/character.svg"
                alt="Global Arena Character"
                width={384}
                height={384}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Content - Text & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4 order-2 lg:order-2"
          >
            {/* Level Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-mulearn-duke-purple text-mulearn-whitish px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-mulearn-whitish/20 rounded-full flex items-center justify-center">
                <span className="text-mulearn-whitish font-bold text-sm sm:text-base">5</span>
              </div>
              <span className=" sm:inline">Level 5 - The Global Arena</span>
     
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-mulearn-blackish leading-tight mb-3 sm:mb-4">
                Challenges, Hackathons &{' '}
                <span className="text-mulearn-duke-purple">
                  Competitions
                </span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-mulearn-duke-purple rounded-full" />
            </motion.div>

            {/* Story Content */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-mulearn-blackish/80 leading-relaxed">
                The student now steps onto <em className="text-mulearn-duke-purple font-semibold">global battlegrounds</em>. 
                Facing <strong className="text-mulearn-duke-purple">global peers raises the bar</strong>, sharpens skills, and builds recognition.
              </p>

            {/* Competition Example Cards - Compact */}
            <div className="space-y-2 mt-3 sm:mt-4">
              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🤖</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">AI Students:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Competing in Kaggle & LLM hackathons.&rdquo;
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
                  <span className="text-xs sm:text-sm">📊</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Project Management:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;PMI global case competitions.&rdquo;
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
                  <span className="text-xs sm:text-sm">🎬</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Film Group:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Submitting to online festivals & comic cons.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-trusty-blue/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🏗️</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Civil Engineers:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Sustainable city models in design challenges.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🚀</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Space/Cosmos Tribe:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Writing proposals for CubeSat challenges.&rdquo;
                  </span>
                </div>
              </motion.div>
            </div>
            </motion.div>

            {/* Impact section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="bg-mulearn-duke-purple/10 rounded-xl p-4 sm:p-5 border border-mulearn-duke-purple/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-mulearn-blackish mb-2 sm:mb-3">The Impact</h3>
              <p className="text-sm sm:text-base text-mulearn-blackish/80 leading-relaxed">
                Learners transform into <em className="text-mulearn-duke-purple font-semibold">contributors, not just participants</em>. 
                Global competition builds <strong className="text-mulearn-duke-purple">real-world credibility</strong> and industry recognition.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}