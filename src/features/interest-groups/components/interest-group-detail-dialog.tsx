"use client";

import { BadgeCheck, Check, Clock, ExternalLink, GraduationCap, Users, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ApiMember, InterestGroupDisplayItem } from "../types/interest-groups.types";
import { GroupAbout } from "./group-about";
import { CATEGORY_META, GroupMark } from "./group-icon";
import { MemberCard } from "./member-card";

const TEAM_SECTION_ID = "ig-dialog-team";

const plural = (count: number, word: string) =>
  `${count.toLocaleString("en-US")} ${count === 1 ? word : `${word}s`}`;

const AsideHeading = ({ children }: { children: ReactNode }) => (
  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-mulearn">{children}</h4>
);

function MetaItem({ icon: Icon, children }: { icon: typeof Users; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="size-4 text-mulearn" aria-hidden="true" />
      {children}
    </span>
  );
}

const VISIBLE_CAREERS = 8;

function CareerPaths({ careers }: { careers: string[] }) {
  const [showAll, setShowAll] = useState(false);
  const hidden = careers.length - VISIBLE_CAREERS;
  const visible = showAll || hidden <= 0 ? careers : careers.slice(0, VISIBLE_CAREERS);

  return (
    <div>
      <AsideHeading>Career paths</AsideHeading>
      <ul className="flex flex-wrap gap-2">
        {visible.map((career) => (
          <li
            key={career}
            className="rounded-full border border-mulearn/15 bg-card px-3 py-1 text-sm text-mulearn-blackish"
          >
            {career}
          </li>
        ))}
        {hidden > 0 && (
          <li>
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="cursor-pointer rounded-full bg-mulearn px-3 py-1 text-sm font-semibold text-mulearn-whitish transition-opacity hover:opacity-90"
            >
              {showAll ? "Show fewer" : `+${hidden} more`}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

function TeamGroup({
  title,
  members,
  isLead = false,
}: {
  title: string;
  members: ApiMember[];
  isLead?: boolean;
}) {
  if (members.length === 0) return null;
  return (
    <div>
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-mulearn-gray-600">
        {title}
      </h4>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.muid || member.full_name} member={member} isLead={isLead} />
        ))}
      </div>
    </div>
  );
}

export function InterestGroupDetailDialog({
  group,
  onOpenChange,
}: {
  group: InterestGroupDisplayItem | null;
  onOpenChange: (open: boolean) => void;
}) {
  const category = group?.category ? CATEGORY_META[group.category] : undefined;
  const teamCount =
    (group?.leads.length ?? 0) + (group?.mentors.length ?? 0) + (group?.thinktank.length ?? 0);
  const hasAside = Boolean(
    group &&
      (group.prerequisites.length ||
        group.careers.length ||
        group.officeHours ||
        group.resources.length),
  );

  return (
    <Dialog open={!!group} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="block max-h-[90vh] gap-0 overflow-y-auto rounded-3xl border-mulearn/10 bg-mulearn-whitish p-0 text-mulearn-blackish shadow-2xl sm:max-w-5xl"
      >
        <DialogClose className="absolute top-4 right-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-card text-mulearn-blackish shadow-sm ring-1 ring-mulearn/10 transition-colors hover:bg-mulearn hover:text-mulearn-whitish">
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </DialogClose>
        {group && (
          <>
            {/* Header: same two-column language as the page hero — copy left, art right. */}
            {/* Extra right padding at md+ keeps the cover clear of the close button. */}
            <div className="grid items-center gap-8 p-6 pt-14 md:grid-cols-[minmax(0,1fr)_17rem] md:p-10 md:pr-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-mulearn">
                  {category ? `${category.label} interest group` : "Interest group"}
                </p>
                <DialogTitle className="mt-2 text-4xl md:text-5xl font-black leading-tight text-balance text-mulearn-blackish">
                  {group.name}
                </DialogTitle>
                <DialogDescription
                  className={
                    group.hasCuratedTagline ? "mt-3 text-lg text-mulearn-gray-600" : "sr-only"
                  }
                >
                  {group.hasCuratedTagline
                    ? group.tagline
                    : `Details about the ${group.name} interest group.`}
                </DialogDescription>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-mulearn-blackish">
                  {group.members !== undefined && (
                    <MetaItem icon={Users}>{plural(group.members, "member")}</MetaItem>
                  )}
                  {group.leads.length > 0 && (
                    <MetaItem icon={BadgeCheck}>{plural(group.leads.length, "lead")}</MetaItem>
                  )}
                  {group.mentors.length > 0 && (
                    <MetaItem icon={GraduationCap}>
                      {plural(group.mentors.length, "mentor")}
                    </MetaItem>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="font-semibold">
                    <a href={group.link} target="_blank" rel="noopener noreferrer">
                      Join &amp; explore group <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  {teamCount > 0 && (
                    <Button
                      variant="outline"
                      className="rounded-full"
                      onClick={() =>
                        document
                          .getElementById(TEAM_SECTION_ID)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    >
                      Meet the team
                    </Button>
                  )}
                </div>
              </div>

              <GroupMark
                name={group.name}
                category={group.category}
                className="hidden aspect-8/5 md:block"
              />
            </div>

            {(group.about || hasAside) && (
              <div className="grid gap-10 border-t border-mulearn/10 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_19rem]">
                {group.about && (
                  <div>
                    <h3 className="mb-4 text-2xl md:text-3xl font-black">
                      About <span className="text-mulearn">{group.name}</span>
                    </h3>
                    <GroupAbout key={group.id ?? group.name} about={group.about} />
                  </div>
                )}

                {hasAside && (
                  <aside className="space-y-7 self-start rounded-3xl bg-mulearn-trusty-blue/10 p-6">
                    {group.prerequisites.length > 0 && (
                      <div>
                        <AsideHeading>Skills to start with</AsideHeading>
                        <ul className="space-y-2">
                          {group.prerequisites.map((item) => (
                            <li key={item} className="flex gap-2.5 text-sm text-mulearn-blackish">
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-mulearn"
                                strokeWidth={2.5}
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {group.careers.length > 0 && (
                      <CareerPaths key={group.id ?? group.name} careers={group.careers} />
                    )}

                    {group.officeHours && (
                      <div>
                        <AsideHeading>Office hours</AsideHeading>
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-mulearn-blackish">
                          <Clock className="size-4 text-mulearn" aria-hidden="true" />
                          {group.officeHours}
                        </p>
                      </div>
                    )}

                    {group.resources.length > 0 && (
                      <div>
                        <AsideHeading>Resources</AsideHeading>
                        <ul className="space-y-2">
                          {group.resources.map((resource) => (
                            <li key={resource.url}>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-mulearn hover:underline"
                              >
                                {resource.label}
                                <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </aside>
                )}
              </div>
            )}

            {teamCount > 0 && (
              <div
                id={TEAM_SECTION_ID}
                className="scroll-mt-4 space-y-6 border-t border-mulearn/10 p-6 md:p-10"
              >
                <h3 className="text-2xl md:text-3xl font-black">
                  Meet the <span className="text-mulearn">team</span>
                </h3>
                <TeamGroup title="Leads" members={group.leads} isLead />
                <TeamGroup title="Mentors" members={group.mentors} />
                <TeamGroup title="Thinktank" members={group.thinktank} />
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
