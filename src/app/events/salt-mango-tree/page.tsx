import { SaltMangoTreeView } from "@/features/events/components/salt-mango-tree";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Salt Mango Tree",
  description: "µLearn Salt Mango Tree — a recurring session exploring ideas beyond the syllabus.",
  keywords: ["salt mango tree", "mulearn session", "beyond syllabus"],
  canonical: "https://mulearn.org/events/salt-mango-tree",
});

export default async function SaltMangoTreePage() {
  return <SaltMangoTreeView />;
}
