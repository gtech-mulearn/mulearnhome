import type { Variants } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionLi } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import type { cardProps, IGSectionProps } from "@/lib/types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

const EventCard = ({ name, image, link, description, date }: cardProps) => {
  const hasLink = link !== "#";

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
      <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
        <MuImage
          src={image}
          alt={name}
          width={320}
          height={240}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-base font-bold text-mulearn-blackish">{name}</h3>
      {date ? <p className="mt-1 text-xs text-mulearn-gray-600">{date}</p> : null}
      <p className="mt-2 text-sm leading-relaxed text-mulearn-gray-600">{description}</p>

      {hasLink ? (
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-mulearn">
          Explore More
          <SquareArrowOutUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      ) : (
        <span className="mt-3 inline-flex text-xs font-bold uppercase tracking-wide text-mulearn-gray-600">
          Coming Soon!
        </span>
      )}
    </Link>
  );
};

const IGEvents = ({ cards, heading }: IGSectionProps) => {
  return (
    <section>
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>{heading ?? "Partnered Events"}</h2>
      </MotionDiv>

      <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <MotionLi
            key={card.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <EventCard {...card} />
          </MotionLi>
        ))}
      </ul>
    </section>
  );
};

export default IGEvents;
