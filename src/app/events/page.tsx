import { EventsView } from "@/features/events";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Events",
  description:
    "µLearn Events — recurring sessions, stories, and learning experiences held every week.",
  keywords: ["mulearn events", "community sessions", "learning events", "weekly sessions"],
  canonical: "https://mulearn.org/events",
});

export default async function EventsPage() {
  return <EventsView />;
}
