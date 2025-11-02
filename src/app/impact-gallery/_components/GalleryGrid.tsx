import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/MuFramer";
import MediaCard from "./MediaCard";
import { galleryData } from "@/data/data";
import { GalleryItem } from "@/lib/types";

interface GalleryGridProps {
  activeFilter: string;
  onItemClick: (item: GalleryItem) => void;
}

export default function GalleryGrid({
  activeFilter,
  onItemClick,
}: GalleryGridProps) {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence mode="wait">
        {filteredItems.map((item) => (
          <MotionDiv
            key={item.id}
            variants={itemVariants}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <MediaCard item={item} onClick={() => onItemClick(item)} />
          </MotionDiv>
        ))}
      </AnimatePresence>

      {filteredItems.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-mulearn-gray-600 text-lg ">
            No items found for this category.
          </p>
        </div>
      )}
    </MotionDiv>
  );
}
