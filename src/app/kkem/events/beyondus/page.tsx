import { BeyondusView } from "@/features/kkem";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Beyond Us",
  description:
    "Beyond Us — a hackathon by µLearn in association with the Kerala Knowledge Economy Mission.",
  keywords: ["beyond us hackathon", "kkem hackathon", "mulearn kkem event"],
  canonical: "https://mulearn.org/kkem/events/beyondus",
});

export default async function BeyondusPage() {
  return <BeyondusView />;
}
