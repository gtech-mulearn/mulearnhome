"use client";

import { AnimatePresence } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { MotionSection } from "@/components/layouts";
import { Badge } from "@/components/ui/badge";
import { StateDisplay } from "@/components/ui/state-display";
import { useDebounce } from "@/hooks/use-debounce";
import { useGrabYourSuperpowers } from "../../hooks/events.hooks";
import type { GrabYourSuperpowersSession, WeeklyTwitchPagination } from "../../types/events.types";
import { formatDate, formatTime } from "../../utils/events.utils";
import {
  GenericEventCard,
  GenericEventCardSkeletonGrid,
  Pagination,
  SearchAndFilter,
  TabButton,
} from "../common";

type ViewType = "upcoming" | "previous";

const EMPTY_PAGINATION: WeeklyTwitchPagination = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

export function GrabYourSuperpowersView() {
  const [view, setView] = useState<ViewType>("upcoming");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(searchInput, 400);

  const {
    data: sessions,
    pagination: fetchedPagination,
    error,
    isLoading,
  } = useGrabYourSuperpowers({
    status: view === "previous" ? "completed" : ["ongoing", "upcoming"],
    search: debouncedSearch || undefined,
    pageIndex: page,
    perPage: 6,
  });

  const pagination = fetchedPagination ?? EMPTY_PAGINATION;

  const handleViewChange = (v: ViewType) => {
    setView(v);
    setPage(1);
  };

  const handleSearchChange = (s: string) => {
    setSearchInput(s);
    setPage(1);
  };

  const toEvent = (session: GrabYourSuperpowersSession, index: number) => ({
    id: index + 1,
    title: session.title,
    performer: session.performer || "",
    designation: session.designation || "",
    campus: session.campus,
    description: session.description || "",
    date: formatDate(session.date),
    time: formatTime(session.time),
    isUpcoming: session.status === "upcoming",
    isLive: session.status === "ongoing",
    link: session.link || undefined,
  });

  const events = sessions.map((s, i) => toEvent(s, i));
  const hasActiveFilters = Boolean(debouncedSearch);

  const emptyStateCopy = error
    ? {
        title: "Something Went Wrong",
        description:
          "We couldn't load Grab Your Superpowers sessions right now. This might be a temporary connection issue — please refresh the page or try again in a few minutes.",
      }
    : hasActiveFilters
      ? {
          title: "No Matching Sessions",
          description:
            "No sessions matched your search. Try a different keyword, or clear the search to browse all sessions.",
        }
      : view === "upcoming"
        ? {
            title: "No Upcoming Sessions",
            description:
              "There are no upcoming Grab Your Superpowers sessions scheduled right now. New sessions are added regularly, so check back soon.",
          }
        : {
            title: "No Previous Sessions",
            description:
              "No past Grab Your Superpowers sessions to show yet. Once sessions wrap up, they'll appear here.",
          };

  const motionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue font-bold text-sm py-2 px-4"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Community Platform
            </Badge>

            <h1 className="mb-6">
              µLearn <span className="text-mulearn">Grab Your Superpowers</span>
            </h1>

            <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed mb-8">
              Weekly sessions to help you unlock new skills and superpowers, guided by mentors and
              practitioners from across campuses.
            </p>
          </div>
        </div>
      </section>

      <SearchAndFilter
        search={searchInput}
        onSearchChange={handleSearchChange}
        selectedTags={[]}
        onTagToggle={() => {}}
        allTags={[]}
        view={view}
      />

      <div className="flex justify-center gap-3 py-4">
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
          className="py-12 pb-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            {isLoading && events.length === 0 ? (
              <GenericEventCardSkeletonGrid />
            ) : events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <GenericEventCard
                    key={event.id}
                    event={event}
                    variant="superpower"
                    icon={Sparkles}
                  />
                ))}
              </div>
            ) : (
              <StateDisplay
                variant="no-results"
                title={emptyStateCopy.title}
                description={emptyStateCopy.description}
                size="md"
              />
            )}

            <Pagination page={page} setPage={setPage} total={pagination.count ?? 0} perPage={6} />
          </div>
        </MotionSection>
      </AnimatePresence>
    </div>
  );
}
