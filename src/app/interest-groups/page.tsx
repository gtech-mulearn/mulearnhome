import { InterestGroupsView } from "@/features/interest-groups";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Interest Groups",
  description:
    "Find your tribe — join a µLearn Interest Group and learn alongside peers who share your passion.",
  keywords: ["interest groups", "find your tribe", "peer groups", "shared passion learning"],
  canonical: "https://mulearn.org/interest-groups",
});

export default async function InterestGroupsPage() {
  return <InterestGroupsView />;
}
