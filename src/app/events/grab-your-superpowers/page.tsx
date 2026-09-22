import { GrabYourSuperpowersView } from "@/features/events/components/grab-your-superpowers";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Grab Your Superpowers",
  description: "Weekly µLearn sessions to help you unlock new skills, guided by mentors and peers.",
  keywords: ["grab your superpowers", "skills workshop", "mentor session"],
  canonical: "https://mulearn.org/events/grab-your-superpowers",
});

export default async function GrabYourSuperpowersPage() {
  return <GrabYourSuperpowersView />;
}
