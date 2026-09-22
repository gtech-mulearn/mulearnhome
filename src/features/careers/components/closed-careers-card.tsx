import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ClosedCareersCardProps } from "../types/careers.types";

const formatDate = (dateString?: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const ClosedCareersCard = ({
  title,
  role,
  organization,
  location,
  lastdate,
  remuneration,
  vacancies,
  duration,
  extracontent,
}: ClosedCareersCardProps) => {
  const formattedLastDate = formatDate(lastdate);

  return (
    <Card className="relative w-[350px] rounded-2xl bg-mulearn-whitish shadow-lg border border-mulearn-greyish overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col items-start">
      <div className="bg-mulearn p-4 pr-20 text-left w-full">
        <h2 className="text-lg font-semibold text-mulearn-whitish">{organization}</h2>
      </div>

      <CardContent className="p-5 flex flex-col items-start gap-2 text-mulearn-blackish text-sm">
        {role && (
          <p className="text-left">
            <strong>Role:</strong> {role}
          </p>
        )}
        {title && (
          <p className="text-left">
            <strong>Title:</strong> {title}
          </p>
        )}
        {location && (
          <p className="text-left">
            <strong>Location:</strong> {location}
          </p>
        )}
        {duration && (
          <p className="text-left">
            <strong>Duration:</strong> {duration}
          </p>
        )}
        {remuneration && (
          <p className="text-left">
            <strong>Remuneration:</strong> {remuneration}
          </p>
        )}
        {Boolean(vacancies) && (
          <p className="text-left">
            <strong>Vacancies:</strong> {vacancies}
          </p>
        )}
        {formattedLastDate && (
          <p className="text-left">
            <strong>Closed on:</strong> {formattedLastDate}
          </p>
        )}
        {extracontent && (
          <p className="text-left">
            <strong>Note:</strong> {extracontent}
          </p>
        )}
      </CardContent>

      <Badge variant="destructive" className="absolute top-3 right-3 z-10">
        Closed
      </Badge>
    </Card>
  );
};
