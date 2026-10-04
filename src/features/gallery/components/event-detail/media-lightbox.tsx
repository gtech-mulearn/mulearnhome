"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GalleryMediaItem } from "../../types/gallery.types";

interface MediaLightboxProps {
  images: GalleryMediaItem[];
  open: boolean;
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

export function MediaLightbox({ images, open, index, onClose, onNavigate }: MediaLightboxProps) {
  const selected = images[index];

  const goPrevious = () => {
    if (images.length === 0) return;
    onNavigate((index - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (images.length === 0) return;
    onNavigate((index + 1) % images.length);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, onClose, open]);

  if (!selected) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent className="max-w-5xl w-[calc(100%-2rem)] p-4 md:p-6" showCloseButton>
        <div className="relative">
          <MuImage
            src={selected.src}
            alt={selected.alt || "Gallery image"}
            width={1600}
            height={1000}
            className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
          />

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={goPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-mulearn-whitish/80 hover:bg-mulearn-whitish"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-mulearn-whitish/80 hover:bg-mulearn-whitish"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-mulearn-gray-600 text-sm">
            {index + 1} / {images.length}
          </p>
        </div>

        {selected.caption && (
          <p className="text-sm text-mulearn-gray-600 mt-2">{selected.caption}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
