import type { LearnerRoleTag } from "@/data/data";

interface LearnerIntroProps {
  learnerTags: LearnerRoleTag[];
}

const LearnerIntro: React.FC<LearnerIntroProps> = ({ learnerTags }) => {
  return (
    <section
      className="py-16 md:py-20 container mx-auto px-4"
      aria-labelledby="learners-intro-heading"
    >
      <div className="text-center max-w-6xl mx-auto">
        <h2
          id="learners-intro-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight "
        >
          Who is a{" "}
          <span className="text-mulearn-trusty-blue">
            Learner
          </span>
          ?
        </h2>

        <p className="text-[20px] md:text-[20px] leading-[1.45] font-normal text-mulearn-gray-600 mx-auto max-w-[1119px]">
          A Learner is a doer — driven students and professionals who build real
          projects, solve problems, and collaborate with peers and mentors. They
          grow by shipping, iterating, and sharing their work, turning curiosity
          into a portfolio that opens opportunities.
        </p>

        {}
        <div className="overflow-x-auto mt-6">
          <div className="flex gap-2 min-w-max justify-center items-center">
            {learnerTags.map((tag) => (
              <span
                key={tag.id}
                role="button"
                tabIndex={0}
                aria-label={`Learner tag ${tag.label}`}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-mulearn-whitish text-mulearn-trusty-blue border-2 border-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish focus:outline-none focus-visible:ring-2 focus-visible:ring-mulearn-trusty-blue transition-colors duration-200 whitespace-nowrap"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight ">
          Why{" "}
          <span className="text-mulearn-trusty-blue">
            μLearn?
          </span>
        </h3>
        <p className="text-base sm:text-lg text-mulearn-gray-600 leading-relaxed">
          In a world that never stops changing, learning consistently is how you
          stay ahead. μLearn helps learners build practical skills through
          projects, mentorship, and community — investing in your future and
          your ability to create impact.
        </p>
      </div>
    </section>
  );
};

export default LearnerIntro;
