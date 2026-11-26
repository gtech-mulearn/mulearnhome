import Link from "next/link";
import { MotionDiv } from "@/components/layouts";
import {
  CtaBanner,
  FeatureCard,
  IconList,
  PageHero,
  Section,
  SectionHeading,
  StatPanel,
  StatTile,
  StepsSection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { tiEligibility, tiReasons, tiStats, tiSteps, tiTraits } from "../data/trivial-ideas.data";

const JOIN_URL = clientEnv.NEXT_PUBLIC_APP_URL;

export function TrivialIdeasView() {
  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <PageHero
        title={
          <>
            Small ideas, <span className="text-mulearn">real</span> rewards
          </>
        }
        description="Trivial Ideas is µLearn's monthly build initiative. Every month, members submit small projects and the best ones win from a ₹1 lakh prize pool. Twelve months. Twelve lakhs. Consistent building, recognised and rewarded."
        actions={
          <>
            <Button asChild className="font-semibold">
              <Link href="#how-it-works">How it works</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={JOIN_URL} target="_blank" rel="noopener noreferrer">
                Join µLearn
              </Link>
            </Button>
          </>
        }
        image={{
          src: "/assets/home/skill.svg",
          alt: "A learner building a small project at their desk",
          width: 500,
          height: 500,
        }}
        imageClassName="max-w-sm sm:max-w-md lg:max-w-lg"
      />

      <Section className="pt-0 md:pt-0">
        <StatPanel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {tiStats.map((stat) => (
              <StatTile
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </StatPanel>
      </Section>

      <Section>
        <SectionHeading
          title={
            <>
              Celebrating the <span className="text-mulearn">trivial</span>
            </>
          }
          description="An open challenge for small projects, ideas in action and unconventional builds. Not every idea needs to change the world. Some of the most interesting things get built when the stakes feel small and the freedom feels total."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiTraits.map((trait, index) => (
            <FeatureCard
              key={trait.title}
              icon={trait.icon}
              title={trait.title}
              description={trait.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      <StepsSection
        id="how-it-works"
        title={
          <>
            How it <span className="text-mulearn">works</span>
          </>
        }
        description="One cycle every month, year-round. Build, submit and get rewarded."
        steps={tiSteps}
        action={
          <Button asChild className="font-semibold">
            <Link href={JOIN_URL} target="_blank" rel="noopener noreferrer">
              Start building
            </Link>
          </Button>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            align="left"
            title={
              <>
                Open to <span className="text-mulearn">every</span> member
              </>
            }
            description="If you are part of µLearn and have an idea, you're in. Nothing to unlock first."
            className="mx-auto text-center lg:mx-0 lg:text-left"
          />
          <IconList items={tiEligibility} />
        </div>
      </Section>

      <Section>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <figure className="mx-auto max-w-4xl border-l-4 border-mulearn pl-6 md:pl-8">
            <blockquote className="text-2xl md:text-3xl font-medium leading-snug text-mulearn-blackish text-pretty">
              “Most members build for PoW, for Karma, for level progression. Trivial Ideas creates a
              different kind of motivation: the joy of building something small and seeing it
              recognised.”
            </blockquote>
          </figure>
        </MotionDiv>

        <SectionHeading
          className="mt-20"
          title={
            <>
              Why it <span className="text-mulearn">matters</span>
            </>
          }
          description="Small builds, every month, add up to something big."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiReasons.map((reason, index) => (
            <FeatureCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Got a trivial idea? Build it."
        description="A new cycle opens every month, year-round. However small, however unconventional, your idea belongs here."
        action={{ label: "Join µLearn", href: JOIN_URL, external: true }}
      />
    </div>
  );
}
