"use client";
import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Star } from 'lucide-react';
import { VideoTestimonial } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  isActive: boolean;
}

export default function VideoTestimonialCard({ 
  testimonial, 
  isActive 
}: VideoTestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      console.error('Error playing video:', error);
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Star rating component
  const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-300 text-gray-300"
          )}
        />
      ))}
    </div>
  );

  return (
    <div className={cn(
      "group relative bg-mulearn-whitish rounded-2xl border border-mulearn-gray-200 shadow-lg transition-all duration-500 overflow-hidden w-full max-w-6xl mx-auto",
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
    )}>
      {/* Compact Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
        {/* Left Side - Video */}
        <div className="relative bg-mulearn-gray-900 p-6">
          {/* Video Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-mulearn-gray-800">
            {/* Thumbnail Fallback */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.thumbnailUrl})` }}
              >
                <div className="absolute inset-0 bg-mulearn-blackish/40" />
              </div>
            )}
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              preload="metadata"
              loop
              muted={isMuted}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedData={() => setIsLoading(false)}
            >
              <source src={testimonial.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-mulearn-blackish/80 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-mulearn-whitish border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              onClick={togglePlay}
              className={cn(
                "absolute inset-0 m-auto w-16 h-16 rounded-full bg-mulearn-whitish/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-mulearn-whitish border-0",
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100",
                isLoading && "opacity-0"
              )}
              disabled={isLoading}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-mulearn-blackish" />
              ) : (
                <Play className="w-6 h-6 text-mulearn-blackish ml-1" />
              )}
            </Button>

            {/* Video Controls */}
            <div className={cn(
              "absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300",
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            )}>
              <Button
                variant="ghost"
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-mulearn-blackish/70 text-mulearn-whitish hover:bg-mulearn-blackish/90 backdrop-blur-sm border-0 flex items-center justify-center p-0"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </Button>
            </div>

            
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center p-8">
          {/* Author Info */}
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold text-mulearn-blackish mb-2">
              {testimonial.name}
            </h3>
            <p className="text-lg text-mulearn-gray-600 font-sans mb-1">
              {testimonial.role}
            </p>
            {testimonial.company && (
              <p className="text-base text-mulearn-gray-500 font-sans">
                {testimonial.company}
              </p>
            )}
          </div>

          {/* Testimonial Text */}
          <blockquote className="mb-6">
            <p className="text-lg font-sans font-light text-mulearn-gray-700 leading-relaxed">
              {testimonial.quote}
            </p>
          </blockquote>

          {/* Star Rating and Label */}
          <div className="flex items-center gap-3">
            <StarRating rating={5} />
            <span className="text-base font-sans font-semibold text-mulearn-gray-700">
              {testimonial.type === 'learner' ? 'Learning Excellence' : 
               testimonial.type === 'mentor' ? 'Mentorship Excellence' :
               testimonial.type === 'partner' ? 'Partnership Success' : 'Community Impact'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}