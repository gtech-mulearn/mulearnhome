"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/layouts";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function Story() {
  const embedContainerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);

  useEffect(() => {
    const node = embedContainerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full pt-12">
      <MotionSection
        className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-center max-w-140">
              Understand μLearn with a <span className="text-mulearn">Story</span>
            </h2>
            <p className="font-normal my-4 mb-8 max-w-[800px] text-lg sm:text-xl text-justify text-mulearn-gray-600">
              Meet Aami, an eager learner hungry for growth! Join her voyage through the captivating
              µVerse, where she seizes opportunities, builds learning circles, and immerses herself
              in events, emerging industry-ready with newfound skills and confidence.
            </p>
          </MotionDiv>
        </div>

        <div ref={embedContainerRef} className="w-full h-full aspect-video">
          <MotionDiv
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full h-full"
          >
            {shouldLoadEmbed ? (
              <YouTubeEmbed
                videoid="M9serw-CLU0"
                style="border-none"
                playlabel="true"
                params="disablekb=1&enablejsapi=1&playsinline=1"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-mulearn-gray-100" />
            )}
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
}
