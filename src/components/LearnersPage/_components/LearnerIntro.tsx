import React from 'react';
import type { LearnerRoleTag } from '@/data/data';

interface LearnerIntroProps {
  learnerTags: LearnerRoleTag[];
}

const LearnerIntro: React.FC<LearnerIntroProps> = ({ learnerTags }) => {
  return (
    <section className="py-16 md:py-20 container mx-auto px-4" aria-labelledby="learners-intro-heading">
      {/* Who is a Learner */}
      <div className="text-center max-w-6xl mx-auto">
        <h2
          id="learners-intro-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight font-display"
        >
          Who is a <span className="text-[color:var(--mulearn-trusty-blue)]">Learner</span>?
        </h2>

        <p className="text-[20px] md:text-[20px] leading-[1.45] font-normal text-[color:var(--mulearn-gray-600)] mx-auto max-w-[1119px]">
          A Learner is a doer — driven students and professionals who build real projects, solve problems, and collaborate
          with peers and mentors. They grow by shipping, iterating, and sharing their work, turning curiosity into a
          portfolio that opens opportunities.
        </p>

        {/* Learner tags */}
        <div className="overflow-x-auto mt-6">
          <div className="flex gap-2 min-w-max justify-center items-center">
            {learnerTags.map((tag) => (
              <span
                key={tag.id}
                role="button"
                tabIndex={0}
                aria-label={`Learner tag ${tag.label}`}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-[color:var(--mulearn-whitish)] text-[color:var(--mulearn-trusty-blue)] border-2 border-[color:var(--mulearn-trusty-blue)] hover:bg-[color:var(--mulearn-trusty-blue)] hover:text-[color:var(--mulearn-whitish)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--mulearn-trusty-blue)] transition-colors duration-200 whitespace-nowrap"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why µLearn */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight font-display">
          Why <span className="text-[color:var(--mulearn-trusty-blue)]">μLearn?</span>
        </h3>
        <p className="text-base sm:text-lg text-[color:var(--mulearn-gray-600)] leading-relaxed">
          In a world that never stops changing, learning consistently is how you stay ahead. μLearn helps learners build
          practical skills through projects, mentorship, and community — investing in your future and your ability to
          create impact.
        </p>
      </div>
    </section>
  );
};

export default LearnerIntro;

