"use client";

import { Github, Instagram, Linkedin, type LucideIcon, Twitter } from "lucide-react";
import { useState } from "react";
import { MuImage } from "@/components/layouts";
import { cn } from "@/lib/utils";
import type { ApiMember } from "../types/interest-groups.types";

/** The API stores bare handles (e.g. "octocat"); a few entries are already full URLs. */
const SOCIALS: {
  key: "linkedin" | "github" | "twitter" | "instagram";
  label: string;
  icon: LucideIcon;
  profileUrl: (handle: string) => string;
}[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    profileUrl: (h) => `https://www.linkedin.com/in/${h}`,
  },
  { key: "github", label: "GitHub", icon: Github, profileUrl: (h) => `https://github.com/${h}` },
  { key: "twitter", label: "X", icon: Twitter, profileUrl: (h) => `https://x.com/${h}` },
  {
    key: "instagram",
    label: "Instagram",
    icon: Instagram,
    profileUrl: (h) => `https://www.instagram.com/${h}`,
  },
];

function toSocialUrl(value: string, profileUrl: (handle: string) => string) {
  if (/^https?:\/\//i.test(value)) return value;
  if (/^[\w.-]+\.[a-z]{2,}\//i.test(value)) return `https://${value}`; // "linkedin.com/in/x"
  return profileUrl(encodeURIComponent(value.replace(/^@/, "")));
}

export function MemberCard({ member, isLead = false }: { member: ApiMember; isLead?: boolean }) {
  const [imgError, setImgError] = useState(false);

  const initial = member.full_name?.trim()?.charAt(0)?.toUpperCase() || "?";
  const profilePicUrl = member.profile_pic || "";
  const hasValidPic = Boolean(profilePicUrl && profilePicUrl.trim() !== "" && !imgError);

  const roleOrContext =
    member.role || member.company || member.org || (member.muid ? `@${member.muid}` : "");

  const socials = SOCIALS.filter(({ key }) => member.socials?.[key]?.trim());

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 rounded-2xl border p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        isLead
          ? "border-mulearn/30 bg-mulearn-trusty-blue/5"
          : "border-mulearn/10 bg-card hover:border-mulearn/25",
      )}
    >
      <div
        className={cn(
          "relative flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-mulearn/10 font-bold text-mulearn",
          isLead ? "size-11 ring-2 ring-mulearn/40" : "size-10",
        )}
      >
        {hasValidPic ? (
          <MuImage
            src={profilePicUrl}
            alt={member.full_name}
            fill
            sizes="44px"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={isLead ? "text-base" : "text-sm"}>{initial}</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <h4 className="truncate text-sm font-bold text-mulearn-blackish transition-colors group-hover:text-mulearn">
            {member.full_name}
          </h4>
          {isLead && (
            <span className="shrink-0 rounded-full bg-mulearn px-1.5 py-px text-[10px] font-bold text-mulearn-whitish">
              Lead
            </span>
          )}
        </div>
        {roleOrContext && (
          <p className="mt-0.5 truncate text-xs font-medium text-mulearn-gray-600">
            {roleOrContext}
          </p>
        )}
      </div>

      {socials.length > 0 && (
        <div className="flex shrink-0 items-center gap-0.5">
          {socials.map(({ key, label, icon: Icon, profileUrl }) => (
            <a
              key={key}
              href={toSocialUrl(member.socials?.[key]?.trim() ?? "", profileUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-mulearn-gray-600 transition-colors hover:bg-mulearn/10 hover:text-mulearn"
              aria-label={`${member.full_name}'s ${label}`}
            >
              <Icon className="size-3.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
