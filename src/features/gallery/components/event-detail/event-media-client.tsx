"use client";

import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { MuImage } from "@/components/layouts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { GalleryEvent, GalleryMediaItem } from "../../types/gallery.types";
import { MediaLightbox } from "./media-lightbox";
import { VideoPlayer } from "./video-player";

interface EventMediaClientProps {
  event: GalleryEvent;
}

export function EventMediaClient({ event }: EventMediaClientProps) {
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = useMemo(
    () =>
      event.media
        .filter((item): item is GalleryMediaItem => item.type === "image")
        .map((item) => ({ ...item, alt: item.alt || event.name })),
    [event.media, event.name],
  );

  const videos = useMemo(
    () => event.media.filter((item): item is GalleryMediaItem => item.type === "video"),
    [event.media],
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="px-6 py-8 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Button variant="link" onClick={() => router.back()} className="mb-6 text-mulearn">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="mb-8">
          <h2 className="mb-3">{event.name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-mulearn-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {event.date || event.month}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            <Badge className="bg-mulearn-greyish/20 text-mulearn-trusty-blue">
              {event.media.length} media items
            </Badge>
          </div>

          {event.description && <p className="text-mulearn-gray-600">{event.description}</p>}
        </div>

        <div className="mb-10">
          <h3 className="mb-4">Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((item, i) => (
              <button
                key={`${item.src}-${i}`}
                type="button"
                className="cursor-pointer"
                onClick={() => openLightbox(i)}
                aria-label={`Open photo ${i + 1}`}
              >
                <MuImage
                  src={item.src}
                  alt={item.alt || event.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full rounded-xl aspect-square"
                />
              </button>
            ))}
          </div>
        </div>

        {videos.length > 0 && (
          <div>
            <h3 className="mb-4">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((item, i) => (
                <VideoPlayer key={`${item.src}-${i}`} item={item} />
              ))}
            </div>
          </div>
        )}

        <MediaLightbox
          images={images}
          open={lightboxOpen}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
