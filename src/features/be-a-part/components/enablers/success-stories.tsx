"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Section, SectionHeading } from "@/components/sections";
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
      <button
        type="button"
        onClick={() => setIsDialogOpen(true)}
        className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-mulearn/10 bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <MuImage
            src={story.thumbnail}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-mulearn-blackish/10 transition-colors group-hover:bg-mulearn-blackish/20">
            <span className="flex size-14 items-center justify-center rounded-full bg-mulearn-whitish/95 text-mulearn shadow-lg">
              <Play className="ml-0.5 size-6" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        </div>
        <span className="flex flex-col gap-1 p-5">
          <span className="text-lg font-bold leading-snug text-mulearn-blackish">{story.name}</span>
          <span className="text-sm text-mulearn-gray-600">{story.role}</span>
        </span>
        <span className="sr-only">Play {story.name}&apos;s success story</span>
      </button>

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
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Success stories from the <span className="text-mulearn">µLearn</span> community
          </>
        }
        description="Principals and lead enablers on what changed once µLearn came to their campus."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, index) => (
          <MotionDiv
            key={story.url}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <VideoCard story={story} />
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
