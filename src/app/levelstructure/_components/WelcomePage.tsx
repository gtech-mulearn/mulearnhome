"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Level1Section from './Level1Section';
import Level2Section from './Level2Section';
import Level3Section from './Level3Section';
import Level4Section from './Level4Section';
import Level5Section from './Level5Section';
import Level6Section from './Level6Section';
import Level7Section from './Level7Section';
import FloatingSpaceAssets from './FloatingSpaceAssets';

export default function WelcomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-mulearn-whitish relative z-50 overflow-x-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Floating Space Assets - Mobile Only */}
      <FloatingSpaceAssets />
      
      {/* Level 1 Section - Direct Entry */}
      <Level1Section />
      
      {/* Level 2 Section */}
      <Level2Section />

      {/* Level 3 Section - Tool Mastery */}
      <Level3Section />

      {/* Level 4 Section - Interest Groups */}
      <Level4Section />

      {/* Level 5 Section - Global Arena */}
      <Level5Section />

      {/* Level 6 Section - Build & Ship */}
      <Level6Section />

      {/* Level 7 Section - The μVerse */}
      <Level7Section />
    </motion.div>
  );
}