import Link from "next/link";
import { PageHero } from "@/components/sections";
import { Button } from "@/components/ui/button";

export const CAMPUS_APPLY_URL = "https://airtable.com/appFdefxOwIVlTv1b/shrmtngt3zopg8eVh";

export function CampusHero() {
  return (
    <PageHero
      title={
        <>
          Start a <span className="text-mulearn">µLearn</span> Campus Chapter
        </>
      }
      description="Ignite your community. Build the future through peer-to-peer learning, proof-of-work and a 64,000+ strong network of learners."
      actions={
        <>
          <Button asChild className="font-semibold">
            <Link href={CAMPUS_APPLY_URL} target="_blank" rel="noopener noreferrer">
              Apply to Start a Chapter
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="#journey">See how it works</Link>
          </Button>
        </>
      }
      image={{
        src: "/assets/campus/community.webp",
        alt: "µLearn learners together on campus",
        width: 1200,
        height: 625,
      }}
      maskClassName="mask-r-from-85%"
    />
  );
}
