import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { PageHero } from "../shared";

export const LearnersHero = () => {
  return (
    <PageHero
      title={
        <>
          Unlock your potential with <span className="text-mulearn">µLearn</span>
        </>
      }
      description={
        <>
          <p className="text-lg md:text-xl">
            Try new skills, learn at your own pace and build confidence through real, hands-on work.
            µLearn connects your curiosity with the right resources, action and proof-of-work.
          </p>
          <p className="mt-3 text-lg font-semibold text-mulearn">
            Stay curious. Stay active. Grow every day.
          </p>
        </>
      }
      actions={
        <>
          <Button asChild className="font-semibold">
            <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
              Join µLearn
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="#top-learners">Meet top learners</Link>
          </Button>
        </>
      }
      image={{
        src: "/assets/learners/learner-cta.webp",
        alt: "A µLearn learner celebrating on a beanbag with a laptop",
        width: 954,
        height: 954,
      }}
      imageClassName="max-w-xs sm:max-w-sm lg:max-w-md"
    />
  );
};
