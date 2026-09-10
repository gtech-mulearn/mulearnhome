"use client";

import Link from "next/link";
import { MotionDiv, MotionH1, MotionP } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { useRedirectToApp } from "@/lib/utils";
import { useLandingStats } from "@/services/useLandingStats";
import TestimonialStats from "./_components/TestimonialStats";
import TextTestimonialsGrid from "./_components/TextTestimonialsGrid";
import VideoSection from "./_components/VideoSection";

export default function TestimonialsPage() {
  const videoTestimonialData = testimonials.video;
  const textTestimonialData = testimonials.text;
  const redirect = useRedirectToApp();
  const { counts, hasError } = useLandingStats();

  return (
    <div className="min-h-screen bg-mulearn-whitish relative overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        <div className="hidden md:block absolute top-10 -left-50 w-200 pointer-events-none select-none">
          <MuImage
            src="/assets/impact-gallery/mu.svg"
            alt="μLearn Logo Backdrop"
            width={600}
            height={600}
            className="w-full h-full"
            preload
          />
        </div>

        <MotionDiv
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MotionH1
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-center max-w-5xl mx-auto mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Voices of{" "}
            <span className="text-mulearn relative inline-block">
              Impact
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-mulearn/20 rounded-full" />
            </span>
          </MotionH1>

          <MotionP
            className="text-lg sm:text-xl text-mulearn-gray-600 max-w-3xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Discover how μLearn is empowering thousands to learn, build, and lead through a global
            peer-to-peer ecosystem.
          </MotionP>

          <TestimonialStats counts={counts} hasError={hasError} />
        </MotionDiv>
      </div>

      {/* Video Section */}
      <section id="video-testimonials" className="py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-mulearn-blackish mb-6 tracking-tight">
            Video Stories
          </h2>
          <div className="w-20 h-1.5 bg-mulearn mx-auto rounded-full" />
        </div>
        <VideoSection testimonials={videoTestimonialData} />
      </section>

      {/* Text Testimonials Section */}
      <section
        id="community-feedback"
        className="py-24 sm:py-32 relative z-10 bg-mulearn-whitish/30"
      >
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-mulearn-blackish mb-6 tracking-tight">
            Community Echoes
          </h2>
          <p className="text-xl text-mulearn-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Raw, authentic experiences from our diverse ecosystem
          </p>
          <div className="w-20 h-1.5 bg-mulearn mx-auto rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <TextTestimonialsGrid testimonials={textTestimonialData} />
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-24 sm:py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            className="bg-mulearn rounded-[3.5rem] p-12 sm:p-24 text-center text-mulearn-whitish shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8 relative text-mulearn-whitish z-10">
              Ready to write your story?
            </h2>
            <p className="text-xl opacity-90 mb-16 max-w-3xl mx-auto leading-relaxed font-medium relative z-10">
              Join the movement that&apos;s redefining education. Whether you&apos;re a student,
              mentor, or industry partner, your impact starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
              <Button
                variant="inverted"
                className="w-full sm:w-auto px-12 py-7 text-lg font-bold"
                onClick={() => redirect("/")}
              >
                Join the Community
              </Button>
              <Link
                href="https://airtable.com/appzJZWzMWidJ0KHo/pagqcMn08HSvFjj7R/form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="inverted"
                  className="w-full sm:w-auto px-12 py-7 text-lg font-bold"
                >
                  Share Your Journey
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
