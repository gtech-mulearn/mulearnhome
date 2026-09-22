import { SelfDeterminationTheoryView } from "@/features/self-determination-theory";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Self-Determination Theory (SDT)",
  description:
    "The science behind µLearn — how self-determination theory shapes our approach to learning.",
  keywords: [
    "Self-Determination Theory",
    "SDT",
    "Edward Deci",
    "Richard Ryan",
    "intrinsic motivation",
    "autonomy",
    "competence",
    "relatedness",
    "peer-led learning",
  ],
  canonical: "https://mulearn.org/self-determination-theory",
});

export default async function SelfDeterminationTheoryPage() {
  return <SelfDeterminationTheoryView />;
}
