import MuImage from "@/components/MuImage";

const LearnerIntro = () => {
  return (
    <section id="learner-intro" aria-labelledby="learners-intro-heading">
      <div className="flex flex-col items-center gap-8 rounded-3xl bg-mulearn p-8 md:flex-row md:gap-12 md:p-12">
        <div className="flex w-full shrink-0 items-center justify-center rounded-2xl bg-mulearn-whitish/10 p-6 md:w-2/5">
          <MuImage
            src="/assets/learners/learner-character.png"
            alt="Illustration of a learner with an idea bulb"
            width={360}
            height={360}
            className="h-auto w-full max-w-xs"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 id="learners-intro-heading" className="text-mulearn-whitish">
            Who is a Learner?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mulearn-whitish/90 md:text-lg">
            A learner is anyone who chooses to grow. Students, professionals, beginners and career
            changers from any background are welcome. Your degree does not define your potential.
            µLearn supports learners in building strong portfolios, real tasks, collaboration and
            consistent effort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnerIntro;
