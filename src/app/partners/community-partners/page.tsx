import { CommunityPartnersView } from "@/features/community-partners";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Community Partners",
  description:
    "µLearn Community Partners — organizations we've teamed up with to expand peer learning.",
  keywords: ["community partners", "mulearn partnerships", "peer learning organizations"],
  canonical: "https://mulearn.org/partners/community-partners",
});

export default async function CommunityPartnersPage() {
  return <CommunityPartnersView />;
}
