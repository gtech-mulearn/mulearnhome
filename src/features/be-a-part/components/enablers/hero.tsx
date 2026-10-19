import Link from "next/link";
import { PageHero } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";

export function EnablersHero() {
  return (
    <PageHero
      title={
        <>
          Empower your campus with <span className="text-mulearn">µLearn</span>
        </>
      }
      description="Become a µLearn Campus Enabler. Guide student chapters, champion learning by doing, and help your institution grow with the community."
      actions={
        <>
          <Button asChild className="font-semibold">
            <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
              Join as Enabler
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href={`${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/search/students`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Learners
            </Link>
          </Button>
        </>
      }
      image={{
        src: "/assets/be-a-part/enabler.webp",
        alt: "µLearn Campus Enabler",
        width: 830,
        height: 1100,
      }}
      imageClassName="max-w-[15rem] sm:max-w-xs lg:max-w-sm"
    />
  );
}
