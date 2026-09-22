import { CareersView } from "@/features/careers";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Career Labs",
  description:
    "µLearn Career Labs — connect with job and internship opportunities from industry partners.",
  keywords: [
    "career labs",
    "internships",
    "job opportunities",
    "industry partners",
    "student careers",
  ],
  canonical: "https://mulearn.org/careers",
});

export default async function CareersPage() {
  return <CareersView />;
}
