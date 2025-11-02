"use client";

import { useState, useEffect, useRef } from "react";
import { testimonialsData, slideImages } from "@/data/data";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";

interface SlideImage {
  imageUrl: string;
  alt: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: SlideImage[] = slideImages;

  const scrollRef = useRef<HTMLDivElement>(null);

  const fallbackImage = cdnUrl("public/assets/team/default.webp");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 1;
    const scrollDelay = 20;

    const scrollInterval = setInterval(() => {
      const scrollContent = container.querySelector(
        ".scroll-content"
      ) as HTMLDivElement;
      if (!scrollContent) return;

      const singleSetWidth = scrollContent.scrollWidth / 2;
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }

      container.scrollLeft += scrollStep;
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-gray-50 pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-10 mx-auto w-full max-w-6xl h-[400px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)]">
          {slides.map((slide, index) => (
            <MuImage
              key={slide.alt}
              src={slide.imageUrl}
              alt={slide.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              priority={index === currentSlide}
            />
          ))}

          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-mulearn-whitish/40 hover:bg-mulearn-whitish/60 text-mulearn-blackish rounded-full p-2 transition"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-mulearn-whitish/40 hover:bg-mulearn-whitish/60 text-mulearn-blackish rounded-full p-2 transition"
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-mulearn-whitish w-8"
                    : "bg-mulearn-whitish/40 hover:bg-mulearn-whitish/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-48 bg-linear-to-r from-mulearn-whitish via-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-48 bg-linear-to-l from-mulearn-whitish via-gray-50/80 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            <div className="scroll-content flex gap-6 pb-4 px-8">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="mt-4 flex-shrink-0 w-80 relative h-[280px] rounded-[24px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(256,256,256,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_rgba(37,99,235,0.6)]"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#4A7FE8] via-[#5B8FF5] to-[#6BA5FF]" />
                  <div className="absolute inset-0 bg-linear-radial from-mulearn-whitish/10 via-transparent to-transparent" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <p className="text-sm text-mulearn-whitish leading-relaxed italic mb-4 drop-shadow-sm">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center space-x-3">
                      <MuImage
                        src={
                          testimonial.imageUrl
                            ? testimonial.imageUrl
                            : fallbackImage
                        }
                        alt={`${testimonial.name}'s profile`}
                        width={100}
                        height={100}
                        className="object-contain rounded-2xl"
                      />
                      <div>
                        <p className="font-bold text-mulearn-whitish text-base drop-shadow">
                          – {testimonial.name}
                        </p>
                        <p className="text-sm text-mulearn-whitish/90 font-medium drop-shadow">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[24px] border border-mulearn-whitish/20 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
