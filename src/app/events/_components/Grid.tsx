import { MotionDiv } from "@/components/MuFramer";
import EventCard from "./EventCard";
import { Event } from "@/lib/types";

interface Props {
  events: Event[];
  featured?: boolean;
}

export default function Grid({ events }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {events.map((event, i) => {
        return (
          <MotionDiv
            key={event.title}
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
