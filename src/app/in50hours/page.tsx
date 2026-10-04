import { In50HoursView } from "@/features/in50hours";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "IN50HOURS",
  description:
    "IN50HOURS — a µLearn hackathon to build, collaborate, and innovate in just 50 hours.",
  keywords: ["in50hours", "mulearn hackathon", "50 hour hackathon", "build and innovate"],
  canonical: "https://mulearn.org/in50hours",
});

export default async function In50HoursPage() {
  return <In50HoursView />;
}
