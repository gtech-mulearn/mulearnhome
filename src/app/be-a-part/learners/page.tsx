import type { Metadata } from "next";
import CTA from "@/app/be-a-part/learners/_components/CTA";
import Hero from "@/app/be-a-part/learners/_components/Hero";
import Intro from "@/app/be-a-part/learners/_components/Intro";
import Onboarding from "@/app/be-a-part/learners/_components/Onboarding";
import Ranking from "@/app/be-a-part/learners/_components/Ranking";
import Status from "@/app/be-a-part/learners/_components/Status";
import WhatYouGet from "@/app/be-a-part/learners/_components/WhatYouGet";
import WhyKarmaPoints from "@/app/be-a-part/learners/_components/WhyKarmaPoints";
import WhyMuLearn from "@/app/be-a-part/learners/_components/WhyMuLearn";
import { PageContainer } from "@/components/layout/PageContainer";
import { onboardingSteps } from "@/data/learners";

export const metadata: Metadata = {
  title: "Become a Learner | µLearn",
  description:
    "Unlock your potential with µLearn. Try new skills, learn at your own pace, earn karma points and build a proof-of-work portfolio alongside a supportive community.",
  openGraph: {
    title: "Become a Learner | µLearn",
    description:
      "Try new skills, learn at your own pace, and build confidence through real-world, hands-on experience with µLearn.",
    url: "https://mulearn.org/be-a-part/learners",
    type: "website",
  },
};

export default function LearnersPage() {
  return (
    <PageContainer>
      <Hero />
      <Intro />
      <WhyMuLearn />
      <Ranking />
      <WhatYouGet />
      <WhyKarmaPoints />
      <Onboarding data={onboardingSteps} />
      <Status />
      <CTA />
    </PageContainer>
  );
}
