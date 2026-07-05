import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import Archives from "./_components/Archives";
import FirstEdition from "./_components/FirstEdition";
import Guidelines from "./_components/Guidelines";
import Hero from "./_components/Hero";
import Judges from "./_components/Judges";
import Quote from "./_components/Quote";
import Recap from "./_components/Recap";

export const metadata: Metadata = {
  title: "Art of Teaching | µLearn",
  description:
    "Art of Teaching is a µLearn contest celebrating educators who creatively simplify complex topics — theme: Lessons of The Future. Register for the 4.0 edition.",
  openGraph: {
    title: "Art of Teaching | µLearn",
    description:
      "A µLearn contest celebrating educators who creatively simplify complex topics for better student understanding.",
    url: "https://mulearn.org/artofteaching",
    type: "website",
  },
};

const ArtOfTeaching = () => {
  return (
    <PageContainer>
      <Hero />
      <Guidelines />
      <Recap />
      <FirstEdition />
      <Judges />
      <Archives />
      <Quote />
    </PageContainer>
  );
};

export default ArtOfTeaching;
