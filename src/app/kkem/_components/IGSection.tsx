import type { Variants } from "framer-motion";
import {
  Cloud,
  Code2,
  Cpu,
  Gamepad2,
  Glasses,
  LayoutDashboard,
  type LucideIcon,
  Megaphone,
  Palette,
  ShieldCheck,
  SquareArrowOutUpRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionLi } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import type { IGSectionProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { cdnUrl } from "@/services/cdn";
import GetStartedButton from "./GetStartedButton";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

/** Presentation-only mapping: category icon + accent token per interest group. */
const IG_META: Record<string, { icon: LucideIcon; chip: string; accent: string }> = {
  "UI/UX": { icon: Palette, chip: "bg-category-blue", accent: "text-category-blue" },
  "Web Development": { icon: Code2, chip: "bg-category-purple", accent: "text-category-purple" },
  Cybersecurity: { icon: ShieldCheck, chip: "bg-category-teal", accent: "text-category-teal" },
  "Game Development": { icon: Gamepad2, chip: "bg-category-amber", accent: "text-category-amber" },
  "Internet Of Things (IOT) And Robotics": {
    icon: Cpu,
    chip: "bg-category-pink",
    accent: "text-category-pink",
  },
  "Digital Marketing": {
    icon: Megaphone,
    chip: "bg-category-slate",
    accent: "text-category-slate",
  },
  "Cloud and DevOps": { icon: Cloud, chip: "bg-category-blue", accent: "text-category-blue" },
  "Product Management": {
    icon: LayoutDashboard,
    chip: "bg-category-purple",
    accent: "text-category-purple",
  },
  Entrepreneurship: { icon: Zap, chip: "bg-category-teal", accent: "text-category-teal" },
  "AR/VR": { icon: Glasses, chip: "bg-category-amber", accent: "text-category-amber" },
};

const fallbackMeta = { icon: Palette, chip: "bg-category-blue", accent: "text-category-blue" };

const IGSection = ({ cards }: IGSectionProps) => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Learning Circles banner */}
      <MotionDiv
        className="overflow-hidden rounded-3xl bg-mulearn px-6 py-10 sm:px-10 md:px-12 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-mulearn-whitish">Introducing Learning Circles</h2>
            <p className="mt-6 text-base leading-relaxed text-mulearn-whitish/90">
              An informal mechanism for bringing together learners who are interested in the same
              topic from across different fields and disciplines. A fantastic way to spend a small
              amount of time learning about new things with a group of people with same interests!
            </p>
            <GetStartedButton />
          </div>

          <div className="hidden shrink-0 rounded-2xl bg-mulearn-whitish/10 p-6 md:block">
            <MuImage
              src={cdnUrl("src/modules/Public/KKEM/assets/IGS/fvimg.webp")}
              alt="Illustration of two friends learning together"
              width={340}
              height={300}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </MotionDiv>

      {/* Existing Interest Groups */}
      <section id="interest-groups">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Existing Interest Groups</h2>
          <p className="mt-3 text-base text-mulearn-gray-600">
            Ten active communities, each led by students building real skill together.
          </p>
        </MotionDiv>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2">
          {cards.map((card, index) => {
            const meta = IG_META[card.name] ?? fallbackMeta;
            const Icon = meta.icon;

            return (
              <MotionLi
                key={card.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: (index % 2) * 0.1 }}
                className={cn(
                  "border-b border-border py-6 last:border-b-0",
                  "md:odd:border-r md:odd:pr-10 md:even:pl-10",
                  "md:nth-last-[-n+2]:border-b-0",
                )}
              >
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4"
                >
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl",
                      meta.chip,
                    )}
                  >
                    <Icon className="size-5 text-mulearn-whitish" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-mulearn-blackish md:text-lg">
                      {card.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-mulearn-gray-600">
                      {card.description}
                    </p>
                    <span
                      className={cn(
                        "mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide",
                        meta.accent,
                      )}
                    >
                      Explore More
                      <SquareArrowOutUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </MotionLi>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default IGSection;
