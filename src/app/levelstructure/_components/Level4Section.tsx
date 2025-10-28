"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

interface InterestGroup {
  name: string;
  icon: string;
  position: string;
  size: string;
  delay: number;
  rotation: number;
  zIndex: number;
}

interface InterestGroupCardProps {
  group: InterestGroup;
  isInView: boolean;
}

const InterestGroupCard: React.FC<InterestGroupCardProps> = ({ group, isInView }) => {
  return (
    <motion.div
      className={`absolute ${group.position}`}
      style={{ 
        zIndex: group.zIndex,
        transform: `rotate(${group.rotation}deg)`
      }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        scale: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ 
        duration: 0.4, 
        delay: group.delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        zIndex: 50,
        rotate: group.rotation - 2,
        transition: { duration: 0.3 }
      }}
    >
      {/* Polaroid-style Photo Frame */}
      <div className={`${group.size} bg-mulearn-whitish rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}
           style={{ 
             filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.15))',
           }}>
        {/* Photo Content Area - Full Card */}
        <div className="w-full h-full bg-mulearn-whitish/50 rounded-sm overflow-hidden p-2">
          <MuImage
            src={`/assets/InterestGroups/${group.icon}`}
            alt={`${group.name} Interest Group`}
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Level4Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  // Flex-Contained Photo Pile - Maximum Visibility Spread
  const interestGroups: InterestGroup[] = [
    {
      name: 'Web Development',
      icon: 'webdev.svg',
      position: 'top-8 left-4',
      size: 'w-40 h-48',
      delay: 0.1,
      rotation: -15,
      zIndex: 35
    },
    {
      name: 'Design',
      icon: 'design.svg',
      position: 'top-2 left-48',
      size: 'w-38 h-46',
      delay: 0.3,
      rotation: 10,
      zIndex: 28
    },
    {
      name: 'Game Development',
      icon: 'game.svg',
      position: 'top-28 left-88',
      size: 'w-39 h-47',
      delay: 0.5,
      rotation: -6,
      zIndex: 42
    },
    {
      name: 'AR/VR',
      icon: 'arvr.svg',
      position: 'top-6 left-96',
      size: 'w-37 h-45',
      delay: 0.7,
      rotation: 18,
      zIndex: 31
    },
    {
      name: 'Cloud Computing',
      icon: 'cloud.svg',
      position: 'top-52 left-32',
      size: 'w-36 h-44',
      delay: 0.9,
      rotation: -12,
      zIndex: 38
    },
    {
      name: 'Marketing',
      icon: 'marketing.svg',
      position: 'top-72 left-68',
      size: 'w-38 h-46',
      delay: 1.1,
      rotation: 5,
      zIndex: 33
    },
    {
      name: 'Cyber Security',
      icon: 'cyber.svg',
      position: 'top-16 left-112',
      size: 'w-40 h-48',
      delay: 1.3,
      rotation: -20,
      zIndex: 45
    },
    {
      name: 'IoT',
      icon: 'iot.svg',
      position: 'top-60 left-12',
      size: 'w-35 h-43',
      delay: 1.5,
      rotation: 14,
      zIndex: 29
    },
    {
      name: 'Product Management',
      icon: 'product.svg',
      position: 'top-40 left-104',
      size: 'w-37 h-45',
      delay: 1.7,
      rotation: -3,
      zIndex: 40
    },
    {
      name: 'Entrepreneurship',
      icon: 'entrepreneurship.svg',
      position: 'top-88 left-44',
      size: 'w-36 h-44',
      delay: 1.9,
      rotation: 16,
      zIndex: 37
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-12 sm:py-16 md:py-20"
      id="level-4"
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
              className="inline-flex items-center gap-2 sm:gap-3 bg-mulearn-duke-purple text-mulearn-whitish px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-mulearn-whitish/20 rounded-full flex items-center justify-center">
                <span className="text-mulearn-whitish font-bold text-sm sm:text-base">4</span>
              </div>
              <span className=" sm:inline">Level 4 - The Path of Choice</span>
         
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-mulearn-blackish leading-tight mb-3 sm:mb-4">
                Choose Your{' '}
                <span className="text-mulearn-duke-purple">
                  Interest Group
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
                This is where the hero chooses their <em className="text-mulearn-duke-purple font-semibold">tribe</em>. 
                Students anchor under <strong className="text-mulearn-duke-purple">mentors & industry-aligned pathways</strong>.
              </p>

            {/* Student Example Cards - Compact */}
            <div className="space-y-2 mt-3 sm:mt-4">
              <motion.div 
                className="bg-mulearn-whitish/60 border border-mulearn-duke-purple/30 rounded-md p-2 sm:p-3 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm">🤖</span>
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">AI Guild:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Driven by algorithms and machine learning.&rdquo;
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
                  <span className="text-xs sm:text-sm">🌐</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Web Tribe:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Chasing digital experiences and interfaces.&rdquo;
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
                  <span className="font-medium text-mulearn-duke-purple text-xs sm:text-sm">Film & Animation:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Telling stories with light and motion.&rdquo;
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
                  <span className="text-xs sm:text-sm">🚀</span>
                  <span className="font-medium text-mulearn-trusty-blue text-xs sm:text-sm">Space/Hardware:</span>
                  <span className="text-mulearn-blackish italic text-xs sm:text-sm flex-1">
                    &ldquo;Bold ones touching the stars and circuits.&rdquo;
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
              className="bg-mulearn-duke-purple/10 rounded-xl p-4 sm:p-5 border border-mulearn-duke-purple/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-mulearn-blackish mb-2 sm:mb-3">The Impact</h3>
              <p className="text-sm sm:text-base text-mulearn-blackish/80 leading-relaxed">
                Learners start building <em className="text-mulearn-duke-purple font-semibold">portfolios of proof-of-work</em> within their chosen interest group. 
                No more <strong className="text-mulearn-duke-purple">drifting through scattered learning</strong>.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Interest Groups Flex Contained */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-2 lg:order-2 hidden md:flex items-center justify-center"
          >
            {/* Flex Contained Photo Pile - Maximum Spread */}
            <div className="relative w-full max-w-[450px] h-[540px] lg:max-w-[500px] lg:h-[600px] flex-shrink-0">

              {/* Interest Group Photos - Relative Positioned */}
              {interestGroups.map((group) => (
                <InterestGroupCard 
                  key={group.name}
                  group={group}
                  isInView={isInView}
                />
              ))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}