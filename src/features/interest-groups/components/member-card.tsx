"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MuImage } from "@/components/layouts";
import { cn } from "@/lib/utils";
import type { ApiMember } from "../types/interest-groups.types";

export function MemberCard({ member, isLead = false }: { member: ApiMember; isLead?: boolean }) {
  const [imgError, setImgError] = useState(false);

  const initial = member.full_name?.trim()?.charAt(0)?.toUpperCase() || "?";
  const profilePicUrl = member.profile_pic || "";
  const hasValidPic = Boolean(profilePicUrl && profilePicUrl.trim() !== "" && !imgError);

  const roleOrContext =
    member.role || member.company || member.org || (member.muid ? `@${member.muid}` : "");

  const hasSocials =
    member.socials &&
    Boolean(
      (member.socials.linkedin && member.socials.linkedin.trim() !== "") ||
        (member.socials.github && member.socials.github.trim() !== "") ||
        (member.socials.twitter && member.socials.twitter.trim() !== ""),
    );

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 p-3.5 rounded-2xl transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 border",
        isLead
          ? "bg-gradient-to-br from-amber-50/80 via-white to-blue-50/50 border-amber-200/90 hover:border-amber-300"
          : "bg-white border-slate-200/80 hover:border-blue-300",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 rounded-full flex items-center justify-center font-bold select-none overflow-hidden",
          isLead
            ? "w-11 h-11 bg-amber-100 text-amber-700 ring-2 ring-amber-400/50"
            : "w-10 h-10 bg-blue-50 text-mulearn-trusty-blue border border-slate-200/80",
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

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-mulearn-trusty-blue transition-colors">
            {member.full_name}
          </h4>
          {isLead && (
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-700 border border-amber-200 shrink-0">
              Lead
            </span>
          )}
        </div>
        {roleOrContext && (
          <p className="text-[11px] font-medium text-slate-600 truncate mt-0.5">{roleOrContext}</p>
        )}
        {member.muid && (
          <p className="text-[9px] font-mono text-slate-400 truncate">µID: {member.muid}</p>
        )}
      </div>

      {hasSocials && (
        <div className="flex items-center gap-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
          {member.socials?.linkedin && member.socials.linkedin.trim() !== "" && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label={`${member.full_name}'s LinkedIn`}
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials?.github && member.socials.github.trim() !== "" && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={`${member.full_name}'s GitHub`}
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials?.twitter && member.socials.twitter.trim() !== "" && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-500 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={`${member.full_name}'s Twitter`}
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
