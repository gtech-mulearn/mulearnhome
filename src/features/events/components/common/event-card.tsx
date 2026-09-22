import { ArrowUpRight, Calendar, Globe, MapPin, Radio, School } from "lucide-react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/features/events";

interface Props {
  event: Event;
}

function VenueIcon({ venueType, className }: { venueType?: string; className?: string }) {
  if (venueType === "online") return <Globe className={className} />;
  if (venueType === "hybrid") return <Radio className={className} />;
  return <MapPin className={className} />;
}

const KNOWN_CATEGORY_SLUGS = new Set([
  "workshop",
  "webinar",
  "hackathon",
  "meetup",
  "competition",
  "seminar",
  "bootcamp",
  "conference",
  "ideathon",
  "cultural_event",
  "sports_event",
  "community_event",
  "expo",
  "networking_event",
  "tech_talk",
]);

function categorySlug(label: string) {
  const slug = label.trim().toLowerCase().replace(/\s+/g, "_");
  return KNOWN_CATEGORY_SLUGS.has(slug) ? slug : "others";
}

export function EventCard({ event }: Props) {
  return (
    <MotionDiv
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      className="w-full sm:w-[380px] h-[460px]"
    >
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={event.title}
        className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col cursor-pointer select-none"
      >
        <div className="relative w-full h-full overflow-hidden">
          <MuImage
            src={event.image || "/assets/events/fallback.webp"}
            alt={event.title}
            fill
            sizes="(min-width: 640px) 380px, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-mulearn-blackish via-mulearn-blackish/20 to-mulearn-blackish/10" />

          {/* Top-left category sticker */}
          {event.category && (
            <div className="absolute left-3 top-3 z-10">
              <span
                className={`ig-cat-${categorySlug(event.category)} inline-flex items-center w-fit text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm truncate max-w-[180px]`}
              >
                {event.category}
              </span>
            </div>
          )}

          {/* Top-right live sticker */}
          {event.isLive && (
            <div className="absolute right-3 top-3 z-10">
              <Badge
                variant="destructive"
                className="inline-flex items-center gap-1 w-fit text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full"
              >
                <span className="w-1 h-1 bg-mulearn-whitish rounded-full animate-pulse" />
                LIVE
              </Badge>
            </div>
          )}

          {/* Bottom overlay content */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-mulearn-whitish">
            {event.date && (
              <div className="flex items-center gap-1.5 text-[11px] font-semibold opacity-85">
                <Calendar className="w-3.5 h-3.5" />
                <span>{event.date}</span>
              </div>
            )}

            <h3 className="mt-1.5 font-extrabold text-mulearn-whitish text-lg leading-snug line-clamp-2">
              {event.title}
            </h3>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs opacity-85">
              {event.organizedBy && (
                <div className="flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5 shrink-0" />
                  <span>{event.organizedBy}</span>
                </div>
              )}

              {event.venueLabel && (
                <div className="flex items-center gap-1.5">
                  <VenueIcon venueType={event.venueType} className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1">{event.venueLabel}</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Go to Event
              </span>
              <div className="w-9 h-9 rounded-full bg-mulearn-whitish/15 group-hover:bg-mulearn text-mulearn-whitish flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </MotionDiv>
  );
}
