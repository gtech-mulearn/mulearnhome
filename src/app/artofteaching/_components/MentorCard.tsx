import { Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type MentorAccent = "blue" | "purple" | "amber";

interface MentorCardProps {
  name: string;
  designation: string;
  linkedIn?: string;
  accent: MentorAccent;
}

const accentStyles: Record<MentorAccent, { card: string; avatar: string }> = {
  blue: { card: "bg-mulearn/5", avatar: "bg-mulearn" },
  purple: { card: "bg-category-purple/10", avatar: "bg-category-purple" },
  amber: { card: "bg-category-amber/10", avatar: "bg-category-amber" },
};

/** Honorific-aware initials: "Dr T M George" -> "TG", "Ann Andrews" -> "AA". */
const honorifics = new Set(["dr", "mr", "mrs", "ms", "prof"]);
function getInitials(name: string) {
  const parts = name
    .split(/\s+/)
    .filter((word) => !honorifics.has(word.toLowerCase().replace(/\.$/, "")));
  if (parts.length === 0) return name.slice(0, 2).toUpperCase();
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return `${first}${last}`.toUpperCase();
}

const MentorCard = ({ name, designation, linkedIn, accent }: MentorCardProps) => {
  const styles = accentStyles[accent];

  return (
    <div className={cn("flex flex-col items-center rounded-2xl p-8 text-center", styles.card)}>
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-full text-lg font-bold text-mulearn-whitish",
          styles.avatar,
        )}
      >
        {getInitials(name)}
      </div>

      <h3 className="mt-4 text-base font-bold text-mulearn-blackish">{name}</h3>

      {linkedIn ? (
        <Link
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-2 inline-flex text-mulearn-trusty-blue transition-opacity hover:opacity-80"
        >
          <Linkedin className="size-5" />
        </Link>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-mulearn-gray-600">{designation}</p>
    </div>
  );
};

export default MentorCard;
