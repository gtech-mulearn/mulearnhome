import type { Variants } from "framer-motion";
import { MotionDiv } from "@/components/layouts";
import { GalleryClient, galleryEvents } from "@/features/gallery";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Gallery",
  description: "Explore moments from µLearn events across campuses and communities.",
  keywords: ["mulearn gallery", "event photos", "campus events gallery"],
  canonical: "https://mulearn.org/gallery",
});

export default async function GalleryPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="px-6 py-8 min-h-screen">
      <div className="max-w-[1300px] mx-auto mb-16">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full text-center px-2 sm:px-0"
        >
          <h1 className="mb-6">
            <span className="text-mulearn">µLearn</span> Gallery
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-mulearn-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore moments from µLearn events across campuses and communities, from hackathons to
            showcases and learning circles.
          </p>
        </MotionDiv>
      </div>

      <GalleryClient events={galleryEvents} />
    </section>
  );
}
