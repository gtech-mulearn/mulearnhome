import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Annual Reports",
  description:
    "Explore µLearn's journey of growth, impact, and community building through our annual reports.",
  keywords: ["annual reports", "mulearn transparency", "impact report"],
  canonical: "https://mulearn.org/report",
});

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
