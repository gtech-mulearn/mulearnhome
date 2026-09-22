import { SocialsView } from "@/features/socials";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Social Links",
  description:
    "Follow µLearn on social media — stay updated with our community, events, and stories.",
  keywords: ["social links", "follow mulearn", "social media"],
  canonical: "https://mulearn.org/socials",
});

export default async function SocialsPage() {
  return <SocialsView />;
}
