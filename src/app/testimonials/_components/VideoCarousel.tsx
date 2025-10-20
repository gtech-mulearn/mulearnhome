"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";
import { VideoTestimonial } from "@/lib/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VideoCarousel({ testimonials }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailSwiperRef = useRef<SwiperType | null>(null);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      if (thumbnailSwiperRef.current) {
        thumbnailSwiperRef.current.slideTo(newIndex);
      }
    }
  };

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      if (thumbnailSwiperRef.current) {
        thumbnailSwiperRef.current.slideTo(newIndex);
      }
    }
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    // Scroll thumbnail carousel to bring clicked thumbnail into view
    if (thumbnailSwiperRef.current) {
      thumbnailSwiperRef.current.slideTo(index);
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {/* Main Video Player with Navigation Arrows */}
      <div className="relative mb-6 sm:mb-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={activeIndex === 0}
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={activeIndex === testimonials.length - 1}
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
        </button>

        {/* Video Player */}
        <VideoPlayer
          testimonial={testimonials[activeIndex]}
          isActive={true}
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="w-full py-2">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          onSwiper={(swiper) => {
            thumbnailSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="testimonial-thumbnail-swiper !overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="!overflow-visible">
              <VideoThumbnail
                testimonial={testimonial}
                isActive={index === activeIndex}
                onClick={() => handleThumbnailClick(index)}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
