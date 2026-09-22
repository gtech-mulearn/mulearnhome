import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Badge } from "@/components/ui/badge";
import type { GalleryEvent } from "../types/gallery.types";

interface GalleryEventCardProps {
  event: GalleryEvent;
  variant: "grid" | "list";
}

export function GalleryEventCard({ event, variant }: GalleryEventCardProps) {
  const images = event.media.filter((m) => m.type === "image");
  const videos = event.media.filter((m) => m.type === "video");

  if (variant === "list") {
    return (
      <Link href={`/gallery/${event.slug}`}>
        <div className="group flex items-center gap-4 bg-mulearn-whitish rounded-2xl border border-border/50 hover:border-mulearn-trusty-blue hover:shadow-md transition-all duration-300 p-4">
          {event.coverImage ? (
            <MuImage
              src={event.coverImage}
              alt={event.name}
              width={320}
              height={240}
              className="w-32 h-24 rounded-xl object-cover shrink-0"
            />
          ) : (
            <div className="w-32 h-24 rounded-xl bg-mulearn shrink-0" />
          )}

          <div className="flex-1 min-w-0">
            <h3 className="line-clamp-1">{event.name}</h3>
            <p className="text-sm text-mulearn-gray-600">
              {event.date || event.month} · {event.location}
            </p>
            <Badge className="bg-mulearn-greyish/20 text-mulearn-trusty-blue mt-1">
              {images.length} photos · {videos.length} videos
            </Badge>
          </div>

          <ArrowRight className="w-5 h-5 text-mulearn-greyish shrink-0 group-hover:text-mulearn-trusty-blue transition-colors" />
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/gallery/${event.slug}`}>
      <MotionDiv className="group relative bg-mulearn-whitish rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-mulearn-trusty-blue flex flex-col">
        {event.coverImage ? (
          <MuImage
            src={event.coverImage}
            alt={event.name}
            width={600}
            height={400}
            className="w-full aspect-video object-cover"
          />
        ) : (
          <div className="w-full aspect-video bg-mulearn" />
        )}

        <div className="p-4 flex flex-col gap-2">
          <h3 className="line-clamp-2">{event.name}</h3>

          <div className="flex items-center gap-2 text-sm text-mulearn-gray-600">
            <Calendar className="w-4 h-4" />
            {event.date || event.month}
          </div>

          <div className="flex items-center gap-2 text-sm text-mulearn-gray-600">
            <MapPin className="w-4 h-4" />
            {event.location}
          </div>

          <Badge className="bg-mulearn-greyish/20 text-mulearn-trusty-blue w-fit mt-1">
            {images.length} photos · {videos.length} videos
          </Badge>
        </div>
      </MotionDiv>
    </Link>
  );
}
