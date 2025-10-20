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
    <div className="m-4 flex w-[350px] items-center justify-between rounded-lg p-4 text-center shadow-md">
      <div className="flex-1">
        {title && (
          <p className="mb-2.5 text-center  text-2xl font-semibold text-mulearn-trusty-blue">
            {title}
          </p>
        )}

        <ul className="m-0 list-none p-0">
          {qualifications && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Qualifications:</strong> {qualifications}
            </li>
          )}
          {date && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Dated:</strong> {date}
            </li>
          )}
          {remuneration && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Package:</strong> {remuneration}
            </li>
          )}
          {role && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Roles:</strong> {role}
            </li>
          )}
          {duration && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Duration:</strong> {duration}
            </li>
          )}
          {location && (
            <li className="mb-2 text-base text-mulearn-blackish">
              <strong>Location:</strong> {location}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClosedCareersCard;
