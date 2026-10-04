import { ArtOfTeachingView } from "@/features/artofteaching";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Art of Teaching 4.0",
  description:
    "µLearn Art of Teaching 4.0 — a program for educators exploring student-centered, peer-driven teaching methods.",
  keywords: [
    "art of teaching",
    "educator training",
    "student-centered teaching",
    "peer-driven education",
    "teaching methodology",
  ],
  canonical: "https://mulearn.org/artofteaching",
});

export default async function ArtOfTeachingPage() {
  return <ArtOfTeachingView />;
}
