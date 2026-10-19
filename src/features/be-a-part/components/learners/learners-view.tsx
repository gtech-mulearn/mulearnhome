import { CTA } from "./cta";
import { LearnersHero } from "./hero";
import { LearnerIntro } from "./intro";
import { LearnersOnboarding } from "./onboarding";
import { RankingSection } from "./ranking";
import { LearnersStatus } from "./status";
import { WhatYouGet } from "./what-you-get";
import { WhyKarmaPoints } from "./why-karma-points";
import { WhyMuLearn } from "./why-mulearn";

export function LearnersView() {
  return (
    <main className="min-h-screen bg-mulearn-whitish">
      <LearnersHero />
      <LearnerIntro />
      <WhyMuLearn />
      <RankingSection />
      <WhatYouGet />
      <WhyKarmaPoints />
      <LearnersOnboarding />
      <LearnersStatus />
      <CTA />
    </main>
  );
}
