import { InspirationStationView } from "@/features/events/components/inspiration-station";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Inspiration Station Radio",
  description:
    "µLearn Inspiration Station Radio — stories and conversations to spark your learning journey.",
  keywords: ["inspiration station radio", "mulearn podcast", "learning stories"],
  canonical: "https://mulearn.org/events/inspiration-station",
});

export default async function InspirationStationPage() {
  return <InspirationStationView />;
}
