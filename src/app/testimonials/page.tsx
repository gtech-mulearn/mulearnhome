"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoCarousel from "./_components/VideoCarousel";
import TextTestimonialsGrid from "./_components/TextTestimonialsGrid";
import { testimonials } from "@/data/data";
import { VideoTestimonial, TextTestimonial } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Users, Star, TrendingUp, MessageCircle, Video } from "lucide-react";

export default function TestimonialsPage() {
  const [videoTestimonialData, setVideoTestimonialData] = useState<VideoTestimonial[]>([]);
  const [textTestimonialData, setTextTestimonialData] = useState<TextTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setVideoTestimonialData(testimonials.video);
        setTextTestimonialData(testimonials.text);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const stats = [
    { icon: Users, number: "50K+", label: "Active Learners" },
    { icon: Star, number: "500+", label: "Expert Mentors" },
    { icon: TrendingUp, number: "100+", label: "Partner Companies" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mulearn-whitish via-mulearn-gray-50 to-mulearn-whitish">
     {/* Enhanced Header Section - Clean white background */}
<div className="relative overflow-hidden bg-mulearn-whitish">
  <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-center max-w-6xl mx-auto mb-6 leading-normal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Voices of{" "}
        <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
          Impact
        </span>
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-mulearn-gray-600 font-sans max-w-4xl mx-auto leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Discover authentic stories and feedback from our community members who are shaping the future of learning
      </motion.p>
      
      {/* Stats */}
      <motion.div 
        className="flex justify-center items-center gap-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-xl mx-auto mb-3">
                <Icon className="w-6 h-6 text-mulearn-whitish" />
              </div>
              <div className="font-display text-2xl font-bold text-mulearn-blackish">
                {stat.number}
              </div>
              <div className="text-sm text-mulearn-gray-500 font-sans uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  </div>
</div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-10 bg-mulearn-whitish/80 backdrop-blur-sm border-b border-mulearn-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex bg-mulearn-gray-100 rounded-2xl p-1 my-6">
              <button
                onClick={() => setActiveTab('video')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium transition-all duration-300 ${
                  activeTab === 'video'
                    ? 'bg-mulearn-whitish text-mulearn-trusty-blue shadow-sm'
                    : 'text-mulearn-gray-600 hover:text-mulearn-trusty-blue'
                }`}
              >
                <Video className="w-5 h-5" />
                Video Testimonials
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium transition-all duration-300 ${
                  activeTab === 'text'
                    ? 'bg-mulearn-whitish text-mulearn-trusty-blue shadow-sm'
                    : 'text-mulearn-gray-600 hover:text-mulearn-trusty-blue'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                Community Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-20 h-20 mb-6"
            >
              <div className="absolute top-0 left-0 w-full h-full border-4 border-mulearn-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-mulearn-trusty-blue border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
            <motion.p 
              className="text-xl text-mulearn-gray-600 font-medium font-sans"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Loading inspiring stories...
            </motion.p>
          </div>
        ) : (
          <>
            {/* Video Testimonials */}
            {activeTab === 'video' && videoTestimonialData.length > 0 && (
              <VideoCarousel testimonials={videoTestimonialData} />
            )}

            {/* Text Testimonials */}
            {activeTab === 'text' && textTestimonialData.length > 0 && (
              <div className="max-w-7xl mx-auto px-6">
                <TextTestimonialsGrid testimonials={textTestimonialData} />
              </div>
            )}

            {/* Empty States */}
            {activeTab === 'video' && videoTestimonialData.length === 0 && (
              <div className="max-w-2xl mx-auto px-6 text-center py-32">
                <div className="w-20 h-20 bg-mulearn-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Video className="w-10 h-10 text-mulearn-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-mulearn-gray-700 mb-3 font-display">
                  No Video Testimonials Available
                </h3>
                <p className="text-mulearn-gray-500 font-sans text-lg">
                  Check back soon for video testimonials from our community members.
                </p>
              </div>
            )}

            {activeTab === 'text' && textTestimonialData.length === 0 && (
              <div className="max-w-2xl mx-auto px-6 text-center py-32">
                <div className="w-20 h-20 bg-mulearn-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-mulearn-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-mulearn-gray-700 mb-3 font-display">
                  No Text Testimonials Available
                </h3>
                <p className="text-mulearn-gray-500 font-sans text-lg">
                  Check back soon for community feedback and stories.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Simple CTA Section - No background, just text and buttons */}
      <div className="py-20 mb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-mulearn-blackish mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-mulearn-gray-600 mb-10 font-sans max-w-3xl mx-auto leading-relaxed">
              Join thousands of learners, mentors, and partners who are transforming education through collaborative learning
            </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <Button 
    variant="mulearn" 
    className="bg-mulearn-whitish text-mulearn-trusty-blue border-2 border-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
  >
    Join Our Community
  </Button>
  <Button 
    variant="mulearn" 
    className="bg-mulearn-whitish text-mulearn-trusty-blue border-2 border-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
  >
    Share Your Experience
  </Button>
</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}