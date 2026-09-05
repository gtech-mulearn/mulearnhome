import { clientEnv } from "@/lib/env/env.client";
import type { Event, PublicEvent } from "@/lib/types";

export function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export function mapPublicEventToEvent(item: PublicEvent): Event {
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
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/events/${item.id}`,
    category,
    organizedBy,
    tags: item.tags?.length ? item.tags : undefined,
    venueType,
    venueLabel,
  };
}

export function safeMapEvents(items: PublicEvent[], label: string): Event[] | null {
  try {
    return items.map(mapPublicEventToEvent);
  } catch (error) {
    console.error(`Failed to map ${label} events:`, error);
    return null;
  }
}
