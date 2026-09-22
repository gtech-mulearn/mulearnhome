import { onboardingSteps } from "../../data/learners.data";
import { CTA } from "./cta";
import { LearnersHero } from "./hero";
import { LearnerIntro } from "./intro";
import { OnboardingSteps } from "./onboarding";
import { RankingSection } from "./ranking";
import { LearnersStatus } from "./status";
import { WhatYouGet } from "./what-you-get";
import { WhyKarmaPoints } from "./why-karma-points";
import { WhyMuLearn } from "./why-mulearn";

export function LearnersView() {
  return (
    <main className="min-h-screen ">
      <section id="hero">
        <LearnersHero />
      </section>
      <section id="learner-intro" className="pt-12 md:pt-16">
        <LearnerIntro />
      </section>
      <section id="why-mulearn" className="pt-12 md:pt-16">
        <WhyMuLearn />
      </section>
      <section id="rankings" className="py-12 md:py-16">
        <RankingSection />
      </section>
      <section id="what-you-get" className="py-12 md:py-16">
        <WhatYouGet />
      </section>
      <section id="why-karma-points" className="py-12 md:py-16">
        <WhyKarmaPoints />
      </section>
      <section id="onboarding" className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-center mb-8 md:mb-12 text-4xl md:text-5xl font-bold">
          How to Begin Your Journey
        </h2>
        <OnboardingSteps data={onboardingSteps} />
      </section>
      <section id="learners-status" className="py-12 md:py-16">
        <LearnersStatus />
      </section>
      <section id="final-cta" className="py-12 md:py-16">
        <CTA />
      </section>
    </main>
  );
}
