"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

export default function Level1Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-gradient-to-br from-mulearn-whitish via-blue-50/30 to-purple-50/20 flex items-center justify-center py-20"
      id="level-1"
    >


      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Content - Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Level Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3  bg-mulearn-trusty-blue text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              Level 1 - The First Hello
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mulearn-blackish leading-tight mb-4">
                Say{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-trusty-blue">
                  &ldquo;Here I Am&rdquo;
                </span>
              </h2>
              <div className="w-20 h-1 bg-mulearn-trusty-blue rounded-full" />
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-mulearn-blackish/80 leading-relaxed">
                Every explorer in μLearn&apos;s galaxy starts by saying: <em className="text-mulearn-trusty-blue font-semibold">&ldquo;Here I am.&rdquo;</em>
              </p>
              
              <p className="text-base text-mulearn-blackish/70 leading-relaxed">
                This is not a roll call. It&apos;s an <strong className="text-mulearn-trusty-blue">act of visibility</strong> letting peers, mentors, and opportunities discover you.
              </p>

              {/* Example Cards */}
              <div className="space-y-3 mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/60 backdrop-blur-sm border border-mulearn-trusty-blue/20 rounded-lg p-3 shadow-sm"
                >
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold text-mulearn-trusty-blue">Civil Engineering Student:</span> 
                    <span className="italic"> &ldquo;curious about green buildings.&rdquo;</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white/60 backdrop-blur-sm border border-mulearn-trusty-blue/20 rounded-lg p-3 shadow-sm"
                >
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold text-mulearn-trusty-blue">Mechanical Engineer:</span> 
                    <span className="italic"> &ldquo;I sketch machines but want to learn 3D modeling.&rdquo;</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-white/60 backdrop-blur-sm border border-mulearn-trusty-blue/20 rounded-lg p-3 shadow-sm"
                >
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold text-mulearn-trusty-blue">Film Enthusiast:</span> 
                    <span className="italic"> &ldquo;I make short reels in my hostel room.&rdquo;</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-mulearn-trusty-blue/10 rounded-xl p-5 border border-mulearn-trusty-blue/20"
            >
              <h3 className="text-xl font-bold text-mulearn-blackish mb-3">The Impact</h3>
              <p className="text-base text-mulearn-blackish/80 leading-relaxed mb-5">
                Students realize that their journey begins <em className="text-mulearn-trusty-blue font-semibold">not with skills</em>, 
                but with <strong className="text-mulearn-trusty-blue">identity and courage to show up</strong>.
              </p>
              
             
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            {/* Central Illustration Area */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              {/* Background Glow - Removed */}
              
              {/* Hello SVG representation */}
              <motion.div
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[700px] lg:h-[620px] mx-auto flex items-center justify-center"
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
                  src="/assets/levelstructure/hello.svg"
                  alt="Hello - Three People Introduction"
                  width={620}
                  height={620}
                  className="w-full h-full object-contain"
                />
              </motion.div>




            </div>
          </motion.div>
        </div>
      </div>

 
    </section>
  );
}