import Link from "next/link";
import { MotionDiv } from "@/components/layouts";
import {
  CtaBanner,
  FeatureCard,
  IconList,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { levels, quietDreams, stakeholders } from "../data/levels.data";
import { LevelArticle } from "./level-article";
import { LevelsOverview } from "./levels-overview";

export function LevelStructureView() {
  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <PageHero
        title={
          <>
            The <span className="text-mulearn">µLearn</span> Odyssey
          </>
        }
        description="All learners enter college with a bag full of hopes and a pocket full of dreams. For most, the next three or four years are predictable: attend lectures, write exams, finish the degree. µLearn's seven levels turn those years into a journey."
        actions={
          <>
            <Button asChild className="font-semibold">
              <Link href="#levels">Begin the odyssey</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
                Join µLearn
              </Link>
            </Button>
          </>
        }
        image={{
          src: "/assets/level-structure/astronaut.webp",
          alt: "A µLearn astronaut leaping forward",
          width: 760,
          height: 903,
        }}
        imageClassName="max-w-[15rem] sm:max-w-xs lg:max-w-sm"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            align="left"
            title={
              <>
                Every learner holds <span className="text-mulearn">quiet dreams</span>
              </>
            }
            description="But they remain invisible until spoken aloud. And exactly at this point, their journey with µLearn begins."
            className="mx-auto text-center lg:mx-0 lg:text-left"
          />
          <IconList items={quietDreams} />
        </div>
      </Section>

      <LevelsOverview />

      <div className="mx-auto max-w-7xl px-6">
        {levels.map((level) => (
          <LevelArticle key={level.number} level={level} />
        ))}
      </div>

      <Section>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <figure className="mx-auto max-w-4xl border-l-4 border-mulearn pl-6 md:pl-8">
            <blockquote className="text-2xl md:text-3xl font-medium leading-snug text-mulearn-blackish text-pretty">
              “Instead of falling into the cycle they find in college, students can find their own
              path. A predictable college life turns extraordinary by investing in the right skills
              to complement their passion.”
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
          description="One journey, with value for everyone around the learner."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="A regenerative talent engine"
        description="µLearn is not just about learning. It transforms students into innovators, builders and global contributors."
        action={{
          label: "Start your odyssey",
          href: clientEnv.NEXT_PUBLIC_APP_URL,
          external: true,
        }}
      />
    </div>
  );
}
