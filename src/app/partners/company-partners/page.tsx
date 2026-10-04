import { CompanyPartnersView } from "@/features/company-partners";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Company Partners",
  description:
    "µLearn Company Partners — businesses partnering with us for opportunities and mentorship.",
  keywords: ["company partners", "business partnerships", "mentorship opportunities"],
  canonical: "https://mulearn.org/partners/company-partners",
});

export default async function CompanyPartnersPage() {
  return <CompanyPartnersView />;
}
