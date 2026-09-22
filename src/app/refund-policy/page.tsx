import { RefundPolicyView } from "@/features/refund-policy";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Refund Policy",
  description: "µLearn Foundation refund policy and donation guidelines.",
  keywords: ["refund policy", "donation guidelines", "mulearn foundation refund"],
  canonical: "https://mulearn.org/refund-policy",
});

export default async function RefundPolicyPage() {
  return <RefundPolicyView />;
}
