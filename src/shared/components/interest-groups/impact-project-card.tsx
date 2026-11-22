"use client";

import { ChevronDown, ExternalLink, Github, Globe } from "lucide-react";
import { useState } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { cn } from "@/lib/utils";
import type { InterestGroupImpactProject } from "../../types";

/** Labels/urls arrive free-form ("github.com/x", a full demo URL); show a short, readable name. */
function linkDisplay(label: string, url: string) {
  const isGithub = /github/i.test(label) || /github\.com/i.test(url);
  if (isGithub) return { icon: Github, text: "GitHub" };

  const isDemo = /demo|live|preview/i.test(label);
  if (isDemo) return { icon: Globe, text: "Live preview" };

  if (label && !/^https?:\/\//i.test(label)) return { icon: ExternalLink, text: label };

  try {
    const { hostname } = new URL(url);
    return { icon: ExternalLink, text: hostname.replace(/^www\./, "") };
  } catch {
    return { icon: ExternalLink, text: label || url };
  }
}

export function ImpactProjectCard({
  project,
  defaultExpanded = false,
}: {
  project: InterestGroupImpactProject;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="overflow-hidden rounded-2xl border border-mulearn/10 bg-card">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`impact-project-${project.id}`}
        className="flex w-full cursor-pointer items-center gap-3 p-4 text-left"
      >
        {project.image ? (
          <div className="relative size-9 shrink-0 overflow-hidden rounded-lg bg-mulearn/10">
            <MuImage src={project.image} alt="" fill className="object-cover" />
          </div>
        ) : (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-mulearn/10 text-sm font-bold text-mulearn">
            {project.title.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="min-w-0 flex-1 truncate font-bold text-mulearn-blackish">
          {project.title}
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-mulearn-gray-600 transition-transform",
            expanded && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {expanded && (
        <div id={`impact-project-${project.id}`} className="space-y-3 px-4 pb-4">
          {project.description && (
            <p className="text-sm text-mulearn-gray-600">{project.description}</p>
          )}

          {project.team.length > 0 && (
            <p className="text-sm text-mulearn-gray-600">
              Built by{" "}
              {[...project.team]
                .sort((a, b) => Number(b.is_lead) - Number(a.is_lead))
                .map((member, index, sorted) => (
                  <span key={member.muid}>
                    <a
                      href={`${clientEnv.NEXT_PUBLIC_APP_URL}profile/${member.muid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "font-semibold text-mulearn-blackish hover:text-mulearn hover:underline",
                        member.is_lead && "text-mulearn",
                      )}
                    >
                      {member.name}
                    </a>
                    {member.is_lead && " (Lead)"}
                    {index < sorted.length - 2 && ", "}
                    {index === sorted.length - 2 && " and "}
                  </span>
                ))}
            </p>
          )}

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => {
                const { icon: Icon, text } = linkDisplay(link.label, link.url);
                return (
                  <Button
                    key={link.url}
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                      {text}
                    </a>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
