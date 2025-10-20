"use client";
feature/careers-page
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { careers } from "@/data/data";
import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-mulearn-whitish text-mulearn-blackish font-sans">
      <section className="py-20 px-6 md:px-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-mulearn-trusty mb-4">
          Join the MuLearn Team
        </h1>
        <p className="text-mulearn-gray-600 max-w-2xl mx-auto mb-10">
          Be a part of a mission-driven community shaping the future of learning,
          collaboration, and innovation. Explore current openings below.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((job) => (
            <Card
              key={job.id}
              className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={job.image || "/placeholder.svg"}
                alt={job.title}
                className="w-full h-40 object-cover"
              />

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#0056D2]">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{job.department}</p>
                <p className="text-gray-700 text-sm flex-grow">{job.description}</p>

                {/* Button */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-gradient-to-r from-[#4C6EF5] to-[#228BE6] text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  Apply Now
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
import { useEffect, useState } from "react";
import CareersCard from "@/app/careers/_components/CareersCard";
import ClosedCareersCard from "@/app/careers/_components/CloedCareersCard";
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
              <span className="text-mulearn-trusty-blue">Career Labs</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-mulearn-gray-600 mb-6 sm:mb-8">
              In search of a job opportunity / internship? µLearn Career Labs
              helps you connect with opportunities from the industry.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold text-mulearn-trusty-blue">
                  600+
                </span>
                <span className="text-base">Hired Candidates</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold text-mulearn-trusty-blue">
                  100+
                </span>
                <span className="text-base">Companies</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[1.6rem] md:text-[2rem] font-semibold text-mulearn-trusty-blue">
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
          logoHeight={20}
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
            <h2 className="mt-8 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-mulearn-trusty-blue">
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
          <h2 className="mt-8 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-mulearn-trusty-blue">
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
dev
  );
}
