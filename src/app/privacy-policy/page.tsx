import { PrivacyPolicyView } from "@/features/privacy-policy";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "µLearn Foundation's privacy policy — how we collect, use, and protect your data.",
  keywords: ["privacy policy", "data protection", "mulearn foundation privacy"],
  canonical: "https://mulearn.org/privacy-policy",
});

export default async function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
