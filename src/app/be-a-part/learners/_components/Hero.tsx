import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LearnersHero = () => {
  return (
    <section id="hero" className="relative text-center">
      <Plus aria-hidden className="absolute left-4 top-0 hidden size-5 text-mulearn lg:block" />
      <Plus
        aria-hidden
        className="absolute right-4 top-8 hidden size-5 text-category-amber lg:block"
      />

      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Unlock Your Potential
          <br />
          with <span className="text-mulearn">µLearn</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mulearn-gray-600 md:text-lg">
          Try new skills, learn at your own pace, and build confidence through real-world, hands-on
          experience. µLearn connects your curiosity with the right resources, action, and
          proof-of-work.
        </p>

        <p className="mt-4 font-semibold text-mulearn-trusty-blue">
          Stay Curious | Stay Active | Grow Every Day
        </p>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="https://app.mulearn.org" target="_blank" rel="noopener noreferrer">
              Join Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnersHero;
