"use client";

import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CareersCard from "@/app/careers/_components/CareersCard";
import CareersStats from "@/app/careers/_components/CareersStats";
import { PageContainer } from "@/components/layout/PageContainer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { companies } from "@/data/company";
import type { Company, NewHiringRole, PreviousHiringRole } from "@/lib/types";
import { cn } from "@/lib/utils";
import { cdnUrl } from "@/services/cdn";

export default function Careers() {
  const [newHiring, setNewHiring] = useState<NewHiringRole[]>([]);
  const [previousHiring, setPreviousHiring] = useState<PreviousHiringRole[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const companyData: Company[] = companies;

  useEffect(() => {
    axios
      .get("https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersOld")
      .then((response) => {
        setPreviousHiring(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersNew")
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
    <PageContainer>
      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
            µLearn <span className="text-mulearn">Career Labs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mulearn-gray-600 lg:mx-0">
            In search of a job opportunity / internship? µLearn Career Labs helps you connect with
            opportunities from the industry.
          </p>

          <CareersStats />

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button asChild size="lg">
              <Link href="/contact?intent=hiring#get-in-touch">Post your job openings</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <MuImage
            src="/assets/career/career-hero.svg"
            alt="Illustration of a job search with a magnifying glass"
            width={520}
            height={400}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </section>

      {/* Company marquee */}
      <section aria-label="Hiring partners" className="overflow-hidden">
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
      </section>

      {/* New hiring calls */}
      {newHiring.length > 0 && (
        <section>
          <h2>New Hiring Calls</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-mulearn-gray-600">
            Unlock your potential and accelerate your career growth with the endless opportunities
            available on Career Labs.
          </p>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {newHiring.map((role, index) => (
              <li
                key={`${role.organization}-${role.role}-${index}`}
                className={cn(
                  "border-b border-border py-6 last:border-b-0",
                  "md:odd:border-r md:odd:pr-10 md:even:pl-10",
                  "md:nth-last-[-n+2]:border-b-0",
                )}
              >
                <CareersCard
                  organization={role.organization}
                  role={role.role}
                  location={role.location}
                  lastdate={role.lastdate}
                  jdlink={role.jdlink}
                  applylink={role.applylink}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Previous hiring calls */}
      <section id="previous-hiring">
        <h2>Previous Hiring Calls</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-mulearn-gray-600">
          Listed below are the list of hiring calls that were announced through career labs
          previously.
        </p>

        <div className="mt-8">
          <Table>
            <TableHeader className="sr-only">
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Closed date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_td:first-child]:pl-0 [&_td:last-child]:pr-0 [&_td]:px-3 [&_td]:py-4">
              {currentItems.map((role, index) => (
                <TableRow key={`${role.company}-${role.role}-${startIndex + index}`}>
                  <TableCell className="font-bold text-mulearn-blackish">{role.company}</TableCell>
                  <TableCell className="text-mulearn-gray-600">{role.role ?? role.title}</TableCell>
                  <TableCell className="text-mulearn-gray-600">{role.location}</TableCell>
                  <TableCell className="whitespace-nowrap text-mulearn-gray-600">
                    {role.date ? `Closed ${role.date}` : "Closed"}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-destructive">
                    Closed
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Previous hiring calls pagination"
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1 text-sm">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 px-2 py-1 text-mulearn-gray-600 hover:text-mulearn-blackish disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
                Previous
              </button>

              {getPageNumbers().map((item) => {
                if (item.type === "ellipsis" || item.number === undefined) {
                  return (
                    <span key={item.key} className="px-2 text-mulearn-gray-600">
                      …
                    </span>
                  );
                }
                const pageNumber = item.number;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => goToPage(pageNumber)}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                    className={cn(
                      "inline-flex size-8 items-center justify-center rounded-md text-sm",
                      currentPage === pageNumber
                        ? "bg-mulearn font-semibold text-mulearn-whitish"
                        : "text-mulearn-gray-600 hover:text-mulearn-blackish",
                    )}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 px-2 py-1 text-mulearn-gray-600 hover:text-mulearn-blackish disabled:opacity-40"
              >
                Next
                <ChevronRight className="size-4" />
              </button>
            </div>
            <p className="text-xs text-mulearn-gray-600">
              Showing {startIndex + 1}–{Math.min(endIndex, previousHiring.length)} of{" "}
              {previousHiring.length} positions
            </p>
          </nav>
        )}
      </section>
    </PageContainer>
  );
}
