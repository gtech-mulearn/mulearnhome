import { LevelstructureView } from "@/features/levelstructure";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "The µLearn Odyssey",
  description: "Understand µLearn's karma-based level structure and growth path.",
  keywords: ["mulearn odyssey", "karma level structure", "growth path", "gamified learning"],
  canonical: "https://mulearn.org/levelstructure",
});

export default async function LevelstructurePage() {
  return <LevelstructureView />;
}
