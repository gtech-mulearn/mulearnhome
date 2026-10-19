"use client";

import { Search, SearchX } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { InterestGroupDisplayItem } from "../types/interest-groups.types";
import { CATEGORY_META } from "./group-icon";
import { InterestGroupCard } from "./interest-group-card";
import { InterestGroupDetailDialog } from "./interest-group-detail-dialog";

const ALL = "all";

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
        active
          ? "border-mulearn bg-mulearn text-mulearn-whitish"
          : "border-mulearn/15 bg-card text-mulearn-blackish hover:border-mulearn/40",
      )}
    >
      {label}
      <span className={cn("text-xs", active ? "text-mulearn-whitish/80" : "text-mulearn-gray-600")}>
        {count}
      </span>
    </button>
  );
}

export function InterestGroupDirectory({ groups }: { groups: InterestGroupDisplayItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(ALL);
  const [selectedGroup, setSelectedGroup] = useState<InterestGroupDisplayItem | null>(null);

  const categories = Object.keys(CATEGORY_META)
    .map((key) => ({ key, count: groups.filter((group) => group.category === key).length }))
    .filter(({ count }) => count > 0);

  const query = searchTerm.trim().toLowerCase();
  const filteredGroups = groups.filter(
    (group) =>
      (category === ALL || group.category === category) &&
      (group.name.toLowerCase().includes(query) || group.tagline.toLowerCase().includes(query)),
  );

  const totalMembers = groups.reduce((sum, group) => sum + (group.members ?? 0), 0);
  const isFiltered = Boolean(query) || category !== ALL;

  return (
    <Section id="groups">
      <SectionHeading
        title={
          <>
            Explore interest <span className="text-mulearn">groups</span>
          </>
        }
        description={
          totalMembers > 0
            ? `${groups.length} groups and ${totalMembers.toLocaleString("en-US")} learners. Choose a domain that excites you and start today.`
            : "Choose a domain that excites you and start your learning journey today."
        }
      />

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-mulearn-gray-600"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search by domain, e.g. AI, design, cloud"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 rounded-full border-mulearn/15 bg-card pl-13 pr-5 text-base shadow-sm focus-visible:border-mulearn focus-visible:ring-mulearn/20"
            aria-label="Search interest groups"
          />
        </div>

        {categories.length > 1 && (
          <fieldset className="mt-4 flex flex-wrap justify-center gap-2">
            <legend className="sr-only">Filter by category</legend>
            <FilterChip
              active={category === ALL}
              onClick={() => setCategory(ALL)}
              label="All"
              count={groups.length}
            />
            {categories.map(({ key, count }) => (
              <FilterChip
                key={key}
                active={category === key}
                onClick={() => setCategory(key)}
                label={CATEGORY_META[key].plural}
                count={count}
              />
            ))}
          </fieldset>
        )}

        {/* Always rendered (empty when unfiltered) so screen readers announce filter results. */}
        <p className="mt-4 min-h-5 text-center text-sm text-mulearn-gray-600" aria-live="polite">
          {isFiltered && `Showing ${filteredGroups.length} of ${groups.length} groups`}
        </p>
      </div>

      {filteredGroups.length > 0 ? (
        // Flex-wrap rather than grid so a partial last row centers. Widths are 1/2/3/4 columns
        // minus their share of the 1.5rem gap.
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {filteredGroups.map((group, index) => (
            <div
              key={group.id ?? group.name}
              className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
            >
              <InterestGroupCard group={group} index={index} onShowDetails={setSelectedGroup} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center rounded-3xl border border-dashed border-mulearn/20 px-6 py-14 text-center">
          <SearchX className="size-10 text-mulearn" strokeWidth={1.5} aria-hidden="true" />
          <p className="mt-4 text-lg font-semibold text-mulearn-blackish">No groups match</p>
          <p className="mt-1 text-mulearn-gray-600">
            Try a broader term like “web” or “data”, or another category.
          </p>
          <Button
            variant="outline"
            className="mt-6 rounded-full"
            onClick={() => {
              setSearchTerm("");
              setCategory(ALL);
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      <InterestGroupDetailDialog
        group={selectedGroup}
        onOpenChange={(open) => !open && setSelectedGroup(null)}
      />
    </Section>
  );
}
