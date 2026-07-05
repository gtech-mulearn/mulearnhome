"use client";

import { Play } from "lucide-react";
import type * as React from "react";
import { useState } from "react";
import MuImage from "@/components/MuImage";
import { cn } from "@/lib/utils";

interface VideoFacadeProps {
  videoId: string;
  title: string;
  /** Container styling (aspect ratio, radius, etc.). */
  className?: string;
  /** Play-button styling — background + icon color via `text-*`. */
  playClassName?: string;
  /** Overlays rendered above the thumbnail (badges, links). */
  children?: React.ReactNode;
}

/**
 * Lightweight YouTube facade: renders the thumbnail + a play button and only
 * loads the iframe on click. Saves the heavy embed on initial load while
 * preserving inline playback. Reused for every video across the site.
 */
export function VideoFacade({
  videoId,
  title,
  className,
  playClassName,
  children,
}: VideoFacadeProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {isActive ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <MuImage
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-mulearn-blackish/10 transition-colors group-hover:bg-mulearn-blackish/20" />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110",
              playClassName ?? "bg-mulearn text-mulearn-whitish",
            )}
          >
            <Play className="size-7 translate-x-0.5" fill="currentColor" />
          </span>
        </button>
      )}
      {children}
    </div>
  );
}
