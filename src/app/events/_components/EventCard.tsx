import { ArrowRight, Calendar } from "lucide-react";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Event } from "@/lib/types";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <MotionDiv
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative bg-mulearn-whitish rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-mulearn-trusty-blue
    w-full h-auto sm:w-[380px] ${event.image ? "h-[360px]" : "h-[280px]"} flex flex-col`}
    >
      <div className="w-full h-20 overflow-hidden">
        {event.image ? (
          <MuImage
            src={event.image}
            alt={event.title}
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-mulearn" />
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-mulearn transition-colors duration-300 line-clamp-2 text-xl">
              {event.title}
            </h3>
            {event.date && (
              <Badge className="bg-mulearn-greyish/20 text-mulearn-trusty-blue hover:bg-mulearn-greyish/20 text-xs px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shrink-0">
                <Calendar className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">{event.date}</span>
              </Badge>
            )}
          </div>

          <p className="text-mulearn-blackish text-sm leading-relaxed overflow-hidden line-clamp-4">
            {event.description}
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <MotionDiv whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="flex justify-center">
                <Button
                  variant={"default"}
                  className="mt-2 flex w-full items-center justify-center gap-3 text-mulearn-whitish rounded-xl px-5 py-3 font-semibold text-sm shadow-sm hover:shadow-md"
                >
                  Check it out!
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </MotionDiv>
          </DialogTrigger>

          <DialogContent className="max-w-lg rounded-2xl">
            <DialogHeader>
              <DialogTitle>{event.title}</DialogTitle>
              {event.date && (
                <div className="flex items-center gap-2 text-mulearn-blackish text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.image && (
                <MuImage
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full mb-4"
                />
              )}
              <DialogDescription className="text-mulearn-blackish text-sm leading-relaxed">
                {event.description}
              </DialogDescription>
            </DialogHeader>
            {event.link && (
              <DialogFooter>
                <Button
                  asChild
                  variant={"default"}
                  className="w-full flex items-center justify-center gap-3 text-mulearn-whitish rounded-xl px-5 py-3 font-semibold text-sm shadow-sm hover:shadow-md"
                >
                  <a target="_blank" href={event.link} rel="noopener">
                    Go to Event
                  </a>
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </MotionDiv>
  );
}
