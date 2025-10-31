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
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-1"
    >
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Text & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                The First <span className="text-mulearn-trusty-blue">Hello</span>
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                Every explorer in μLearn&apos;s galaxy starts by saying: <span className="font-semibold text-mulearn-trusty-blue">&ldquo;Here I am.&rdquo;</span>
              </p>
              
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                This is not a roll call. It&apos;s an act of visibility—letting peers, mentors, and opportunities discover you.
              </p>

              {/* Example Cards */}
              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Civil Engineering Student:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;curious about green buildings.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Mechanical Engineer:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;I sketch machines but want to learn 3D modeling.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Film Enthusiast:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;I make short reels in my hostel room.&rdquo;</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-mulearn-gray-50 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-mulearn-blackish">The Impact</h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Students realize that their journey begins not with skills, but with <span className="font-semibold text-mulearn-blackish">identity and courage to show up</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-full max-w-md lg:max-w-2xl">
              <MuImage
                src="/assets/levelstructure/hello.svg"
                alt="Hello - Three People Introduction"
                width={700}
                height={620}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

 
    </section>
  );
}