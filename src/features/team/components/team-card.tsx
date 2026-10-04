"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cdnUrl } from "@/shared";
import type { TeamCardProps } from "../types";

const fallbackImage = cdnUrl("public/assets/team/default.webp");

export function TeamCard({
  name,
  designation,
  image,
  linkedin,
  github,
  x,
  muid,
  lead,
  team,
}: TeamCardProps) {
  const [showAllRoles, setShowAllRoles] = useState(false);

  const teamRoles: string[] = team
    ? team
        .split(",")
        .map((role) => role.trim())
        .filter((role) => role !== "")
    : [];

  const displayedRoles = showAllRoles ? teamRoles : teamRoles.slice(0, 1);
  const hiddenCount = teamRoles.length - 1;

  return (
    <Card className="mx-auto mt-4 max-w-md w-full">
      <CardContent className="flex flex-col sm:flex-row gap-4 p-6">
        <div className="flex justify-center sm:justify-start">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden">
            <MuImage
              src={image ? cdnUrl(image) : fallbackImage}
              alt={name}
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 w-full">
          <div>
            {name && <h3 className="text-2xl font-semibold">{name}</h3>}
            {(lead || designation) && (
              <p className="text-sm text-mulearn-gray-600">{lead ? `${lead} Lead` : designation}</p>
            )}
            {muid && <p className="text-[10px] text-mulearn-gray-600">{muid}</p>}
            {teamRoles.length > 0 && (
              <ul
                className={cn(
                  "flex flex-wrap justify-center sm:justify-end gap-1.5 mt-2 p-0 list-none overflow-hidden transition-all duration-300",
                  showAllRoles ? "max-h-none" : "max-h-[58px]",
                )}
              >
                {displayedRoles.map((role) => (
                  <li
                    key={role}
                    className="bg-mulearn-greyish/20 text-mulearn-gray-600 text-xs px-2.5 py-1 rounded-xl whitespace-normal"
                  >
                    {role}
                  </li>
                ))}
                {!showAllRoles && hiddenCount > 0 && (
                  <li>
                    <button
                      type="button"
                      className="bg-mulearn-greyish/20 text-mulearn-gray-600 px-2.5 py-1 rounded-xl text-xs font-medium cursor-pointer hover:bg-mulearn-greyish/40  transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowAllRoles(true);
                      }}
                    >
                      +{hiddenCount} more
                    </button>
                  </li>
                )}
              </ul>
            )}

            {(linkedin || github || x) && (
              <div className="flex flex-wrap justify-center sm:justify-end gap-2.5 mt-2">
                {linkedin && (
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mulearn-blackish hover:text-mulearn-trusty-blue transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </Link>
                )}
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mulearn-blackish hover:text-mulearn-trusty-blue transition-colors"
                  >
                    <FaGithub size={24} />
                  </Link>
                )}
                {x && (
                  <Link
                    href={x}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mulearn-blackish hover:text-mulearn-trusty-blue transition-colors"
                  >
                    <FaTwitter size={24} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
