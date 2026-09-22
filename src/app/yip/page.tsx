import { YipView } from "@/features/yip";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "YIP",
  description: "Young Innovators Programme (YIP 5.0) by the Kerala Government, K-DISC, and µLearn.",
  keywords: ["yip", "young innovators programme", "kerala government yip", "k-disc"],
  canonical: "https://mulearn.org/yip",
});

export default async function YipPage() {
  return <YipView />;
}
