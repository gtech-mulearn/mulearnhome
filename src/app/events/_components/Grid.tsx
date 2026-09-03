import { MotionDiv } from "@/components/MuFramer";
import type { Event } from "@/lib/types";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
  featured?: boolean;
}

export default function Grid({ events }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {events.map((event, i) => {
        return (
          <MotionDiv
            key={`${event.title}-${event.date || i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <EventCard event={event} />
          </MotionDiv>
        );
      })}
    </div>
  );
}
