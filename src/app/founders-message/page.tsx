import { FoundersMessageView } from "@/features/founders-message";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "A Message to the World",
  description: "A message from µLearn's founder on the community's mission and journey.",
  keywords: ["founder message", "mulearn founder", "mission statement"],
  canonical: "https://mulearn.org/founders-message",
});

export default async function FoundersMessagePage() {
  return <FoundersMessageView />;
}
