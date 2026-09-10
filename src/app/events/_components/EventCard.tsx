import { ArrowUpRight, Calendar, Globe, MapPin, Radio, School } from "lucide-react";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import type { Event } from "@/lib/types";

interface Props {
  event: Event;
}

function VenueIcon({ venueType, className }: { venueType?: string; className?: string }) {
  if (venueType === "online") return <Globe className={className} />;
  if (venueType === "hybrid") return <Radio className={className} />;
  return <MapPin className={className} />;
}

const TAG_COLORS = [
  "bg-mulearn/10 text-mulearn",
  "bg-mulearn-trusty-blue/10 text-mulearn-trusty-blue",
  "bg-mulearn-duke-purple/10 text-mulearn-duke-purple",
  "bg-chart-1/15 text-chart-1",
  "bg-chart-2/15 text-chart-2",
  "bg-chart-3/15 text-chart-3",
  "bg-chart-4/15 text-chart-4",
  "bg-chart-5/15 text-chart-5",
];

function tagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) hash = (hash * 31 + tag.charCodeAt(i)) | 0;
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}

export default function EventCard({ event }: Props) {
  return (
    <MotionDiv
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      className="w-full sm:w-[380px] h-[460px]"
    >
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={event.title}
        className="group relative bg-mulearn-whitish rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-mulearn-greyish/30 hover:border-mulearn/40 w-full h-full flex flex-col cursor-pointer select-none before:absolute before:rounded-l-full"
      >
        {/* Asymmetric Image Frame */}
        <div className="relative w-full h-48 overflow-hidden p-3 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-[20px] overflow-hidden relative flex items-center justify-center bg-linear-to-br from-mulearn-trusty-blue/10 to-mulearn-duke-purple/10">
            <MuImage
              src={event.image || "/assets/events/fallback.webp"}
              alt={event.title}
              width={800}
              height={400}
              className="object-contain w-full h-full group-hover:scale-104 transition-transform duration-500"
            />
          </div>

          {/* Pulsing Live indicator */}
          {event.isLive && (
            <div className="absolute top-5 left-5 bg-mulearn-trusty-blue text-mulearn-whitish text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm animate-pulse">
              <span className="w-1 h-1 bg-mulearn-whitish rounded-full" />
              LIVE
            </div>
          )}
        </div>

        {/* Event Content Details */}
        <div className="px-6 pb-6 pt-3 flex-1 flex flex-col justify-between min-h-0">
          <div className="space-y-2.5 overflow-hidden">
            {/* Category pill + date */}
            <div className="flex items-center justify-between gap-2">
              {event.category && (
                <span className="inline-flex items-center bg-mulearn/10 text-mulearn text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full truncate max-w-[60%]">
                  {event.category}
                </span>
              )}
              {event.date && (
                <div className="flex items-center gap-1.5 text-mulearn-gray-600 text-xs font-semibold shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-mulearn" />
                  <span>{event.date}</span>
                </div>
              )}
            </div>

            <h3 className="text-mulearn-blackish font-extrabold text-lg leading-snug line-clamp-2 group-hover:text-mulearn transition-colors duration-200">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {event.organizedBy && (
                <div className="flex items-center gap-1.5 text-mulearn-gray-600 text-xs font-medium">
                  <School className="w-3.5 h-3.5 text-mulearn shrink-0" />
                  <span>{event.organizedBy}</span>
                </div>
              )}

              {event.venueLabel && (
                <div className="flex items-center gap-1.5 text-mulearn-gray-600 text-xs font-medium">
                  <VenueIcon
                    venueType={event.venueType}
                    className="w-3.5 h-3.5 text-mulearn shrink-0"
                  />
                  <span className="line-clamp-1">{event.venueLabel}</span>
                </div>
              )}
            </div>

            {event.description && (
              <p className="text-mulearn-gray-600 text-sm leading-relaxed line-clamp-2">
                {event.description}
              </p>
            )}

            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {event.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
                {event.tags.length > 3 && (
                  <span className="inline-flex items-center text-mulearn-gray-600 text-[10px] font-semibold px-1.5 py-0.5">
                    +{event.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Custom Interactive Explore Strip */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-mulearn-greyish/20 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-mulearn-gray-600/80 group-hover:text-mulearn transition-colors duration-300">
              Go to Event
            </span>
            <div className="w-10 h-10 rounded-xl bg-mulearn/5 group-hover:bg-mulearn text-mulearn group-hover:text-mulearn-whitish flex items-center justify-center transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-mulearn/20">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </a>
    </MotionDiv>
  );
}
