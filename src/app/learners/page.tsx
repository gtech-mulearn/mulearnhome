import LearnersHero from '@/app/learners/_components/LearnersHero';
import LearnerIntro from '@/app/learners/_components/LearnerIntro';
import Testimonials from '@/app/learners/_components/Testimonials';
import RankingSection from '@/app/learners/_components/RankingSection';
import OnboardingSteps from '@/app/learners/_components/OnboardingSteps';

import { learnerIdentityTags, topLearnersData, testimonialsData, onboardingSteps } from '@/data/data';

export default function LearnersPage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <LearnersHero />
      </section>
      <section id="learner-intro" className="pt-12 md:pt-16">
        <LearnerIntro learnerTags={learnerIdentityTags} />
      </section>
      <section id="testimonials" className="pt-12 md:pt-16 pb-12 md:pb-16">
        <Testimonials />
      </section>
      <section id="rankings" className="py-12 md:py-16">
        <RankingSection topLearners={topLearnersData} testimonials={testimonialsData} />
      </section>
      <section id="onboarding" className="py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8 md:mb-12">
          Onboarding <span className="text-mulearn-trusty-blue">Process</span>
        </h2>
        <OnboardingSteps data={onboardingSteps} />
      </section>

    </main>
  );
}
