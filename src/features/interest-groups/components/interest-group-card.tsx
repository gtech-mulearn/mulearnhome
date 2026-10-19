import { ArrowRight, Users } from "lucide-react";
import { MotionDiv } from "@/components/layouts";
import type { InterestGroupDisplayItem } from "../types/interest-groups.types";
import { CATEGORY_META, groupIcon } from "./group-icon";

interface InterestGroupCardProps {
  group: InterestGroupDisplayItem;
  index: number;
  onShowDetails: (group: InterestGroupDisplayItem) => void;
}

export function InterestGroupCard({ group, index, onShowDetails }: InterestGroupCardProps) {
  const Icon = groupIcon(group.name, group.category);
  const category = group.category ? CATEGORY_META[group.category] : undefined;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // cap the stagger so cards far down the grid don't wait seconds to appear
      transition={{ duration: 0.45, delay: Math.min(index, 7) * 0.04, ease: "easeOut" }}
      className="h-full"
    >
      <article className="group relative flex h-full flex-col rounded-2xl border border-mulearn/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mulearn/25 hover:shadow-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mulearn">
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-mulearn/10 text-mulearn transition-colors duration-300 group-hover:bg-mulearn group-hover:text-mulearn-whitish">
            <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          {category && (
            <span className="pt-1 text-xs font-semibold uppercase tracking-wider text-mulearn-gray-600">
              {category.label}
            </span>
          )}
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-xl font-bold leading-snug text-mulearn-blackish">
            {/* Stretched button: its ::after covers the card, so the whole card opens the details. */}
            <button
              type="button"
              onClick={() => onShowDetails(group)}
              className="cursor-pointer text-left outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
            >
              {group.name}
            </button>
          </h3>
          {group.tagline && (
            <p className="mt-1.5 line-clamp-2 text-sm text-mulearn-gray-600">{group.tagline}</p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-mulearn/10 pt-4 text-sm">
          {group.members !== undefined ? (
            <span
              title={`${group.members.toLocaleString("en-US")} members`}
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-mulearn-blackish"
            >
              <Users className="size-4 text-mulearn" aria-hidden="true" />
              {group.members.toLocaleString("en-US")}
              <span className="sr-only"> members</span>
            </span>
          ) : (
            <span />
          )}
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1 whitespace-nowrap font-semibold text-mulearn"
          >
            View details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </article>
    </MotionDiv>
  );
}
