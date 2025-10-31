"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MuImage from '@/components/MuImage';

export default function Level6Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative bg-mulearn-whitish flex items-center py-20"
      id="level-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                Build & <span className="text-mulearn-duke-purple">Ship</span>
              </h2>
              <p className="text-xl text-mulearn-gray-600">
                Proof-of-Impact & Real Users
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-mulearn-blackish leading-relaxed">
                <span className="font-semibold text-mulearn-duke-purple">Every hero must build their sword.</span> Here, they don&apos;t just make prototypes. They ship to real users.
              </p>

              <div className="space-y-3 pt-4">
                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> AI Team:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Mental wellness chatbot → deployed in colleges.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Web Dev Team:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Alumni-network portal → adopted by campus.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Civil + Mechanical:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Water filter prototype → tested with NGOs.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Film + Comics:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Gamified storytelling series → shared in schools.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold">Project Managers:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;End-to-end pipeline with 3000+ peers.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-trusty-blue">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Biomedical Team:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;Low-cost prosthetic → tested in hospitals.&rdquo;</span>
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-mulearn-duke-purple">
                  <p className="text-sm text-mulearn-blackish">
                    <span className="font-semibold"> Game Developer:</span>{' '}
                    <span className="text-mulearn-gray-600">&ldquo;First game launched with active user base.&rdquo;</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mulearn-gray-50 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-mulearn-blackish">The Impact</h3>
              <p className="text-base text-mulearn-gray-600 leading-relaxed">
                <span className="font-semibold text-mulearn-blackish">Shipping builds accountability</span>, feedback flow, and real-world value. Proof-of-work matures into proof-of-impact.
              </p>
              <p className="text-sm text-mulearn-gray-600 leading-relaxed">
                Students grow into <span className="font-semibold text-mulearn-blackish">builders & interdisciplinary collaborators</span> who create things that others use.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              <MuImage
                src="/assets/levelstructure/connect.svg"
                alt="Build & Ship - Connect"
                width={384}
                height={384}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}