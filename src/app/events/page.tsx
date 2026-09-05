import type { Variants } from "framer-motion";
import { CalendarClock, Radio, Repeat } from "lucide-react";
import EventCategoryTabs, { type EventCategory } from "@/app/events/_components/EventCategoryTabs";
import { MotionDiv } from "@/components/MuFramer";
import { events } from "@/data/events";
import { EVENTS_PER_PAGE } from "@/lib/events/constants";
import { formatDate, safeMapEvents } from "@/lib/events/mapPublicEvent";
import type { Event, PublicEventsPagination } from "@/lib/types";
import { fetchPublicEvents } from "@/services/publicEvents";
import {
  fetchGrabYourSuperpowers,
  fetchInspirationStation,
  fetchOfficeHours,
  fetchSaltMangoTree,
} from "@/services/weeklyTwitches";

const WEEKLY_TWITCH_FETCHERS: Record<
  string,
  (params: { status: "upcoming"; pageIndex: number; perPage: number }) => Promise<{
    data: { date: string; time?: string | null }[];
  }>
> = {
  "Office Hour": fetchOfficeHours,
  "Inspiration Station Radio": fetchInspirationStation,
  "Salt Mango Tree": fetchSaltMangoTree,
  "Grab Your Superpowers": fetchGrabYourSuperpowers,
};

async function withNextSessionDate(weekly: Event[]): Promise<Event[]> {
  return Promise.all(
    weekly.map(async (item) => {
      const fetcher = WEEKLY_TWITCH_FETCHERS[item.title];
      if (!fetcher) return item;

      try {
        const { data } = await fetcher({ status: "upcoming", pageIndex: 1, perPage: 1 });
        const next = data[0];
        if (!next) return item;
        return {
          ...item,
          date: formatDate(next.date),
          time: next.time ? next.time.slice(0, 5) : undefined,
        };
      } catch {
        return item;
      }
    }),
  );
}

const EMPTY_PAGINATION: PublicEventsPagination = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

export default async function Events() {
  const { recurringEvents } = events;

  let ongoingEvents: Event[] | null = null;
  let ongoingPagination: PublicEventsPagination = EMPTY_PAGINATION;
  let upcomingEvents: Event[] | null = null;
  let upcomingPagination: PublicEventsPagination = EMPTY_PAGINATION;

  const [ongoingResult, upcomingResult] = await Promise.allSettled([
    fetchPublicEvents({ status: "ongoing", pageIndex: 1, perPage: EVENTS_PER_PAGE }),
    fetchPublicEvents({ status: "upcoming", pageIndex: 1, perPage: EVENTS_PER_PAGE }),
  ]);

  if (ongoingResult.status === "fulfilled" && Array.isArray(ongoingResult.value.data)) {
    ongoingEvents = safeMapEvents(ongoingResult.value.data, "ongoing");
    ongoingPagination = ongoingResult.value.pagination;
  } else if (ongoingResult.status === "rejected") {
    console.error("Failed to fetch ongoing events:", ongoingResult.reason);
  }

  if (upcomingResult.status === "fulfilled" && Array.isArray(upcomingResult.value.data)) {
    upcomingEvents = safeMapEvents(upcomingResult.value.data, "upcoming");
    upcomingPagination = upcomingResult.value.pagination;
  } else if (upcomingResult.status === "rejected") {
    console.error("Failed to fetch upcoming events:", upcomingResult.reason);
  }

  const weeklyWithDates = await withNextSessionDate(recurringEvents.weekly);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const categories: EventCategory[] = [
    {
      id: "ongoing",
      navLabel: "Ongoing",
      title: "Ongoing Events",
      icon: <Radio className="h-4 w-4" />,
      events: ongoingEvents,
      emptyTitle: "Nothing's live right now",
      emptyDescription:
        "μLearn's stage is quiet at the moment. Check back soon to catch something happening live.",
      live: !!ongoingEvents && ongoingEvents.length > 0,
      status: "ongoing",
      pagination: ongoingPagination,
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
      status: "upcoming",
      pagination: upcomingPagination,
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
        <EventCategoryTabs categories={categories} />
      </div>
    </section>
  );
}
