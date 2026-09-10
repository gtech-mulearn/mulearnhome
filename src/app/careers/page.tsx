"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CareersCard from "@/app/careers/_components/CareersCard";
import CareersStats from "@/app/careers/_components/CareersStats";
import ClosedCareersCard from "@/app/careers/_components/ClosedCareersCard";
import Pagination from "@/app/events/_components/Pagination";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StateDisplay } from "@/components/ui/state-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companies } from "@/data/company";
import type { Company, OngoingHiring, PreviousHiring } from "@/lib/types";
import { fetchOngoingHiringPage, fetchPreviousHiringPage } from "@/services/careers";
import { cdnUrl } from "@/services/cdn";

type TabValue = "ongoing" | "previous";

const ITEMS_PER_PAGE = 12;

export default function Careers() {
  const [activeTab, setActiveTab] = useState<TabValue>("ongoing");
  const companyData: Company[] = companies;
  const [ongoingPage, setOngoingPage] = useState(1);
  const [ongoingData, setOngoingData] = useState<OngoingHiring[]>([]);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [ongoingLoading, setOngoingLoading] = useState(true);
  const [ongoingError, setOngoingError] = useState(false);
  const [ongoingFailedPage, setOngoingFailedPage] = useState<number | null>(null);
  const ongoingRequestId = useRef(0);

  const [previousPage, setPreviousPage] = useState(1);
  const [previousData, setPreviousData] = useState<PreviousHiring[]>([]);
  const [previousCount, setPreviousCount] = useState(0);
  const [previousLoading, setPreviousLoading] = useState(true);
  const [previousError, setPreviousError] = useState(false);
  const [previousFailedPage, setPreviousFailedPage] = useState<number | null>(null);
  const previousRequestId = useRef(0);

  const goToOngoingPage = (page: number) => {
    const requestId = ++ongoingRequestId.current;
    setOngoingLoading(true);

    fetchOngoingHiringPage(page, ITEMS_PER_PAGE)
      .then(({ data, pagination }) => {
        if (requestId !== ongoingRequestId.current) return;
        setOngoingData(data);
        setOngoingCount(pagination.count);
        setOngoingPage(page);
        setOngoingError(false);
        setOngoingFailedPage(null);
      })
      .catch((err) => {
        if (requestId !== ongoingRequestId.current) return;
        console.error("Failed to load ongoing hiring:", err);
        setOngoingFailedPage(page);
        setOngoingData((prev) => {
          if (prev.length === 0) {
            setOngoingError(true);
            setOngoingCount(0);
          }
          return prev;
        });
      })
      .finally(() => {
        if (requestId === ongoingRequestId.current) setOngoingLoading(false);
      });
  };

  const goToPreviousPage = (page: number) => {
    const requestId = ++previousRequestId.current;
    setPreviousLoading(true);

    fetchPreviousHiringPage(page, ITEMS_PER_PAGE)
      .then(({ data, pagination }) => {
        if (requestId !== previousRequestId.current) return;
        setPreviousData(data);
        setPreviousCount(pagination.count);
        setPreviousPage(page);
        setPreviousError(false);
        setPreviousFailedPage(null);
      })
      .catch((err) => {
        if (requestId !== previousRequestId.current) return;
        console.error("Failed to load previous hiring:", err);
        setPreviousFailedPage(page);
        setPreviousData((prev) => {
          if (prev.length === 0) {
            setPreviousError(true);
            setPreviousCount(0);
          }
          return prev;
        });
      })
      .finally(() => {
        if (requestId === previousRequestId.current) setPreviousLoading(false);
      });
  };

  useEffect(() => {
    goToOngoingPage(1);
    goToPreviousPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <div
        id="careers-listing"
        className="mx-auto mt-12 mb-12 sm:mb-16 max-w-[1300px] px-4 sm:px-6 lg:px-8"
      >
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabValue)}>
          <div className="md:hidden flex justify-center mb-6">
            <Select value={activeTab} onValueChange={(value) => setActiveTab(value as TabValue)}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select tab" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ongoing">Open Positions ({ongoingCount})</SelectItem>
                <SelectItem value="previous">Closed Positions ({previousCount})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:flex justify-center">
            <TabsList className="mb-8 inline-flex">
              <TabsTrigger value="ongoing" className="gap-1 whitespace-nowrap w-auto">
                Open Positions
                <span className="ml-1.5 text-xs opacity-80">({ongoingCount})</span>
              </TabsTrigger>
              <TabsTrigger value="previous" className="gap-1 whitespace-nowrap w-auto">
                Closed Positions
                <span className="ml-1.5 text-xs opacity-80">({previousCount})</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ongoing">
            {ongoingLoading && ongoingData.length === 0 ? (
              <div className="flex justify-center py-20">
                <p className="text-mulearn-gray-600">Loading open positions…</p>
              </div>
            ) : ongoingData.length === 0 ? (
              ongoingError ? (
                <StateDisplay
                  variant="no-results"
                  title="Couldn't load open positions"
                  description="Something went wrong while fetching career listings. Please try again."
                  size="md"
                  action={
                    <Button onClick={() => goToOngoingPage(ongoingFailedPage ?? 1)}>
                      Try again
                    </Button>
                  }
                />
              ) : (
                <StateDisplay
                  variant="no-results"
                  title="No open positions right now."
                  description="Check back soon — new opportunities are posted regularly."
                  size="md"
                />
              )
            ) : (
              <>
                {ongoingFailedPage !== null && (
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3 rounded-lg bg-mulearn-gray-50 px-4 py-3 text-sm text-mulearn-gray-600">
                    <span>
                      Couldn&apos;t load page {ongoingFailedPage}. Still showing page {ongoingPage}.
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => goToOngoingPage(ongoingFailedPage)}
                    >
                      Retry
                    </Button>
                  </div>
                )}
                <div className="flex flex-wrap items-stretch justify-center gap-4">
                  {ongoingData.map((role) => (
                    <CareersCard
                      key={role.id}
                      id={role.id}
                      role={role.role}
                      organization={role.organization}
                      title={role.title}
                      location={role.location}
                      lastdate={role.lastdate}
                      remuneration={role.remuneration}
                      vacancies={role.vacancies}
                      duration={role.duration}
                      applylink={role.applylink}
                      jdlink={role.jdlink}
                      posted_date={role.posted_date}
                    />
                  ))}
                </div>
                <Pagination
                  page={ongoingPage}
                  setPage={goToOngoingPage}
                  total={ongoingCount}
                  perPage={ITEMS_PER_PAGE}
                  scrollToId="careers-listing"
                />
              </>
            )}
          </TabsContent>

          <TabsContent value="previous">
            {previousLoading && previousData.length === 0 ? (
              <div className="flex justify-center py-20">
                <p className="text-mulearn-gray-600">Loading closed positions…</p>
              </div>
            ) : previousData.length === 0 ? (
              previousError ? (
                <StateDisplay
                  variant="no-results"
                  title="Couldn't load closed positions"
                  description="Something went wrong while fetching career listings. Please try again."
                  size="md"
                  action={
                    <Button onClick={() => goToPreviousPage(previousFailedPage ?? 1)}>
                      Try again
                    </Button>
                  }
                />
              ) : (
                <StateDisplay
                  variant="no-results"
                  title="No closed positions yet."
                  description="Past hiring rounds will show up here once they're closed."
                  size="md"
                />
              )
            ) : (
              <>
                {previousFailedPage !== null && (
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3 rounded-lg bg-mulearn-gray-50 px-4 py-3 text-sm text-mulearn-gray-600">
                    <span>
                      Couldn&apos;t load page {previousFailedPage}. Still showing page{" "}
                      {previousPage}.
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => goToPreviousPage(previousFailedPage)}
                    >
                      Retry
                    </Button>
                  </div>
                )}
                <div className="flex flex-wrap items-stretch justify-center gap-4">
                  {previousData.map((role) => (
                    <ClosedCareersCard
                      key={role.id}
                      id={role.id}
                      title={role.title}
                      role={role.role}
                      organization={role.organization}
                      location={role.location}
                      lastdate={role.lastdate}
                      remuneration={role.remuneration}
                      vacancies={role.vacancies}
                      duration={role.duration}
                      extracontent={role.extracontent}
                    />
                  ))}
                </div>
                <Pagination
                  page={previousPage}
                  setPage={goToPreviousPage}
                  total={previousCount}
                  perPage={ITEMS_PER_PAGE}
                  scrollToId="careers-listing"
                />
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
