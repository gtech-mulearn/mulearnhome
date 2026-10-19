import { LevelStructureView } from "@/features/level-structure";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "The µLearn Odyssey",
  description: "Understand µLearn's karma-based level structure and growth path.",
  keywords: ["mulearn odyssey", "karma level structure", "growth path", "gamified learning"],
  canonical: "https://mulearn.org/level-structure",
});

export default async function LevelStructurePage() {
  return <LevelStructureView />;
}
