"use client";
import { motion } from "framer-motion";
import { TextTestimonial } from "@/lib/types";
import TextTestimonialCard from "./TextTestimonialCard";

interface TextTestimonialsGridProps {
  testimonials: TextTestimonial[];
}

export default function TextTestimonialsGrid({ testimonials }: TextTestimonialsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Separate transition configurations
  const containerTransition = {
    staggerChildren: 0.1
  };

  const itemTransition = {
    duration: 0.5,
    ease: "easeOut" as const
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={containerTransition}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2 
          className="font-display text-4xl md:text-5xl font-bold text-mulearn-blackish mb-4"
          variants={itemVariants}
          transition={itemTransition}
        >
          Community Voices
        </motion.h2>
        <motion.p 
          className="text-xl text-mulearn-gray-600 font-sans max-w-3xl mx-auto"
          variants={itemVariants}
          transition={itemTransition}
        >
          Read what our community members are saying about their µLearn experience
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            transition={itemTransition}
            custom={index}
          >
            <TextTestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}