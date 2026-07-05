import Link from "next/link";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="final-cta">
      <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-mulearn p-8 md:p-12 lg:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-mulearn-whitish">Start building your future with µLearn.</h2>
          <p className="mt-4 text-base leading-relaxed text-mulearn-whitish/90 md:text-lg">
            Gain real skills, collaborate with learners, and earn recognition as you grow.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button asChild variant="inverted" size="lg">
              <Link href="https://app.mulearn.org" target="_blank" rel="noopener noreferrer">
                Join µLearn
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="rounded-2xl bg-mulearn-whitish/10 p-6">
            <MuImage
              src="/assets/learners/learner-cta.png"
              alt="Learner celebrating with a laptop"
              width={360}
              height={360}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
