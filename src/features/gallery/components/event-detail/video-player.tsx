"use client";

import type { GalleryMediaItem } from "../../types/gallery.types";

interface VideoPlayerProps {
  item: GalleryMediaItem;
}

const EMPTY_CAPTION_TRACK = "data:text/vtt;charset=utf-8,WEBVTT%0A%0A";

function extractYouTubeId(src: string): string | null {
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (url.hostname.includes("youtube.com")) {
      return (
        url.searchParams.get("v") ||
        url.pathname.split("/embed/")[1]?.split("/")[0] ||
        url.pathname.split("/shorts/")[1]?.split("/")[0] ||
        null
      );
    }
  } catch (_error) {
    return null;
  }

  return null;
}

function extractVimeoId(src: string): string | null {
  try {
    const url = new URL(src);
    if (!url.hostname.includes("vimeo.com")) {
      return null;
    }

    const segments = url.pathname.split("/").filter(Boolean);
    const idSegment = segments.find((segment) => /^\d+$/.test(segment));
    return idSegment || null;
  } catch (_error) {
    return null;
  }
}

export function VideoPlayer({ item }: VideoPlayerProps) {
  const isYouTube = item.src.includes("youtube.com") || item.src.includes("youtu.be");
  const isVimeo = item.src.includes("vimeo.com");

  const youtubeId = isYouTube ? extractYouTubeId(item.src) : null;
  const vimeoId = isVimeo ? extractVimeoId(item.src) : null;

  return (
    <div>
      <div className="rounded-2xl overflow-hidden aspect-video bg-mulearn-blackish">
        {youtubeId ? (
          <iframe
            title={item.caption || "YouTube video"}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : vimeoId ? (
          <iframe
            title={item.caption || "Vimeo video"}
            src={`https://player.vimeo.com/video/${vimeoId}`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video controls poster={item.thumbnail} className="w-full h-full object-cover">
            <source src={item.src} />
            <track kind="captions" src={EMPTY_CAPTION_TRACK} srcLang="en" label="English" />
          </video>
        )}
      </div>

      {item.caption && <p className="text-sm text-mulearn-gray-600 mt-2">{item.caption}</p>}
    </div>
  );
}
