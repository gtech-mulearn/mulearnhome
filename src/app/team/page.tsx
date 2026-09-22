import { TeamView } from "@/features/team";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Our Team",
  description:
    "Meet the team behind µLearn — the people building the future of peer-to-peer learning.",
  keywords: ["mulearn team", "our team", "peer-to-peer learning team"],
  canonical: "https://mulearn.org/team",
});

export default async function TeamPage() {
  return <TeamView />;
}
