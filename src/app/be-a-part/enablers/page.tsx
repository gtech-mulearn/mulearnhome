import { EnablersView } from "@/features/be-a-part";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Empower Your Campus",
  description:
    "Become a µLearn Enabler — guide chapters, mentor learners, and empower your campus community.",
  keywords: [
    "mulearn enabler",
    "mentor program",
    "campus mentorship",
    "empower campus",
    "community enabler",
  ],
  canonical: "https://mulearn.org/be-a-part/enablers",
});

export default async function EnablersPage() {
  return <EnablersView />;
}
