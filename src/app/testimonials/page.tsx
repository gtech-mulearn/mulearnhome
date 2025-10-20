"use client";

import React, { useState, useEffect } from "react";
import VideoCarousel from "./_components/VideoCarousel";
import { getTestimonials } from "./_components/testimonialData";
import { VideoTestimonial } from "@/lib/types";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-8 sm:pb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish mb-4 sm:mb-6">
            Video Testimonials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing community members about their experiences with MuLearn
          </p>
        </div>
      </div>

      {/* Video Carousel Section */}
      <div className="pb-16 sm:pb-24">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-mulearn-trusty-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">Loading testimonials...</p>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 text-red-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Failed to Load Testimonials
              </h3>
              <p className="text-red-700 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && testimonials.length > 0 && (
          <VideoCarousel testimonials={testimonials} />
        )}

        {!loading && !error && testimonials.length === 0 && (
          <div className="max-w-2xl mx-auto px-4 text-center py-20">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Testimonials Available
            </h3>
            <p className="text-gray-500">
              Check back soon for video testimonials from our community members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
