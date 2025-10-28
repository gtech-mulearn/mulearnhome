"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';
import { cdnUrl } from '@/services/cdn';

export default function Level3Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const ufo = cdnUrl("src/components/assests/NotFound/UFO.webp");

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-gradient-to-br from-mulearn-trusty-blue/5 via-mulearn-whitish/10 to-mulearn-whitish flex items-center justify-center py-12 sm:py-16 md:py-20"
      id="level-3"
    >
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Content - Text & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4 order-1 lg:order-1"
          >
            {/* Level Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-mulearn-trusty-blue text-mulearn-whitish px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-mulearn-whitish/20 rounded-full flex items-center justify-center">
                <span className="text-mulearn-whitish font-bold text-sm sm:text-base">3</span>
              </div>
              <span className="sm:inline">Level 3 - Tool Mastery</span>
            
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-mulearn-blackish leading-tight mb-3 sm:mb-4">
                The{' '}
                <span className="text-mulearn-trusty-blue">
                  Explorer&apos;s Compass
                </span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-mulearn-trusty-blue rounded-full" />
            </motion.div>

            {/* Story Content */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-mulearn-blackish/80 leading-relaxed">
                At this point, tools become the <em className="text-mulearn-trusty-blue font-semibold">compass</em>. 
                Knowledge transforms from abstract to <strong className="text-mulearn-trusty-blue">actionable</strong>.
              </p>

            {/* Student Example Cards - Compact */}
            <div className="space-y-2 mt-3 sm:mt-4">
              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-trusty-blue/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">💻</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Web Dev:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;GitHub, hosting, and Figma become my workflow.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-trusty-blue/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🤖</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">AI Student:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;HuggingFace and ChatGPT streamline my workflows.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🎬</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Film:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;DaVinci Resolve and AI editing tools unlock creativity.&rdquo;
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-trusty-blue/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🏗️</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Civil Engineer:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;AutoCAD + Project Management tools bring ideas to life.&rdquo;
                  </span>
                </div>
              </motion.div>
            </div>
            </motion.div>

            {/* Impact section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-mulearn-trusty-blue/10 rounded-xl p-4 sm:p-5 border border-mulearn-trusty-blue/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-mulearn-blackish mb-2 sm:mb-3">The Impact</h3>
              <p className="text-sm sm:text-base text-mulearn-blackish/80 leading-relaxed">
                Students move from <em className="text-mulearn-trusty-blue font-semibold">passive learners to active creators</em>. 
                They <strong className="text-mulearn-trusty-blue">command technology</strong> instead of being commanded by it.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - UFO with Tool Suction Effect */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-2 lg:order-2"
          >
            {/* UFO Container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[900px] mx-auto flex items-center justify-center lg:ml-8">
              
              {/* UFO Image */}
              <motion.div
                className="relative z-20 w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[450px] mx-auto flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={isInView ? { 
                  scale: 1, 
                  opacity: 1, 
                  y: [0, -10, 0], 
                } : { scale: 0.8, opacity: 0, y: -20 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <MuImage
                  src={ufo}
                  alt="UFO - Tool Mastery"
                  width={900}
                  height={450}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Tractor Beam Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isInView ? { opacity: 0.3, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <div className="w-32 h-40 sm:w-40 sm:h-52 md:w-50 md:h-64 bg-gradient-to-b from-mulearn-trusty-blue/30 via-mulearn-trusty-blue/10 to-transparent rounded-b-full blur-sm" />
              </motion.div>

              {/* Floating Tool Icons */}
              {/* GitHub Logo */}
              <motion.div
                className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/4 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <motion.div
                  animate={{ 
                    y: [-100, -120, -100], 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#181717">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Figma Logo */}
              <motion.div
                className="absolute bottom-10 sm:bottom-12 md:bottom-16 right-1/4 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <motion.div
                  animate={{ 
                    y: [-80, -100, -80], 
                    rotate: [0, -15, 15, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#f24e1e" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                      <path fill="#a259ff" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                      <path fill="#ff7262" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                      <path fill="#1abcfe" d="M12 8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8z"/>
                      <path fill="#0acf83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* VS Code Logo */}
              <motion.div
                className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.div
                  animate={{ 
                    y: [-60, -80, -60], 
                    rotate: [0, 20, -20, 0]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#007ACC">
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* AutoCAD Logo */}
              <motion.div
                className="absolute bottom-14 sm:bottom-18 md:bottom-24 right-1/3 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <motion.div
                  animate={{ 
                    y: [-90, -110, -90], 
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 3.2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#E51937">
                      <path d="M6.25 8.5h1.5v7h-1.5zm2.5 0H10v7H8.75zm2.5 0h1.25v7h-1.25zm2.5 0h1.5v7h-1.5zM2 0v24h20V0H2zm18 22H4V2h16v20z"/>
                      <path d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5zm0 13c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Notion Logo */}
              <motion.div
                className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/3 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                <motion.div
                  animate={{ 
                    y: [-70, -90, -70], 
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2.7, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000000">
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.746c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.746 0-.934-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073L12.396 8.5c.746.047.980.28 1.4.933l4.904 7.92v-6.112l-1.026-.12c-.094-.513.28-.887.793-.933z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* DaVinci Resolve Logo */}
              <motion.div
                className="absolute bottom-16 sm:bottom-20 md:bottom-28 left-1/5 z-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <motion.div
                  animate={{ 
                    y: [-110, -130, -110], 
                    rotate: [0, 12, -12, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-mulearn-whitish rounded-lg p-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#233A51">
                      <circle cx="12" cy="12" r="10" fill="#233A51"/>
                      <path fill="#FCDD06" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                      <path fill="#FCDD06" d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}