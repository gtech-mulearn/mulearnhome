import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/lib/env/env.client";

const LearnersHero = () => {
  const stars = [
    { id: 1, top: "5rem", left: "4rem", size: 18 },
    { id: 2, top: "8rem", left: "6rem", size: 40 },
    { id: 3, top: "50%", right: "5rem", size: 25 },
    { id: 4, top: "50%", left: "6rem", size: 15 },
    { id: 5, bottom: "6rem", right: "4rem", size: 50 },
    { id: 6, bottom: "10rem", right: "8rem", size: 12 },
  ];
  stars.map((star) => (
    <div key={star.id} className="absolute hidden lg:block text-mulearn-blackish" style={star}>
      <svg
        width={star.size}
        height={star.size}
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation"
      >
        <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
      </svg>
    </div>
  ));
  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      {/* Top Left Small */}
      <div className="absolute left-2/6 top-20 text-mulearn-blackish hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Top Left Small */}
      <div className="absolute right-52 top-60 text-mulearn-blackish hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Top Left Large */}
      <div className="absolute left-1/6 top-32 text-mulearn-blackish hidden lg:block opacity-80">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Center Right */}
      <div className="absolute right-3/12 top-1/12 text-mulearn-blackish hidden lg:block opacity-70">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Center Left */}
      <div className="absolute left-24 top-1/2 text-mulearn-blackish hidden lg:block opacity-60">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Bottom Right Large */}
      <div className="absolute right-40 bottom-24 text-mulearn-blackish hidden lg:block">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Bottom Right Large */}
      <div className="absolute left-52 bottom-24 text-mulearn-blackish hidden lg:block">
        <svg width="30" height="50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>

      {/* Bottom Right Tiny */}
      <div className="absolute right-40 bottom-40 text-mulearn-blackish hidden lg:block opacity-50">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
          <span>Unlock Your Potential</span>
          <br />
          <span>with </span>
          <span className="text-mulearn">μLearn</span>
        </h1>

        <p className="font-semibold text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide text-center mb-4 max-w-4xl lg:whitespace-nowrap">
          Try new skills, learn at your own pace, and build confidence through real-world, hands-on
          experience.
          <br />
          <span className="inline-block lg:pl-20">
            μLearn connects your curiosity with the right resources, action, and proof-of-work.
          </span>
        </p>

        <p className="font-bold text-base sm:text-lg lg:text-xl leading-relaxed tracking-normal text-center text-mulearn-trusty-blue mb-6 lg:whitespace-nowrap">
          Stay Curious | Stay Active | Grow Every Day.
        </p>

        <Button variant="default" className="mt-4 px-8 py-4" asChild>
          <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
            Join Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LearnersHero;
