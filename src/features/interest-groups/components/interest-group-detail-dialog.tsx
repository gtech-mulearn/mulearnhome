"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { InterestGroupDisplayItem } from "../types/interest-groups.types";
import { MemberCard } from "./member-card";

type Tab = "overview" | "team" | "projects";

export function InterestGroupDetailDialog({
  group,
  onOpenChange,
}: {
  group: InterestGroupDisplayItem | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTab("overview");
    onOpenChange(open);
  };

  const hasLeads = Boolean(group?.leads.length);
  const hasMentors = Boolean(group?.mentors.length);
  const hasThinktank = Boolean(group?.thinktank.length);
  const hasProjects = Boolean(group?.impact_projects.length);
  const hasTeam = hasLeads || hasMentors || hasThinktank;
  const totalTeamCount =
    (group?.leads.length || 0) + (group?.mentors.length || 0) + (group?.thinktank.length || 0);

  return (
    <Dialog open={!!group} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[88vh] overflow-y-auto p-0 rounded-3xl border border-mulearn-greyish/60 shadow-2xl bg-mulearn-whitish text-mulearn-blackish flex flex-col">
        {group && (
          <div className="flex flex-col min-h-0">
            <div className="bg-linear-to-br from-blue-50/90 via-mulearn-whitish to-indigo-50/60 p-6 md:p-8 border-b border-mulearn-greyish/60">
              <DialogHeader className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-mulearn-whitish border border-mulearn-greyish/60 shadow-md">
                    <MuImage src={group.image} alt={group.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-mulearn-blackish">
                      {group.name}
                    </DialogTitle>
                    {group.tagline ? (
                      <DialogDescription className="text-xs md:text-sm font-bold text-mulearn-trusty-blue mt-1">
                        {group.tagline}
                      </DialogDescription>
                    ) : null}

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {hasLeads && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                          {group.leads.length} Leads
                        </span>
                      )}
                      {hasMentors && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-mulearn-trusty-blue border border-blue-200">
                          {group.mentors.length} Mentors
                        </span>
                      )}
                      {hasThinktank && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">
                          {group.thinktank.length} Thinktank
                        </span>
                      )}
                      {hasProjects && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                          {group.impact_projects.length} Projects
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>
            </div>

            <div className="flex items-center gap-2 px-6 md:px-8 py-3 border-b border-mulearn-greyish/60 bg-mulearn-greyish/10 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap",
                  activeTab === "overview"
                    ? "bg-mulearn-whitish text-mulearn-trusty-blue shadow-xs border border-mulearn-greyish/60"
                    : "text-mulearn-gray-600 hover:text-mulearn-blackish",
                )}
              >
                Overview
              </button>
              {hasTeam && (
                <button
                  type="button"
                  onClick={() => setActiveTab("team")}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeTab === "team"
                      ? "bg-mulearn-whitish text-mulearn-trusty-blue shadow-xs border border-mulearn-greyish/60"
                      : "text-mulearn-gray-600 hover:text-mulearn-blackish",
                  )}
                >
                  <span>Team</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-700 font-bold">
                    {totalTeamCount}
                  </span>
                </button>
              )}
              {hasProjects && (
                <button
                  type="button"
                  onClick={() => setActiveTab("projects")}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                    activeTab === "projects"
                      ? "bg-mulearn-whitish text-mulearn-trusty-blue shadow-xs border border-mulearn-greyish/60"
                      : "text-mulearn-gray-600 hover:text-mulearn-blackish",
                  )}
                >
                  <span>Impact Projects</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-700 font-bold">
                    {group.impact_projects.length}
                  </span>
                </button>
              )}
            </div>

            <div className="p-6 md:p-8 space-y-7">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {group.description ? (
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-mulearn-gray-400">
                        About {group.name}
                      </h4>
                      <p className="text-sm md:text-base text-mulearn-gray-600 leading-relaxed bg-mulearn-greyish/10 p-4 md:p-5 rounded-2xl border border-mulearn-greyish/40">
                        {group.description}
                      </p>
                    </div>
                  ) : null}

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/60 text-center">
                      <p className="text-xl font-extrabold text-amber-700">{group.leads.length}</p>
                      <p className="text-[11px] font-semibold text-amber-800/80">Leads</p>
                    </div>
                    <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-200/60 text-center">
                      <p className="text-xl font-extrabold text-mulearn-trusty-blue">
                        {group.mentors.length}
                      </p>
                      <p className="text-[11px] font-semibold text-blue-800/80">Mentors</p>
                    </div>
                    <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-200/60 text-center">
                      <p className="text-xl font-extrabold text-purple-700">
                        {group.thinktank.length}
                      </p>
                      <p className="text-[11px] font-semibold text-purple-800/80">Thinktank</p>
                    </div>
                    <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-200/60 text-center">
                      <p className="text-xl font-extrabold text-emerald-700">
                        {group.impact_projects.length}
                      </p>
                      <p className="text-[11px] font-semibold text-emerald-800/80">Projects</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-mulearn-greyish/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                      {hasTeam && (
                        <Button variant="outline" size="sm" onClick={() => setActiveTab("team")}>
                          View Team Directory
                        </Button>
                      )}
                      {hasProjects && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setActiveTab("projects")}
                        >
                          View Impact Projects
                        </Button>
                      )}
                    </div>
                    <Button asChild variant="blue">
                      <a href={group.link} target="_blank" rel="noopener noreferrer">
                        Join &amp; Explore Group <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="space-y-7">
                  {hasLeads && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wider text-amber-600">
                            LEADS
                          </h4>
                          <p className="text-[11px] font-medium text-mulearn-gray-500">
                            Interest Group Leadership
                          </p>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                          {group.leads.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {group.leads.map((member) => (
                          <MemberCard
                            key={member.muid || member.full_name}
                            member={member}
                            isLead
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {hasMentors && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wider text-mulearn-trusty-blue">
                            MENTORS
                          </h4>
                          <p className="text-[11px] font-medium text-mulearn-gray-500">
                            Guidance &amp; Expertise
                          </p>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-mulearn-trusty-blue border border-blue-200">
                          {group.mentors.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {group.mentors.map((member) => (
                          <MemberCard key={member.muid || member.full_name} member={member} />
                        ))}
                      </div>
                    </div>
                  )}

                  {hasThinktank && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-wider text-purple-600">
                            THINKTANK
                          </h4>
                          <p className="text-[11px] font-medium text-mulearn-gray-500">
                            Community Advisors
                          </p>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                          {group.thinktank.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {group.thinktank.map((member) => (
                          <MemberCard key={member.muid || member.full_name} member={member} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "projects" && hasProjects && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-emerald-600">
                        IMPACT PROJECTS
                      </h4>
                      <p className="text-[11px] font-medium text-mulearn-gray-500">
                        Featured Community Projects
                      </p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {group.impact_projects.length}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {group.impact_projects.map((proj, pIdx) => (
                      <div
                        key={proj.id || pIdx}
                        className="flex flex-col md:flex-row gap-5 p-5 bg-mulearn-greyish/10 rounded-2xl border border-mulearn-greyish/60 hover:border-blue-300 transition-all duration-200"
                      >
                        {proj.image && (
                          <div className="relative w-full md:w-36 h-36 rounded-xl overflow-hidden shrink-0 border border-mulearn-greyish/60 bg-mulearn-greyish/20">
                            <MuImage
                              src={proj.image}
                              alt={proj.title || "Project"}
                              fill
                              sizes="144px"
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 space-y-3 min-w-0">
                          <div>
                            <h5 className="text-base font-bold text-mulearn-blackish">
                              {proj.title || "Impact Project"}
                            </h5>
                            {proj.description && (
                              <p className="text-xs text-mulearn-gray-600 leading-relaxed mt-1">
                                {proj.description}
                              </p>
                            )}
                          </div>

                          {proj.links && proj.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {proj.links.map((linkItem, lIdx) =>
                                linkItem.url ? (
                                  <a
                                    key={linkItem.url || lIdx}
                                    href={linkItem.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-mulearn-whitish text-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish rounded-xl border border-mulearn-greyish/60 transition-colors"
                                  >
                                    <span>{linkItem.label || "Link"}</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                ) : null,
                              )}
                            </div>
                          )}

                          {proj.team && proj.team.length > 0 && (
                            <div className="pt-2.5 border-t border-mulearn-greyish/40 space-y-1.5">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-mulearn-gray-400">
                                Project Contributors
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {proj.team.map((member) => (
                                  <div
                                    key={member.muid || member.name}
                                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-mulearn-whitish border border-mulearn-greyish/60 text-xs"
                                  >
                                    <span className="font-semibold text-mulearn-blackish">
                                      {member.name}
                                    </span>
                                    {member.is_lead && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-700">
                                        Lead
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
