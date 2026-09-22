import { MotionDiv } from "@/components/layouts";
import type { GalleryEvent } from "../types/gallery.types";
import { GalleryEventCard } from "./gallery-event-card";

interface GalleryGridProps {
  events: GalleryEvent[];
}

export function GalleryGrid({ events }: GalleryGridProps) {
  return (
    <div
      id="gallery-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
    >
      {events.map((event, i) => (
        <MotionDiv
          key={event.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="h-full"
        >
          <GalleryEventCard event={event} variant="grid" />
        </MotionDiv>
      ))}
    </div>
  );
}
