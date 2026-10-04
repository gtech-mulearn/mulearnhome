import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Donation Successful",
  description: "Thank you for your generous donation to µLearn Foundation.",
  keywords: ["donation successful", "thank you donor"],
  canonical: "https://mulearn.org/donate/success",
  noIndex: true,
});

export default function DonateSuccessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
