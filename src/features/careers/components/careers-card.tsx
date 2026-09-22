import { format } from "date-fns";
import { Clock, File, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CareersCardProps } from "../types/careers.types";

const formatDate = (dateString?: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return format(date, "dd MMM yyyy");
};

export const CareersCard = ({
  role,
  remuneration,
  vacancies,
  location,
  lastdate,
  duration,
  applylink,
  jdlink,
  title,
  organization,
  posted_date,
}: CareersCardProps) => {
  const formattedPostedDate = formatDate(posted_date);
  const formattedLastDate = formatDate(lastdate);

  return (
    <Card className="w-80 rounded-2xl border border-mulearn-trusty-blue bg-mulearn-whitish p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4">
      {organization && <h4 className="text-left text-lg font-semibold">{organization}</h4>}
      {role && <h2 className="text-left text-2xl font-bold text-mulearn">{role}</h2>}
      {title && <p className="text-left text-base text-mulearn-blackish">{title}</p>}

      <div className="flex flex-col items-start gap-2 text-sm text-mulearn-blackish">
        {formattedPostedDate && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-left">Posted: {formattedPostedDate}</span>
          </div>
        )}
        {duration && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-left">{duration}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-left">{location}</span>
          </div>
        )}
        {remuneration && (
          <p className="text-left text-base text-mulearn-blackish">
            <span className="font-semibold">Remuneration:</span> {remuneration}
          </p>
        )}
        {Boolean(vacancies) && (
          <p className="text-left text-base text-mulearn-blackish">
            <span className="font-semibold">Vacancies:</span> {vacancies}
          </p>
        )}
        {formattedLastDate && (
          <p className="text-left text-base text-mulearn-blackish">
            <span className="font-semibold">Last Date:</span> {formattedLastDate}
          </p>
        )}
      </div>

      <CardContent className="mt-auto flex flex-col gap-2 w-full">
        {jdlink && (
          <Button
            asChild
            variant="default"
            className="w-full flex items-center justify-center gap-1 px-4 py-2"
          >
            <a href={jdlink} target="_blank" rel="noopener noreferrer">
              <File className="w-4 h-4" /> View JD
            </a>
          </Button>
        )}
        {applylink && (
          <Button
            asChild
            variant="default"
            className="w-full flex items-center justify-center gap-1 px-4 py-2"
          >
            <a href={applylink} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
