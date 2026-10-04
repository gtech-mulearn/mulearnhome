import { TestimonialsView } from "@/features/testimonials";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Voices of Impact",
  description:
    "Hear from the µLearn community — testimonials from learners, mentors, and partners.",
  keywords: ["testimonials", "voices of impact", "mulearn reviews", "learner stories"],
  canonical: "https://mulearn.org/testimonials",
});

export default async function TestimonialsPage() {
  return <TestimonialsView />;
}
