

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { VideoTestimonial } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
}

export default function VideoPlayer({ testimonial, isActive }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [testimonial.id]);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await videoRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error playing video:", error);
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const getTypeBadge = (type: VideoTestimonial['type']) => {
    const typeConfig = {
      learner: { label: 'Learner', color: 'bg-mulearn-trusty-blue' },
      mentor: { label: 'Mentor', color: 'bg-mulearn-electric-purple' },
      partner: { label: 'Partner', color: 'bg-mulearn-gray-600' },
      'community-leader': { label: 'Community Leader', color: 'bg-mulearn-trusty-blue' }
    };
    
    const config = typeConfig[type];
    return (
      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-mulearn-whitish uppercase tracking-wide ${config.color}`}>
        {config.label}
      </div>
    );
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-mulearn-gray-100 border border-mulearn-gray-200">
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
        preload="metadata"
        playsInline
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-mulearn-blackish/80 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-mulearn-whitish border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Play/Pause Button Overlay */}
      <AnimatePresence>
        {!isPlaying && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-mulearn-blackish/30 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-mulearn-whitish rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-mulearn-blackish ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Type Badge */}
      <div className="absolute top-4 left-4">
        {getTypeBadge(testimonial.type)}
      </div>

      {/* Control Buttons */}
      // In VideoPlayer.tsx - remove the size prop entirely
<div className="absolute bottom-4 right-4 flex gap-2">
  {/* Mute/Unmute Button */}
  <Button
    variant="ghost"
    onClick={toggleMute}
    className="w-8 h-8 rounded-full bg-mulearn-blackish/70 text-mulearn-whitish hover:bg-mulearn-blackish/90 flex items-center justify-center p-0"
  >
    {isMuted ? (
      <VolumeX className="w-4 h-4" />
    ) : (
      <Volume2 className="w-4 h-4" />
    )}
  </Button>

  {/* Play/Pause Button (when playing) */}
  {isPlaying && (
    <Button
      variant="ghost"
      onClick={togglePlay}
      className="w-8 h-8 rounded-full bg-mulearn-blackish/70 text-mulearn-whitish hover:bg-mulearn-blackish/90 flex items-center justify-center p-0"
    >
      <Pause className="w-4 h-4" />
    </Button>
  )}
</div>

      {/* User Info Overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 bg-mulearn-whitish/90 backdrop-blur-sm rounded-xl p-4 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-mulearn-gray-200">
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-mulearn-blackish">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-mulearn-gray-600 font-sans">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}