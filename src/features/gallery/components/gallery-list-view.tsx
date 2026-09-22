import { MotionDiv } from "@/components/layouts";
import type { GalleryEvent } from "../types/gallery.types";
import { GalleryEventCard } from "./gallery-event-card";

interface GalleryListViewProps {
  events: GalleryEvent[];
}

export function GalleryListView({ events }: GalleryListViewProps) {
  return (
    <div id="gallery-grid" className="flex flex-col gap-4">
      {events.map((event, i) => (
        <MotionDiv
          key={event.slug}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <GalleryEventCard event={event} variant="list" />
        </MotionDiv>
      ))}
    </div>
  );
}
