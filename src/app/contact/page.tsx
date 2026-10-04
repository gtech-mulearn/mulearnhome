import { ContactView } from "@/features/contact";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with µLearn — questions, feedback, and partnership inquiries welcome.",
  keywords: ["contact mulearn", "get in touch", "support", "partnership inquiries"],
  canonical: "https://mulearn.org/contact",
});

export default async function ContactPage() {
  return <ContactView />;
}
