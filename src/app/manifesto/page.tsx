import { ManifestoView } from "@/features/manifesto";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Manifesto",
  description: "The µLearn Manifesto — our philosophy of peer-to-peer, proof-of-work learning.",
  keywords: ["mulearn manifesto", "peer-to-peer philosophy", "proof-of-work learning philosophy"],
  canonical: "https://mulearn.org/manifesto",
});

export default async function ManifestoPage() {
  return <ManifestoView />;
}
