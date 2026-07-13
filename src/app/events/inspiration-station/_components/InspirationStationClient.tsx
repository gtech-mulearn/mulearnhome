"use client";

import { AnimatePresence } from "framer-motion";
import { Calendar, Clock, PlayCircle, Radio } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EmptyState } from "@/app/events/_components/EmptyState";
import { GenericEventCard } from "@/app/events/_components/GenericEventCard";
import Pagination from "@/app/events/_components/Pagination";
import SearchAndFilter from "@/app/events/_components/SearchAndFilter";
import { TabButton } from "@/app/events/_components/TabButton";
import { MotionSection } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import type { WeeklyTwitchEpisode, WeeklyTwitchPagination } from "@/lib/types";
import { fetchInspirationStation } from "@/services/weeklyTwitches";

type ViewType = "upcoming" | "previous";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

const EMPTY_PAGINATION: WeeklyTwitchPagination = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

const ZONES = ["Central", "North", "South"];

export default function InspirationStationClient() {
  const [view, setView] = useState<ViewType>("upcoming");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [episodes, setEpisodes] = useState<WeeklyTwitchEpisode[]>([]);
  const [ongoingEpisodes, setOngoingEpisodes] = useState<WeeklyTwitchEpisode[]>([]);
  const [pagination, setPagination] = useState<WeeklyTwitchPagination>(EMPTY_PAGINATION);
  const [error, setError] = useState(false);

  const debouncedSearch = useDebounce(searchInput, 400);

  useEffect(() => {
    if (view !== "upcoming") {
      setOngoingEpisodes([]);
      return;
    }

    fetchInspirationStation({
      status: "ongoing",
      search: debouncedSearch || undefined,
      pageIndex: 1,
      perPage: 6,
    })
      .then(({ data }) => setOngoingEpisodes(data))
      .catch(() => setOngoingEpisodes([]));
  }, [view, debouncedSearch]);

  useEffect(() => {
    setError(false);
    fetchInspirationStation({
      status: view === "previous" ? "completed" : "upcoming",
      search: debouncedSearch || undefined,
      pageIndex: page,
      perPage: 6,
    })
      .then(({ data, pagination: p }) => {
        setEpisodes(data);
        setPagination(p);
      })
      .catch(() => {
        setEpisodes([]);
        setPagination(EMPTY_PAGINATION);
        setError(true);
      });
  }, [view, debouncedSearch, page]);

  const handleViewChange = (v: ViewType) => {
    setView(v);
    setPage(1);
    setSelectedTags([]);
  };

  const handleSearchChange = (s: string) => {
    setSearchInput(s);
    setPage(1);
  };

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  const filterByZone = (list: WeeklyTwitchEpisode[]) =>
    selectedTags.length === 0
      ? list
      : list.filter(
          (e) => e.zone && selectedTags.includes(e.zone.charAt(0).toUpperCase() + e.zone.slice(1)),
        );

  const toEvent = (episode: WeeklyTwitchEpisode, index: number) => ({
    id: index + 1,
    topic: episode.topic,
    campus: episode.campus,
    zone: episode.zone ? episode.zone.charAt(0).toUpperCase() + episode.zone.slice(1) : undefined,
    date: formatDate(episode.date),
    description: episode.description || "",
    isUpcoming: episode.status === "upcoming",
    isLive: episode.status === "ongoing",
    link: episode.link || undefined,
  });

  const filteredEpisodes = filterByZone(episodes);
  const liveEvents =
    view === "upcoming" ? filterByZone(ongoingEpisodes).map((e, i) => toEvent(e, i)) : [];

  const events = [
    ...liveEvents,
    ...filteredEpisodes.map((e, i) => toEvent(e, liveEvents.length + i)),
  ];

  const motionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Badge
                  variant="outline"
                  className="border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue font-bold text-sm py-1 md:py-2 px-3 md:px-4 hover:bg-mulearn-trusty-blue/10 hover:border-mulearn-duke-purple hover:text-mulearn-duke-purple transition-all duration-300 shadow-sm"
                >
                  <Radio className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Storytelling Platform
                </Badge>
              </div>

              <h1>
                µLearn <span className="block text-mulearn mt-2">Inspiration Station Radio</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-mulearn-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                µLearn&apos;s storytelling-driven radio experience featuring real journeys,
                insights, and life-changing moments from the community.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <Link href="https://discord.gg/wqwTYuCR" target="_blank" rel="noopener noreferrer">
                  <Button variant={"default"} className="px-6 py-2.5 gap-2 font-semibold">
                    <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Join
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <MuImage
                  src="/assets/isr/isr.svg"
                  alt="Inspiration Station Radio Illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                  preload
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4">Inspiration Station Episodes</h2>
            <p className="text-mulearn-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-6 md:mb-8">
              Discover inspiring stories from our community
            </p>
          </div>

          <SearchAndFilter
            search={searchInput}
            onSearchChange={handleSearchChange}
            selectedTags={selectedTags}
            onTagToggle={toggleTag}
            allTags={ZONES}
            view={view}
          />

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 max-w-md mx-auto mt-6 mb-8">
            <TabButton
              icon={Clock}
              label="Upcoming"
              isActive={view === "upcoming"}
              onClick={() => handleViewChange("upcoming")}
            />
            <TabButton
              icon={Calendar}
              label="Previous"
              isActive={view === "previous"}
              onClick={() => handleViewChange("previous")}
            />
          </div>

          <AnimatePresence mode="wait">
            <MotionSection
              key={view}
              variants={motionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
            >
              {view === "previous" && (
                <div className="text-center mb-6 md:mb-8">
                  <p className="text-mulearn-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Listed below are the speakers who came to the inspiration stations and inspired
                    our listeners with their stories and experiences.
                  </p>
                </div>
              )}

              {events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {events.map((event) => (
                    <GenericEventCard key={event.id} event={event} variant="episode" icon={Radio} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title={
                    error
                      ? "Something Went Wrong"
                      : view === "upcoming"
                        ? "No Upcoming Episodes"
                        : "No Previous Episodes"
                  }
                  description={
                    error
                      ? "We couldn't load episodes right now. Please try again later."
                      : "Check back later or try a different search."
                  }
                  isError={error}
                />
              )}

              {selectedTags.length === 0 && (
                <Pagination page={page} setPage={setPage} total={pagination.count} perPage={6} />
              )}
            </MotionSection>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
