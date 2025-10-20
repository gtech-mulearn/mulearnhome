"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import MuImage from "@/components/MuImage";
import { VideoTestimonial } from "@/lib/types";

interface VideoPlayerProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
}

export default function VideoPlayer({ testimonial, isActive }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset and pause when video becomes inactive
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  // Reset playback state when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [testimonial.id]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing video:", error);
          setIsPlaying(false);
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  // Sync state with actual video playback state
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-gray-900"
    >
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play/Pause Button Overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 cursor-pointer"
            aria-label="Play video"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 ml-1" fill="currentColor" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* User Info Card - Bottom Right */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="flex items-center gap-2 p-2 sm:gap-3 sm:p-4">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                <MuImage
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-gray-900 truncate">
                  {testimonial.name}
                </h3>
                {/* Hide organization and role on mobile */}
                <p className="hidden sm:block text-sm text-gray-700 font-medium truncate">
                  {testimonial.organization}
                </p>
                <p className="hidden sm:block text-xs text-gray-600 truncate">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Buttons (when playing) */}
      {isPlaying && (
        <div className="absolute top-4 right-4 flex gap-2">
          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-300"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-gray-900" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-900" />
            )}
          </button>

          {/* Pause Button */}
          <button
            onClick={togglePlay}
            className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-300"
            aria-label="Pause video"
          >
            <Pause className="w-5 h-5 text-gray-900" fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  );
}
