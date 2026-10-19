import Link from "next/link";
import {
  CtaBanner,
  FeatureCard,
  PageHero,
  Section,
  SectionHeading,
  StepsSection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { fetchInterestGroups } from "../api/interest-groups.api";
import { igCoreValues, igJourneySteps } from "../data/interest-groups.data";
import { localDisplayItems, toDisplayItem } from "../utils/interest-groups.utils";
import { InterestGroupDirectory } from "./interest-group-directory";

const APP_BASE_URL = clientEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
const JOIN_URL = `${APP_BASE_URL}/dashboard/profile`;

async function getGroups() {
  const apiGroups = await fetchInterestGroups();
  if (apiGroups.length === 0) return localDisplayItems();
  return apiGroups
    .map((group) => toDisplayItem(group, APP_BASE_URL))
    .sort((a, b) => (b.members ?? 0) - (a.members ?? 0));
}

export async function InterestGroupsView() {
  const groups = await getGroups();

  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <PageHero
        title={
          <>
            Find your <span className="text-mulearn">tribe</span>, grow together
          </>
        }
        description="Join communities where learners explore specific domains, collaborate on projects and grow together through shared curiosity and hands-on learning."
        actions={
          <>
            <Button asChild className="font-semibold">
              <Link href="#groups">Browse groups</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={JOIN_URL} target="_blank" rel="noopener noreferrer">
                Join an Interest Group
              </Link>
            </Button>
          </>
        }
        image={{
          src: "/assets/interestgroups/hero.webp",
          alt: "A team of climbers roped together, ascending a snowy peak against a blue sun",
          width: 1200,
          height: 900,
        }}
        imageClassName="max-w-md sm:max-w-xl lg:max-w-none"
        // The art is opaque with an off-white sky, so fade every edge into the page.
        maskClassName="mask-x-from-85% mask-t-from-85%"
      />

      <Section>
        <SectionHeading
          title={
            <>
              Built on community <span className="text-mulearn">values</span>
            </>
          }
          description="At µLearn, we believe in the power of learning together."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {igCoreValues.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      <StepsSection
        title={
          <>
            Your learning <span className="text-mulearn">journey</span>
          </>
        }
        description="From curiosity to career readiness in five steps."
        steps={igJourneySteps}
        action={
          <Button asChild className="font-semibold">
            <Link href={JOIN_URL} target="_blank" rel="noopener noreferrer">
              Start your journey
            </Link>
          </Button>
        }
      />

      <InterestGroupDirectory groups={groups} />

      <CtaBanner
        title="Ready to find your tribe?"
        description="Join thousands of learners who are building skills, making connections and preparing for the careers of tomorrow."
        action={{ label: "Join an Interest Group", href: JOIN_URL, external: true }}
      />
    </div>
  );
}
