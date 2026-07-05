import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { kkem } from "@/data/kkem";
import { interestGroups } from "@/data/lc-ig";
import IGAbout from "./_components/IGAbout";
import IGEvents from "./_components/IGEvents";
import IGSection from "./_components/IGSection";

export const metadata: Metadata = {
  title: "Interest Groups | µLearn",
  description:
    "Discover your passion, collaborate with like-minded individuals, and explore µLearn Interest Groups — from coding to design, entrepreneurship to data science.",
  openGraph: {
    title: "Interest Groups | µLearn",
    description:
      "Discover your passion, collaborate with like-minded individuals, and explore µLearn Interest Groups.",
    url: "https://mulearn.org/kkem",
    type: "website",
  },
};

export default function Landing() {
  return (
    <PageContainer>
      <IGAbout />
      <IGSection cards={interestGroups} />
      <div id="events">
        <IGEvents cards={kkem.pastEventCardData} heading="Partnered Events" />
      </div>
    </PageContainer>
  );
}
