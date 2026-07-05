"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MuImage from "@/components/MuImage";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { enablers } from "@/data/enablers";

import "swiper/css";

const stories = enablers.successStories;

const getEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1);
    } else if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") ?? "";
    }

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    const start = parsedUrl.searchParams.get("t");
    const si = parsedUrl.searchParams.get("si");

    if (start) embedUrl.searchParams.set("start", start.replace("s", ""));
    if (si) embedUrl.searchParams.set("si", si);
    embedUrl.searchParams.set("autoplay", "1");

    return embedUrl.toString();
  } catch {
    return url;
  }
};

function VideoCard({ story }: { story: (typeof stories)[0] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsDialogOpen(true)}
        className="group block w-full text-left"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
          <MuImage
            src={story.thumbnail}
            alt={`${story.name} thumbnail`}
            fill
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-mulearn-blackish text-mulearn-whitish shadow-lg transition-transform group-hover:scale-110">
              <Play className="size-5 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        </div>
        <p className="mt-4 text-base font-bold text-mulearn-blackish">{story.name}</p>
        <p className="mt-1 text-sm text-mulearn-gray-600">{story.role}</p>
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[90vw] max-w-6xl px-2 pt-10">
          <DialogTitle className="sr-only">{story.name} success story</DialogTitle>
          <DialogDescription className="sr-only">
            Youtube video of {story.name} sharing their success story.
          </DialogDescription>
          <div className="mt-2 flex flex-col gap-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-mulearn-blackish">
              <iframe
                src={getEmbedUrl(story.url)}
                title={`${story.name} success story`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-mulearn-blackish">{story.name}</p>
              <p className="mt-0.5 text-sm text-mulearn-gray-600">{story.role}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function SuccessStories() {
  return (
    <section id="success-stories">
      <h2 className="text-center">
        Success Stories from <span className="text-mulearn">µLearn Community</span>
      </h2>

      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={`${story.url}-${index}`}>
              <VideoCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
