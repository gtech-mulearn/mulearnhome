import { LearnersView } from "@/features/be-a-part";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Unlock Your Potential",
  description:
    "Join µLearn as a learner — unlock your potential through peer-to-peer, proof-of-work learning.",
  keywords: [
    "join mulearn",
    "learner community",
    "peer-to-peer learning",
    "unlock potential",
    "student community",
  ],
  canonical: "https://mulearn.org/be-a-part/learners",
});

export default async function LearnersPage() {
  return <LearnersView />;
}
