import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { ReactNode } from "react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Section, SectionHeading } from "@/components/sections";
import type { cardProps } from "../types";

const DEFAULT_TITLE = (
  <>
    Partnered <span className="text-mulearn">Events</span>
  </>
);

const hasLink = (link: string) => Boolean(link) && link !== "#";

function EventCard({ name, image, link, description, date, index }: cardProps & { index: number }) {
  const linked = hasLink(link);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index, 7) * 0.04, ease: "easeOut" }}
      className="h-full"
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mulearn/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mulearn/25 hover:shadow-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mulearn">
        <div className="relative aspect-[4/3] overflow-hidden bg-mulearn/5">
          <MuImage
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          {date && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mulearn-gray-600">
              <CalendarDays className="size-3.5 text-mulearn" aria-hidden="true" />
              {date}
            </span>
          )}

          <div className="mt-3 flex-1">
            <h3 className="text-xl font-bold leading-snug text-mulearn-blackish">
              {linked ? (
                // Stretched link: its ::after covers the card, so the whole card is clickable.
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
            {description && (
              <p className="mt-1.5 line-clamp-3 text-sm text-mulearn-gray-600">{description}</p>
            )}
          </div>

          <div className="mt-5 flex items-center justify-end border-t border-mulearn/10 pt-4 text-sm">
            {linked ? (
              <span
                aria-hidden="true"
                className="inline-flex items-center gap-1 whitespace-nowrap font-semibold text-mulearn"
              >
                Explore more
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            ) : (
              <span className="whitespace-nowrap font-semibold text-mulearn-gray-600">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </article>
    </MotionDiv>
  );
}

export function IGEvents({
  cards,
  title = DEFAULT_TITLE,
  description,
}: {
  cards: cardProps[];
  title?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <Section id="events">
      <SectionHeading title={title} description={description} />

      {/* Flex-wrap rather than grid so a partial last row centers. */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={card.name}
            className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <EventCard {...card} index={index} />
          </div>
        ))}
      </div>
    </Section>
  );
}
