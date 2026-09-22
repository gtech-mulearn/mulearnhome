import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/layouts";
import { galleryData } from "../data/impact-gallery.data";
import { MediaCard } from "./media-card";

interface GalleryGridProps {
  activeFilter: string;
}

export function GalleryGrid({ activeFilter }: GalleryGridProps) {
  const filteredItems =
    activeFilter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

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
  };

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      <AnimatePresence mode="popLayout">
        {filteredItems.map((item, index) => (
          <MotionDiv
            key={item.id}
            variants={itemVariants}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <MediaCard item={item} index={index} />
          </MotionDiv>
        ))}
      </AnimatePresence>

      {filteredItems.length === 0 && (
        <div className="col-span-full text-center py-24">
          <p className="text-mulearn-gray-600 text-xl font-medium">
            No stories found for this category yet.
          </p>
        </div>
      )}
    </MotionDiv>
  );
}
