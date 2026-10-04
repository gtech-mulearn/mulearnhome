"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Carousel, type CarouselHandle, CarouselSlide } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { VideoTestimonial } from "../types";

interface VideoSectionProps {
  testimonials: VideoTestimonial[];
}

export function VideoSection({ testimonials }: VideoSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<CarouselHandle>(null);
  const activeVideo = testimonials[activeIndex];

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    carouselRef.current?.scrollTo(index);
  };

  const handlePrev = () => {
    goToIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    goToIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  if (!testimonials.length) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 relative group">
      {/* Main Player Container */}
      <div className="relative">
        <MotionDiv
          className="relative aspect-square md:aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-mulearn-whitish/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Force full expansion of the embed */}
          <div className="absolute inset-0 w-full h-full bg-mulearn-blackish">
            <YouTubeEmbed
              key={activeVideo.videoUrl}
              videoid={activeVideo.videoUrl}
              params="rel=0&modestbranding=1&playsinline=1&autoplay=0"
              style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; border: none; max-width: 100% !important; object-fit: contain;"
            />
          </div>

          {/* Overlay Info - Adjusted for better visibility and design matching */}
          <div className="hidden md:block absolute bottom-0 left-0 w-full p-8 sm:p-12 bg-gradient-to-t from-mulearn-blackish/90 via-mulearn-blackish/40 to-transparent pointer-events-none">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-mulearn-whitish font-bold text-base">{activeVideo.name}</p>
                  <p className="text-mulearn-whitish text-sm">
                    {activeVideo.role} {activeVideo.company && `• ${activeVideo.company}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Navigation Arrows */}
        <Button
          onClick={handlePrev}
          variant="default"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 opacity-100 -translate-x-4"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          onClick={handleNext}
          variant="default"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 opacity-100 translate-x-4"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      <div className="mt-16">
        <Carousel
          ref={carouselRef}
          onSlideChange={setActiveIndex}
          options={{ align: "start" }}
          trackClassName="-ml-6"
          className="pb-16"
        >
          {testimonials.map((video, index) => (
            <CarouselSlide
              key={video.id}
              className="pl-6 flex-[0_0_83.333%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
            >
              <button
                type="button"
                onClick={() => goToIndex(index)}
                className={cn(
                  "relative w-full rounded-3xl overflow-hidden aspect-video group transition-all duration-500 border-4",
                  activeIndex === index ? "border-mulearn scale-105 z-10" : "hover:scale-105",
                )}
              >
                <MuImage
                  src={`https://i.ytimg.com/vi_webp/${video.videoUrl}/hqdefault.webp`}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                />
                <div className="absolute inset-0 bg-mulearn-blackish/50 group-hover:bg-mulearn-blackish/30 transition-all flex items-center justify-center">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                      activeIndex === index
                        ? "bg-mulearn text-mulearn-whitish scale-110"
                        : "bg-mulearn-whitish/30 text-mulearn-whitish group-hover:bg-mulearn group-hover:scale-120",
                    )}
                  >
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </button>
              <div className="mt-4 px-2">
                <p
                  className={cn(
                    "text-sm font-bold transition-colors duration-500",
                    activeIndex === index ? "text-mulearn" : "text-mulearn-gray-600",
                  )}
                >
                  {video.name}
                </p>
                <p className="text-xs text-mulearn-gray-600/60 font-medium">{video.role}</p>
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
