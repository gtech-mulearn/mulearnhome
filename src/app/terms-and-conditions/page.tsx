import { TermsAndConditionsView } from "@/features/terms-and-conditions";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "µLearn Foundation's terms of service — the rules governing use of our platform.",
  keywords: ["terms of service", "terms and conditions", "mulearn foundation terms"],
  canonical: "https://mulearn.org/terms-and-conditions",
});

export default async function TermsAndConditionsPage() {
  return <TermsAndConditionsView />;
}
