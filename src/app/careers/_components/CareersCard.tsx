import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CareersCardProps {
  organization?: string;
  role?: string;
  location?: string;
  lastdate?: string;
  jdlink?: string;
  applylink?: string;
  /** Index in the list — drives the cycling category accent. */
  index: number;
}

const chipColors = [
  "bg-category-blue",
  "bg-category-purple",
  "bg-category-teal",
  "bg-category-amber",
  "bg-category-pink",
  "bg-category-slate",
];

/** "Idea Tribe" -> "IT", "Logidots" -> "Lo", "CTLG" -> "C". */
function getInitials(name: string) {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) return `${words[0][0]}${words[1][0]}`.toUpperCase();
  const word = words[0] ?? "";
  if (word === word.toUpperCase()) return word.slice(0, 1);
  return word.slice(0, 2);
}

const CareersCard = ({
  organization,
  role,
  location,
  lastdate,
  jdlink,
  applylink,
  index,
}: CareersCardProps) => {
  const chip = chipColors[index % chipColors.length];
  const meta = [location, lastdate ? `Last Date: ${lastdate}` : null].filter(Boolean).join(" · ");

  return (
    <article className="flex gap-4">
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-mulearn-whitish",
          chip,
        )}
      >
        {organization ? getInitials(organization) : "?"}
      </span>

      <div className="min-w-0 flex-1">
        {organization ? <p className="text-sm text-mulearn-gray-600">{organization}</p> : null}
        <h3 className="text-base font-bold text-mulearn-blackish md:text-lg">{role}</h3>
        {meta ? <p className="mt-1 text-sm text-mulearn-gray-600">{meta}</p> : null}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {jdlink ? (
            <Button asChild variant="outline" size="sm">
              <a href={jdlink} target="_blank" rel="noopener noreferrer">
                View JD
              </a>
            </Button>
          ) : null}

          {applylink ? (
            <Button asChild variant="outline" size="sm" className="text-mulearn">
              <a href={applylink} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default CareersCard;
