import type { Variants } from "framer-motion";
import { CalendarClock, History, Radio, Repeat } from "lucide-react";
import EventCategoryTabs, { type EventCategory } from "@/app/events/_components/EventCategoryTabs";
import { MotionDiv } from "@/components/MuFramer";
import { events } from "@/data/events";
import { clientEnv } from "@/lib/env/env.client";
import type { Event, PublicEvent } from "@/lib/types";
import { fetchPublicEvents } from "@/services/publicEvents";
import {
  fetchGrabYourSuperpowers,
  fetchInspirationStation,
  fetchOfficeHours,
  fetchSaltMangoTree,
} from "@/services/weeklyTwitches";

function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function mapPublicEventToEvent(item: PublicEvent): Event {
  const start = new Date(item.start_datetime);
  const end = new Date(item.end_datetime);
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
  const startFormatted = start.toLocaleDateString("en-IN", options);
  const endFormatted = end.toLocaleDateString("en-IN", options);

  let dateRange = startFormatted;
  if (startFormatted !== endFormatted) {
    if (start.getFullYear() === end.getFullYear()) {
      const startMonthDay = start.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
      dateRange = `${startMonthDay} - ${endFormatted}`;
    } else {
      dateRange = `${startFormatted} - ${endFormatted}`;
    }
  }

  const category = item.category_name || item.event_type || "General";
  const organizedBy =
    item.organizer?.organiser_ig?.name || item.organizer?.organiser_campus?.title || "MuLearn";

  const venueType = item.venue?.venue_type;
  const venueLabel =
    venueType === "online"
      ? "Online"
      : [item.venue?.venue_address, item.venue?.venue_city].filter(Boolean).join(", ") ||
        (venueType ? venueType.charAt(0).toUpperCase() + venueType.slice(1) : undefined);

  return {
    title: item.title,
    description: item.description || "",
    image: item.cover_image || undefined,
    isLive: now >= start && now <= end,
    date: dateRange,
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/event/${item.id}`,
    category,
    organizedBy,
    tags: item.tags?.length ? item.tags : undefined,
    venueType,
    venueLabel,
  };
}

function safeMapEvents(items: PublicEvent[], label: string): Event[] | null {
  try {
    return items.map(mapPublicEventToEvent);
  } catch (error) {
    console.error(`Failed to map ${label} events:`, error);
    return null;
  }
}

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

export default async function Events() {
  const { recurringEvents } = events;

  let ongoingEvents: Event[] | null = null;
  let upcomingEvents: Event[] | null = null;
  let completedEvents: Event[] | null = null;

  const [ongoingResult, upcomingResult, completedResult] = await Promise.allSettled([
    fetchPublicEvents({ status: "ongoing" }),
    fetchPublicEvents({ status: "upcoming" }),
    fetchPublicEvents({ status: "completed" }),
  ]);

  if (ongoingResult.status === "fulfilled" && Array.isArray(ongoingResult.value)) {
    ongoingEvents = safeMapEvents(ongoingResult.value, "ongoing");
  } else if (ongoingResult.status === "rejected") {
    console.error("Failed to fetch ongoing events:", ongoingResult.reason);
  }

  if (upcomingResult.status === "fulfilled" && Array.isArray(upcomingResult.value)) {
    upcomingEvents = safeMapEvents(upcomingResult.value, "upcoming");
  } else if (upcomingResult.status === "rejected") {
    console.error("Failed to fetch upcoming events:", upcomingResult.reason);
  }

  if (completedResult.status === "fulfilled" && Array.isArray(completedResult.value)) {
    completedEvents = safeMapEvents(completedResult.value, "completed");
  } else if (completedResult.status === "rejected") {
    console.error("Failed to fetch completed events:", completedResult.reason);
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
    {
      id: "past",
      navLabel: "Past",
      title: "Past Events",
      icon: <History className="h-4 w-4" />,
      events: completedEvents,
      emptyTitle: "The archive is empty",
      emptyDescription:
        "Once events wrap up, they'll show up here so you can look back on what happened.",
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
