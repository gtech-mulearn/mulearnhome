"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

export default function Level5Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <div className="w-full max-w-md">
              <MuImage
                src="/assets/levelstructure/character.svg"
                alt="Global Arena Character"
                width={384}
                height={384}
                className="w-48 md:w-64 lg:w-80 h-auto"
              />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                The Global <span className="text-mulearn-duke-purple">Arena</span>
              </h2>
              <p className="text-xl text-mulearn-gray-600">
                Challenges, Hackathons & Competitions
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                The student now steps onto <span className="font-semibold text-mulearn-duke-purple">global battlegrounds</span>. Facing global peers raises the bar, sharpens skills, and builds recognition.
              </p>

              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> AI Students:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Competing in Kaggle & LLM hackathons.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Project Management:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;PMI global case competitions.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Film Group:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Submitting to online festivals & comic cons.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Civil Engineers:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Sustainable city models in design challenges.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Space/Cosmos Tribe:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Writing proposals for CubeSat challenges.&rdquo;</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mulearn-gray-50 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-mulearn-blackish">The Impact</h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                Learners transform into <span className="font-semibold text-mulearn-blackish">contributors, not just participants</span>. Global competition builds real-world credibility and industry recognition.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}