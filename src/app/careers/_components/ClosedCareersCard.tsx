import { ClosedCareersCardProps } from "@/lib/types";

const ClosedCareersCard = ({
  date,
  title,
  location,
  qualifications,
  role,
  duration,
  remuneration,
}: ClosedCareersCardProps) => {
  return (
    <div className="relative w-[350px] rounded-2xl bg-mulearn-whitish shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple p-4 text-center">
        <h2 className="text-lg font-semibold text-mulearn-whitish">{title}</h2>
        <p className="text-sm text-mulearn-whitish">Closed on {date}</p>
      </div>

      <div className="p-5 space-y-2 text-mulearn-blackish text-sm">
        {role && (
          <p>
            <strong>Role:</strong> {role}
          </p>
        )}
        {location && (
          <p>
            <strong>Location:</strong> {location}
          </p>
        )}
        {duration && (
          <p>
            <strong>Duration:</strong> {duration}
          </p>
        )}
        {remuneration && (
          <p>
            <strong>Remuneration:</strong> {remuneration}
          </p>
        )}
        {qualifications && (
          <p>
            <strong>Qualifications:</strong> {qualifications}
          </p>
        )}
      </div>

      <div className="absolute top-3 right-3 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
        Closed
      </div>
    </div>
  );
};
export default ClosedCareersCard;
