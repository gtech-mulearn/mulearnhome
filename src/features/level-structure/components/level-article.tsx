import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/layouts";
import type { Level } from "../data/levels.data";

const pad = (n: number) => String(n).padStart(2, "0");

/** One level of the odyssey: number and title on the left (sticky), the story on the right. */
export function LevelArticle({ level }: { level: Level }) {
  return (
    <article
      id={`level-${level.number}`}
      className="grid scroll-mt-8 gap-8 border-t border-mulearn/10 py-16 last:border-b md:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:sticky lg:top-12 lg:self-start"
      >
        <p
          aria-hidden="true"
          className="font-(family-name:--font-display) text-7xl md:text-8xl font-black leading-none text-mulearn/15"
        >
          {pad(level.number)}
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-mulearn">
          Level {level.number}
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-balance">
          {level.title}
        </h2>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="space-y-6 lg:pt-4"
      >
        <p className="text-xl md:text-2xl font-medium leading-snug text-mulearn-blackish text-pretty">
          {level.lead}
        </p>

        {level.body?.map((paragraph) => (
          <p key={paragraph} className="text-lg text-mulearn-gray-600 text-pretty">
            {paragraph}
          </p>
        ))}

        {level.examples && (
          <ul className="space-y-3">
            {level.examples.map((example) => (
              <li
                key={example}
                className="border-l-2 border-mulearn/30 pl-4 text-lg text-mulearn-blackish"
              >
                {example}
              </li>
            ))}
          </ul>
        )}

        {level.tribes && (
          <div className="space-y-4">
            <ul className="flex flex-wrap gap-2">
              {level.tribes.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-mulearn/15 bg-card px-4 py-2 text-sm font-semibold text-mulearn-blackish shadow-xs"
                >
                  <Icon className="size-4 text-mulearn" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <Link
              href="/interest-groups"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-mulearn transition-[gap] hover:gap-2.5"
            >
              Explore all interest groups <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        )}

        {level.callout && (
          <div className="rounded-2xl bg-mulearn-trusty-blue/10 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-mulearn">
              {level.callout.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-mulearn-blackish text-pretty">
              {level.callout.text}
            </p>
          </div>
        )}
      </MotionDiv>
    </article>
  );
}
