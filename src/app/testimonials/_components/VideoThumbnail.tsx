"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import MuImage from "@/components/MuImage";
import { VideoTestimonial } from "@/lib/types";

interface VideoThumbnailProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export default function VideoThumbnail({
  testimonial,
  isActive,
  onClick,
  index,
}: VideoThumbnailProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={onClick}
      className={`relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive
          ? "ring-2 ring-mulearn-trusty-blue shadow-lg scale-105"
          : "hover:scale-105 hover:shadow-md"
      }`}
      aria-label={`Play testimonial from ${testimonial.name}`}
    >
      <div className="relative w-full h-full">
        <MuImage
          src={testimonial.thumbnailUrl}
          alt={`${testimonial.name} testimonial`}
          width={300}
          height={169}
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-md">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
