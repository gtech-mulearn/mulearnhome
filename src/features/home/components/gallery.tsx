"use client";

import type { Variants } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { galleryEvents } from "@/features/gallery";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const bentoLayouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

const allImages = galleryEvents.flatMap((event) =>
  event.media
    .filter((m) => m.type === "image")
    .map((m) => ({
      src: m.src,
      alt: m.alt || event.name,
    })),
);

const shuffledImages = [...allImages];
let seed = 12345;
function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
for (let i = shuffledImages.length - 1; i > 0; i--) {
  const j = Math.floor(random() * (i + 1));
  [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
}

const boxImages = Array.from({ length: 6 }, () => [] as typeof allImages);
shuffledImages.forEach((img, i) => {
  boxImages[i % 6].push(img);
});

const RotatingImage = ({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const initialDelay = Math.random() * 3000;

    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [images.length]);

  if (!images?.length) return null;

  return (
    <MotionDiv
      variants={fadeInUp}
      className={`relative overflow-hidden group rounded-3xl ${className}`}
    >
      <AnimatePresence>
        <MotionDiv
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {images[currentIndex] && (
            <MuImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          )}
        </MotionDiv>
      </AnimatePresence>
    </MotionDiv>
  );
};

export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20 mb-10">
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Our <span className="text-mulearn">Moments</span>
          </h2>
          <p className="font-medium text-lg text-mulearn-gray-600 max-w-3xl mx-auto">
            Glimpses from our most impactful events, hackathons, and community meetups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {bentoLayouts.map((layout, index) => (
            <RotatingImage key={index} images={boxImages[index] || []} className={layout} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery">
            <Button variant={"default"} className="font-semibold">
              View All Moments
            </Button>
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
