"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MuImage from '@/components/MuImage';

// Floating asset configuration using actual SVG assets
const floatingAssets = [
  { src: '/assets/levelstructure/rocket.svg', name: 'rocket', size: 60 },
  { src: '/assets/levelstructure/ufo.svg', name: 'ufo', size: 55 },

  { src: '/assets/levelstructure/rocket.svg', name: 'rocket2', size: 50 },
  { src: '/assets/levelstructure/ufo.svg', name: 'ufo2', size: 45 },
 
];

// Generate random animation values
const getRandomAnimation = (index: number) => {
  const duration = 15 + Math.random() * 25; // 15-40 seconds
  const delay = Math.random() * 5; // 0-5 seconds delay
  
  // Random start position
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  
  // Random end position (ensure it moves)
  const endX = Math.random() * 100;
  const endY = Math.random() * 100;
  
  return {
    initial: {
      x: `${startX}vw`,
      y: `${startY}vh`,
      opacity: 0.5 + Math.random() * 0.2,
      rotate: Math.random() * 360,
    },
    animate: {
      x: [
        `${startX}vw`,
        `${endX}vw`,
        `${startX}vw`,
      ],
      y: [
        `${startY}vh`,
        `${endY}vh`,
        `${startY}vh`,
      ],
      opacity: [
        0.5 + Math.random() * 0.2,
        0.6 + Math.random() * 0.2,
        0.5 + Math.random() * 0.2,
      ],
      rotate: [0, 360, 720],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear" as const,
    },
  };
};

export default function FloatingSpaceAssets() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render on desktop
  if (!isMobile) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {floatingAssets.map((asset, index) => {
        const animation = getRandomAnimation(index);
        
        return (
          <motion.div
            key={`${asset.name}-${index}`}
            className="absolute"
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
            style={{
              width: `${asset.size}px`,
              height: `${asset.size}px`,
              willChange: 'transform, opacity',
            }}
          >
            <MuImage
              src={asset.src}
              alt={asset.name}
              width={asset.size}
              height={asset.size}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
