import { CompanyView } from "@/features/be-a-part";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Partner With µLearn",
  description:
    "Partner with µLearn as a company — access talent, validate skills, and support proof-of-work learning.",
  keywords: [
    "partner with mulearn",
    "hire talent",
    "skill validation",
    "proof-of-work hiring",
    "company partnership",
  ],
  canonical: "https://mulearn.org/be-a-part/company",
});

export default async function CompanyPage() {
  return <CompanyView />;
}
