import { LearningCircleView } from "@/features/learning-circle";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Learning Circle",
  description:
    "Join a µLearn Learning Circle — an informal peer group for learning together on shared interests.",
  keywords: ["learning circle", "peer group learning", "informal learning"],
  canonical: "https://mulearn.org/learning-circle",
});

export default async function LearningCirclePage() {
  return <LearningCircleView />;
}
