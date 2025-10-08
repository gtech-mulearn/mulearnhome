"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import EventCarousel from "@/app/events/_components/EventCarousel";
import Grid from "@/app/events/_components/Grid";
import { events, type Event } from "@/data/data";

export default function Events() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const formatSectionTitle = (type: string) => {
    const titles: Record<string, string> = {
      latest: "Ongoing Events",
      flagship: "Flagship Events",
      weekly: "Weekly Twitch Events",
      biweekly: "Biweekly Events",
      monthly: "Monthly Events",
    };
    return titles[type] || type;
  };

  const recurringEventsEntries: [string, Event[]][] = Object.entries(
    events.recurringEvents
  ).filter(([, events]) => events.length > 0);

  const shouldUseCarousel = (events: Event[]) => events.length > 3;

  const allEventsSections: [string, Event[]][] = [
    ["latest", events.latestEvents],
    ...recurringEventsEntries,
  ] as [string, Event[]][];

  return (
    <>
      <section className="bg-mulearn-whitish px-6 py-8 md:px-12">
        <div className="max-w-[1300px] mx-auto mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full text-center px-2 sm:px-0"
          >
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] text-mulearn-blackish font-bold leading-tight mb-6">
              <span className="bg-mulearn-trusty-blue bg-clip-text text-transparent">
                µLearn
              </span>{" "}
              Events
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-mulearn-gray-600 max-w-3xl mx-auto leading-relaxed">
              Several recurring activities are conducted at µLearn each week.
              There will be events filled with stories, learning experiences,
              inspirations, and much more. Join in and let&apos;s learn
              something new.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {allEventsSections.map(([type, events]) => (
            <motion.div
              key={type}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="mb-12"
            >
              <div className="mb-3 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-1">
                  {formatSectionTitle(type)}
                </h2>
                <div className="w-20 h-1 bg-mulearn-trusty-blue mx-auto md:mx-0 rounded-full" />
              </div>

              {shouldUseCarousel(events) ? (
                <EventCarousel events={events} />
              ) : (
                <Grid events={events} />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
