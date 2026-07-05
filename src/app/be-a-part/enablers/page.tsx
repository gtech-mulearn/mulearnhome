import type { Metadata } from "next";
import Benefits from "@/app/be-a-part/enablers/_components/Benefits";
import Colleges from "@/app/be-a-part/enablers/_components/Colleges";
import GetInTouch from "@/app/be-a-part/enablers/_components/GetInTouch";
import Hero from "@/app/be-a-part/enablers/_components/Hero";
import HowToBegin from "@/app/be-a-part/enablers/_components/HowToBegin";
import MissionAndGrowth from "@/app/be-a-part/enablers/_components/MissionAndGrowth";
import SuccessStories from "@/app/be-a-part/enablers/_components/SuccessStories";
import WhoIsEnabler from "@/app/be-a-part/enablers/_components/WhoIsEnabler";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Become an Enabler | µLearn",
  description:
    "Empower your campus with µLearn. Become a Campus Enabler — provide direction, guide student leads and build a culture of proof-of-work learning across your institution.",
  openGraph: {
    title: "Become an Enabler | µLearn",
    description:
      "Become a µLearn Campus Enabler and empower your campus community through action, proof-of-work and community engagement.",
    url: "https://mulearn.org/be-a-part/enablers",
    type: "website",
  },
};

export default function EnablersPage() {
  return (
    <PageContainer>
      <Hero />
      <WhoIsEnabler />
      <Benefits />
      <Colleges />
      <SuccessStories />
      <MissionAndGrowth />
      <HowToBegin />
      <GetInTouch />
    </PageContainer>
  );
}
