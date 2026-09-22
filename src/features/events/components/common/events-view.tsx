"use client";

import type { Variants } from "framer-motion";
import { CalendarClock, Radio, Repeat, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/layouts";
import { events } from "../../data/events.data";
import { useFeaturedEvents, usePublicEvents } from "../../hooks/events.hooks";
import type { Event } from "../../types/events.types";
import { safeMapEvents, withNextSessionDate } from "../../utils/events.utils";
import { type EventCategory, EventCategoryTabs } from "./event-category-tabs";
import { EventsSkeleton } from "./events-skeleton";
import { Pagination } from "./pagination";

const PER_PAGE = 9;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function EventsView() {
  return (
    <section className="px-6 py-8 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto mb-16">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full text-center px-2 sm:px-0"
        >
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] text-mulearn-blackish font-bold leading-tight mb-6">
            <span className="text-mulearn">µLearn</span> Events
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-mulearn-gray-600 max-w-3xl mx-auto leading-relaxed">
            Several recurring activities are conducted at µLearn each week. There will be events
            filled with stories, learning experiences, inspirations, and much more. Join in and
            let&apos;s learn something new.
          </p>
        </MotionDiv>
      </div>

      <div className="mx-auto max-w-7xl">
        <EventsList />
      </div>
    </section>
  );
}

function EventsList() {
  const { recurringEvents } = events;

  const [featuredPage, setFeaturedPage] = useState(1);
  const [ongoingPage, setOngoingPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);

  const {
    data: featuredRaw,
    pagination: featuredPagination,
    error: featuredError,
    isLoading: featuredLoading,
  } = useFeaturedEvents({ pageIndex: featuredPage, perPage: PER_PAGE });

  const {
    data: ongoingRaw,
    pagination: ongoingPagination,
    error: ongoingError,
    isLoading: ongoingLoading,
  } = usePublicEvents({ status: "ongoing", pageIndex: ongoingPage, perPage: PER_PAGE });

  const {
    data: upcomingRaw,
    pagination: upcomingPagination,
    error: upcomingError,
    isLoading: upcomingLoading,
  } = usePublicEvents({ status: "upcoming", pageIndex: upcomingPage, perPage: PER_PAGE });

  const [weeklyWithDates, setWeeklyWithDates] = useState<Event[]>(recurringEvents.weekly);

  useEffect(() => {
    let isCurrent = true;
    withNextSessionDate(recurringEvents.weekly).then((weekly) => {
      if (isCurrent) setWeeklyWithDates(weekly);
    });
    return () => {
      isCurrent = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    (featuredLoading && featuredRaw.length === 0) ||
    (ongoingLoading && ongoingRaw.length === 0) ||
    (upcomingLoading && upcomingRaw.length === 0)
  ) {
    return <EventsSkeleton />;
  }

  const featuredEvents = featuredError ? null : safeMapEvents(featuredRaw, "featured");
  const ongoingEvents = ongoingError ? null : safeMapEvents(ongoingRaw, "ongoing");
  const upcomingEvents = upcomingError ? null : safeMapEvents(upcomingRaw, "upcoming");

  const categories: EventCategory[] = [
    {
      id: "featured",
      navLabel: "Featured",
      title: "Featured Events",
      icon: <Star className="h-4 w-4" />,
      events: featuredEvents,
      emptyTitle: "No featured events right now",
      emptyDescription: "Check back soon — standout events get featured here.",
      footer: (
        <Pagination
          page={featuredPage}
          setPage={setFeaturedPage}
          total={featuredPagination?.count ?? 0}
          perPage={PER_PAGE}
        />
      ),
    },
    {
      id: "ongoing",
      navLabel: "Ongoing",
      title: "Ongoing Events",
      icon: <Radio className="h-4 w-4" />,
      events: ongoingEvents,
      emptyTitle: "Nothing's live right now",
      emptyDescription:
        "μLearn's stage is quiet at the moment. Check back soon to catch something happening live.",
      footer: (
        <Pagination
          page={ongoingPage}
          setPage={setOngoingPage}
          total={ongoingPagination?.count ?? 0}
          perPage={PER_PAGE}
        />
      ),
    },
    {
      id: "upcoming",
      navLabel: "Upcoming",
      title: "Upcoming Events",
      icon: <CalendarClock className="h-4 w-4" />,
      events: upcomingEvents,
      emptyTitle: "No upcoming events yet",
      emptyDescription:
        "Nothing's on the calendar just yet. New events get added often, so check back soon.",
      footer: (
        <Pagination
          page={upcomingPage}
          setPage={setUpcomingPage}
          total={upcomingPagination?.count ?? 0}
          perPage={PER_PAGE}
        />
      ),
    },
    {
      id: "weekly",
      navLabel: "Weekly Twitches",
      title: "Weekly Twitch Events",
      icon: <Repeat className="h-4 w-4" />,
      events: weeklyWithDates,
      emptyTitle: "No sessions scheduled",
      emptyDescription:
        "Our weekly shows are between sessions right now. The next one will land here soon.",
    },
  ];

  return <EventCategoryTabs categories={categories} />;
}
