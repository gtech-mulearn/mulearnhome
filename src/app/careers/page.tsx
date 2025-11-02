"use client";

import { useEffect, useState } from "react";
import CareersCard from "@/app/careers/_components/CareersCard";
import ClosedCareersCard from "@/app/careers/_components/ClosedCareersCard";
import axios from "axios";
import LogoLoop from "@/components/ui/LogoLoop";
import { companies } from "@/data/data";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";
import { NewHiringRole, PreviousHiringRole, Company } from "@/lib/types";

export default function Careers() {
  const [newHiring, setNewHiring] = useState<NewHiringRole[]>([]);
  const [previousHiring, setPreviousHiring] = useState<PreviousHiringRole[]>(
    []
  );
  const companyData: Company[] = companies;

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersOld"
      )
      .then((response) => {
        setPreviousHiring(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        "https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersNew"
      )
      .then((response) => {
        setNewHiring(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl sm:text-5xl lg:text-7xl font-semibold mb-5 sm:mb-12 text-mulearn-blackish">
              µLearn{" "}
              <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                Career Labs
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-mulearn-gray-600 mb-6 sm:mb-8">
              In search of a job opportunity / internship? µLearn Career Labs
              helps you connect with opportunities from the industry.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                  600+
                </span>
                <span className="text-base">Hired Candidates</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                  100+
                </span>
                <span className="text-base">Companies</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                  60+
                </span>
                <span className="text-base">Hiring Calls</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <MuImage
              src="/assets/career/career-hero.svg"
              alt="μLearn Career Illustration"
              width={400}
              height={400}
              className="w-49 sm:w-64 md:w-72 lg:w-80 h-auto rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-12 flex flex-nowrap overflow-x-auto">
        <LogoLoop
          logos={companyData.map((company) => ({
            ...company,
            src: company.src?.startsWith("http")
              ? company.src
              : cdnUrl(company.src),
          }))}
          speed={30}
          direction="left"
          logoHeight={30}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Career partners"
        />
      </div>

      {newHiring && newHiring.length > 0 && (
        <div className="mx-auto mt-30 block max-w-[1300px]">
          <div className="m-8">
            <h2 className="mt-8 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              New Hiring Calls
            </h2>
            <p className="mx-auto mb-4 block max-w-[40rem] text-center text-base">
              Unlock your potential and accelerate your career growth with the
              endless opportunities available on Career Labs
            </p>
            <div className="mt-8 flex flex-row flex-wrap items-stretch justify-around gap-4">
              {newHiring.map((role, idx) => (
                <CareersCard
                  key={idx}
                  logo={role.logo}
                  role={role.role}
                  remuneration={role.remuneration}
                  vacancies={role.vacancies}
                  location={role.location}
                  lastdate={role.lastdate}
                  applylink={role.applylink}
                  jdlink={role.jdlink}
                  duration={role.duration}
                  extraField={role.extrafieldname}
                  extraContent={role.extrafieldvalue}
                  extraButton={role.extrafieldlink}
                  organization={role.organization}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto mt-30 block max-w-[1300px]">
        <div className="m-8">
          <h2 className="mt-8 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
            Previous Hiring Calls
          </h2>
          <p className="mx-auto mb-4 block max-w-[40rem] text-center text-base">
            Listed below are the list of hiring calls that were announced
            through career labs previously.
          </p>
          <div className="mt-8 flex flex-row flex-wrap items-stretch justify-around gap-4">
            {previousHiring.map((role, idx) => (
              <ClosedCareersCard
                key={idx}
                title={role.title}
                qualifications={role.qualifications}
                date={role.date}
                role={role.role}
                remuneration={role.remuneration}
                location={role.location}
                duration={role.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
