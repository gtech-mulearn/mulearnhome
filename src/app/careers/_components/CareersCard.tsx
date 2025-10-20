import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CareersCardProps } from "@/lib/types";

const CareersCard = ({
  role,
  remuneration,
  vacancies,
  location,
  lastdate,
  duration,
  logo,
  applylink,
  jdlink,
  extraField,
  extraContent,
  extraButton,
  organization,
}: CareersCardProps) => {
  return (
    <div className="w-80 rounded-lg border-2 border-mulearn-trusty-blue bg-white p-6 shadow-sm">
      {logo && (
        <MuImage
          src={logo}
          alt="Company Logo"
          className="mx-auto mb-2.5 object-contain"
          width={150}
          height={125}
        />
      )}
      <p className="mb-2.5 text-center  text-[1.75rem] font-semibold text-mulearn-trusty-blue">
        {role}
      </p>

      {remuneration && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Remuneration:
          </span>
          <span className="mr-2.5 ">{remuneration}</span>
        </p>
      )}

      {vacancies && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Vacancies:
          </span>
          <span className="mr-2.5 ">{vacancies}</span>
        </p>
      )}

      {organization && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Organization:
          </span>
          <span className="mr-2.5 ">{organization}</span>
        </p>
      )}

      {location && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Location:
          </span>
          <span className="mr-2.5 ">{location}</span>
        </p>
      )}

      {lastdate && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Last Date:
          </span>
          <span className="mr-2.5 ">{lastdate}</span>
        </p>
      )}

      {duration && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            Duration:
          </span>
          <span className="mr-2.5 ">{duration}</span>
        </p>
      )}

      {extraField && extraContent && (
        <p className="mb-2.5 text-center text-base">
          <span className="mr-1.5 whitespace-nowrap  font-bold text-mulearn-blackish">
            {extraField}
          </span>
          <span className="mr-2.5 ">{extraContent}</span>
        </p>
      )}

      <div className="flex flex-wrap items-center justify-evenly gap-y-2">
        {applylink && (
          <Link href={applylink} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"mulearn-blue"}
              className="mr-4 px-[15px] py-2.5 font-bold"
            >
              Apply Now
            </Button>
          </Link>
        )}
        {jdlink && (
          <Link href={jdlink} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"mulearn-blue"}
              className="mr-4 px-[15px] py-2 font-bold"
            >
              View JD
            </Button>
          </Link>
        )}
        {extraButton && (
          <Link href={extraButton} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"mulearn-blue"}
              className="mr-4 cursor-pointer px-[15px] py-2 font-bold"
            >
              View Challenge
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CareersCard;
