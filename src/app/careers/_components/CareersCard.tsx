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
    <div className="w-80 rounded-2xl border border-mulearn-trusty-blue bg-mulearn-whitish p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      {logo && (
        <MuImage
          src={logo}
          alt="Company Logo"
          className="mx-auto mb-3 object-contain"
          width={150}
          height={125}
        />
      )}

      <p className="mb-3 text-center text-2xl font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
        {role}
      </p>

      {organization && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Organization:</span> {organization}
        </p>
      )}
      {remuneration && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Remuneration:</span> {remuneration}
        </p>
      )}
      {vacancies && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Vacancies:</span> {vacancies}
        </p>
      )}
      {location && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Location:</span> {location}
        </p>
      )}
      {duration && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
      )}
      {lastdate && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">Last Date:</span> {lastdate}
        </p>
      )}
      {extraField && extraContent && (
        <p className="mb-2 text-center text-base text-mulearn-blackish">
          <span className="font-semibold">{extraField}:</span> {extraContent}
        </p>
      )}

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {applylink && (
          <Link href={applylink} target="_blank" rel="noopener noreferrer">
            <Button variant="mulearn" className="px-5 py-2 font-semibold">
              Apply Now
            </Button>
          </Link>
        )}
        {jdlink && (
          <Link href={jdlink} target="_blank" rel="noopener noreferrer">
            <Button variant="mulearn" className="px-5 py-2 font-semibold">
              View JD
            </Button>
          </Link>
        )}
        {extraButton && (
          <Link href={extraButton} target="_blank" rel="noopener noreferrer">
            <Button variant="mulearn" className="px-5 py-2 font-semibold">
              View Challenge
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CareersCard;
