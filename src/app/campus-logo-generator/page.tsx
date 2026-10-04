import { CampusLogoGeneratorView } from "@/features/campus-logo-generator";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Campus Logo Generator",
  description:
    "Generate a custom µLearn campus chapter logo in seconds using the official brand kit.",
  keywords: ["campus logo generator", "chapter branding", "logo maker", "mulearn brand kit"],
  canonical: "https://mulearn.org/campus-logo-generator",
});

export default function CampusLogoGeneratorPage() {
  return <CampusLogoGeneratorView />;
}
