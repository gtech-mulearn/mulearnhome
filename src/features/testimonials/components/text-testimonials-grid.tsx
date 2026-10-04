"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { MotionDiv } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import type { TextTestimonial } from "../types";
import { TextTestimonialCard } from "./text-testimonial-card";

export type TextFilterType = "all" | "academia" | "industry" | "government" | "civic-society";

interface TextTestimonialsGridProps {
  testimonials: TextTestimonial[];
  activeFilter?: TextFilterType;
  onFilterChange?: (filter: TextFilterType) => void;
}

export function TextTestimonialsGrid({
  testimonials,
  activeFilter,
  onFilterChange,
}: TextTestimonialsGridProps) {
  const [internalFilter, setInternalFilter] = useState<TextFilterType>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filter = activeFilter ?? internalFilter;
  const setFilter = onFilterChange ?? setInternalFilter;

  const filteredTestimonials =
    filter === "all" ? testimonials : testimonials.filter((t) => t.type === filter);

  const visibleTestimonials = filteredTestimonials.slice(0, visibleCount);
  const hasMore = filteredTestimonials.length > visibleCount;

  const filterOptions: { value: TextFilterType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "academia", label: "Academia" },
    { value: "industry", label: "Industry" },
    { value: "government", label: "Government" },
    { value: "civic-society", label: "Civic Society" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              onClick={() => {
                setFilter(option.value);
                setVisibleCount(6);
              }}
              className="px-8 py-2 rounded-full font-bold transition-all duration-300 border-2"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {visibleTestimonials.map((testimonial) => (
            <MotionDiv
              key={testimonial.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TextTestimonialCard testimonial={testimonial} />
            </MotionDiv>
          ))}
        </AnimatePresence>

        {filteredTestimonials.length === 0 && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-20"
          >
            <p className="text-mulearn-gray-600 text-lg">No testimonials found in this category.</p>
          </MotionDiv>
        )}
      </MotionDiv>

      {(hasMore || visibleCount > 6) && (
        <div className="flex justify-center items-center gap-4 mt-16">
          {hasMore && (
            <Button
              variant="default"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="font-semibold"
            >
              View More Stories
            </Button>
          )}
          {visibleCount > 6 && (
            <Button
              variant="default"
              onClick={() => {
                setVisibleCount(6);
                document
                  .getElementById("community-feedback")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold"
            >
              View Less
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
