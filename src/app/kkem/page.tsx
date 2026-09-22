import { KkemView } from "@/features/kkem";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "KKEM Interest Groups",
  description: "µLearn's interest groups curated with the Kerala Knowledge Economy Mission (KKEM).",
  keywords: ["kkem interest groups", "kerala knowledge economy mission", "kkem mulearn"],
  canonical: "https://mulearn.org/kkem",
});

export default async function KkemPage() {
  return <KkemView />;
}
