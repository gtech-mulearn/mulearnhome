import { OfficeHoursView } from "@/features/events/components/office-hours";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Office Hour",
  description:
    "µLearn Office Hour — a weekly space where members connect, learn, and grow together.",
  keywords: ["office hour", "community meetup", "mulearn office hours"],
  canonical: "https://mulearn.org/events/office-hour",
});

export default async function OfficeHoursPage() {
  return <OfficeHoursView />;
}
