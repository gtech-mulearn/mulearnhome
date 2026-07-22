"use client";

import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CareersCard from "@/app/careers/_components/CareersCard";
import CareersStats from "@/app/careers/_components/CareersStats";
import ClosedCareersCard from "@/app/careers/_components/ClosedCareersCard";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/LogoLoop";
import { companies } from "@/data/company";
import type { Company, NewHiringRole, PreviousHiringRole } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";

export default function Careers() {
  const [newHiring, setNewHiring] = useState<NewHiringRole[]>([]);
  const [previousHiring, setPreviousHiring] = useState<PreviousHiringRole[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const companyData: Company[] = companies;

  useEffect(() => {
    axios
      .get("https://opensheet.elk.sh/1hD8IsJvvQ-aJuIjJlPMfwFOkFKo5TRveUeq0rY2SlWk/careersOld")
      .then((response) => {
        setPreviousHiring(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://opensheet.elk.sh/1hD8IsJvvQ-aJuIjJlPMfwFOkFKo5TRveUeq0rY2SlWk/careersNew")
      .then((response) => {
        setNewHiring(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalPages = Math.ceil(previousHiring.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = previousHiring.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("previous-hiring")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      const showPage =
        i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1);

      const showEllipsis =
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2);

      if (showEllipsis) {
        pages.push({ type: "ellipsis", key: `ellipsis-${i}` });
      } else if (showPage) {
        pages.push({ type: "page", number: i, key: i });
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl sm:text-5xl lg:text-7xl font-semibold mb-5 sm:mb-12 text-mulearn-blackish">
              µLearn <span className="text-mulearn">Career Labs</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-mulearn-gray-600 mb-6 sm:mb-8">
              In search of a job opportunity / internship? µLearn Career Labs helps you connect with
              opportunities from the industry.
            </p>

            <CareersStats />
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="/contact?intent=hiring#get-in-touch">
                <Button size="lg" className="text-base font-semibold">
                  Post your job openings
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <MuImage
              src="/assets/career/career-hero.svg"
              alt="μLearn Career Illustration"
              width={400}
              height={400}
              className="w-49 sm:w-64 md:w-72 lg:w-80 h-auto rounded-2xl object-cover"
              preload
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-12 flex flex-nowrap overflow-x-auto">
        <LogoLoop
          logos={companyData.map((company) => ({
            ...company,
            src: company.src?.startsWith("http") ? company.src : cdnUrl(company.src),
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
            <h2 className="mt-8 text-center text-mulearn">New Hiring Calls</h2>
            <p className="mx-auto mb-4 block max-w-[40rem] text-center text-base">
              Unlock your potential and accelerate your career growth with the endless opportunities
              available on Career Labs
            </p>
            <div className="mt-8 flex flex-row flex-wrap items-stretch justify-around gap-4">
              {newHiring.map((role) => (
                <CareersCard
                  key={role.role}
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

      <div id="previous-hiring" className="mx-auto mt-30 block max-w-[1300px]">
        <div className="m-8">
          <h2 className="mt-8 text-center text-mulearn">Previous Hiring Calls</h2>
          <p className="mx-auto mb-4 block max-w-[40rem] text-center text-base">
            Listed below are the list of hiring calls that were announced through career labs
            previously.
          </p>

          <div className="mt-8 flex flex-row flex-wrap items-stretch justify-around gap-4">
            {currentItems.map((role) => {
              return (
                <ClosedCareersCard
                  key={`${role.title}-${role.location}-${role.company}`}
                  title={role.title}
                  qualifications={role.qualifications}
                  date={role.date}
                  role={role.role}
                  remuneration={role.remuneration}
                  location={role.location}
                  duration={role.duration}
                  organization={role.company}
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm font-medium">Previous</span>
                </Button>

                <div className="flex items-center gap-2">
                  {getPageNumbers().map((item) => {
                    if (item.type === "ellipsis" || item.number === undefined) {
                      return (
                        <span key={item.key} className="px-2 text-mulearn-gray-600">
                          ...
                        </span>
                      );
                    }
                    const pageNumber = item.number;
                    return (
                      <Button
                        variant={currentPage === pageNumber ? "default" : "secondary"}
                        key={item.key}
                        onClick={() => goToPage(pageNumber)}
                        className="w-10 h-10 text-sm font-medium"
                        aria-label={`Go to page ${pageNumber}`}
                        aria-current={currentPage === pageNumber ? "page" : undefined}
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  variant="outline"
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2"
                  aria-label="Next page"
                >
                  <span className="text-sm font-medium">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="mt-4 text-center text-sm text-mulearn-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, previousHiring.length)} of{" "}
                {previousHiring.length} positions
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
