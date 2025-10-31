"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import VideoTestimonialCard from "./VideoTestimonialcard";
import { VideoTestimonial } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
}

export default function VideoCarousel({ testimonials }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null); // Fixed: Added initial value

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextTestimonial]);

  // Fixed variants with proper Framer Motion types
  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
      scale: 0.9
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: {
      x: -1000,
      opacity: 0,
      scale: 0.9
    }
  };

  // Fixed transition configuration
  const transition = {
    x: { type: "spring" as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 },
    scale: { duration: 0.4 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-w-6xl mx-auto px-6 py-8"
    >
      {/* Main Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30">
          <Button
            variant="ghost"
            onClick={prevTestimonial}
            className="w-9 h-9 rounded-full bg-white shadow-md hover:bg-mulearn-trusty-blue hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Arrow */}
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30">
          <Button
            variant="ghost"
            onClick={nextTestimonial}
            className="w-9 h-9 rounded-full bg-white shadow-md hover:bg-mulearn-trusty-blue hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Main Slider */}
        <div className="relative h-auto overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition} // Fixed: Moved transition outside variants
              className="w-full"
            >
              <div className="relative">
                {/* Autoplay Toggle - Inside the card */}
                <div
                  className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-2 text-sm text-mulearn-gray-700 cursor-pointer hover:bg-white transition-all duration-300 rounded-lg shadow-sm"
                  onClick={() => setIsAutoPlaying((s) => !s)}
                  role="button"
                  aria-pressed={isAutoPlaying}
                  aria-label="Toggle autoplay"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4 text-mulearn-trusty-blue" />
                  ) : (
                    <Play className="w-4 h-4 text-mulearn-trusty-blue" />
                  )}
                  <span className="font-medium">Autoplay</span>
                </div>

                <VideoTestimonialCard
                  testimonial={testimonials[activeIndex]}
                  isActive={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Simple Counter */}
        <div className="flex justify-center items-center mt-6">
          <div className="text-mulearn-gray-600 font-sans font-medium">
            <span className="text-xl font-bold text-mulearn-blackish">{activeIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{testimonials.length}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}