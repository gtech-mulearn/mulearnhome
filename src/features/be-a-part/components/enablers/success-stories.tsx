"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, type CarouselHandle, CarouselSlide } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { enablerSuccessStories as stories } from "../../data/enablers.data";

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
      <Card
        className="h-full rounded-3xl overflow-hidden cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative aspect-video w-full flex-shrink-0">
            <MuImage
              src={story.thumbnail}
              alt={`${story.name} thumbnail`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-mulearn-whitish flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-1">
            <p className="text-base md:text-lg font-bold leading-6">{story.name}</p>
            <p className="text-mulearn-gray-600 text-xs md:text-sm font-medium leading-5">
              {story.role}
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl w-[90vw] px-2 pt-10">
          <DialogTitle className="sr-only">{story.name} success story</DialogTitle>
          <DialogDescription className="sr-only">
            Youtube video of {story.name} sharing their success story.
          </DialogDescription>
          <div className="mt-2 flex flex-col gap-4">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-mulearn-blackish">
              <iframe
                src={getEmbedUrl(story.url)}
                title={`${story.name} success story`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg font-bold">{story.name}</p>
              <p className="text-sm text-mulearn-gray-600 mt-0.5">{story.role}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function EnablersSuccessStories() {
  const carouselRef = useRef<CarouselHandle>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold leading-[62.40px]">
          <span>Success Stories from </span>
          <span className="text-mulearn">µLearn Community</span>
        </h2>
      </div>

      <div className="relative px-14">
        <Button
          variant="default"
          onClick={() => carouselRef.current?.scrollPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
        >
          <ChevronLeft className="w-6 h-6 text-mulearn-whitish" />
        </Button>

        <Button
          variant="default"
          onClick={() => carouselRef.current?.scrollNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
        >
          <ChevronRight className="w-6 h-6 text-mulearn-whitish" />
        </Button>

        <Carousel
          ref={carouselRef}
          options={{ loop: true }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          trackClassName="-ml-6"
          className="pb-4"
        >
          {stories.map((story, index) => (
            <CarouselSlide
              key={`${story.url}-${index}`}
              className="h-auto pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <VideoCard story={story} />
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
