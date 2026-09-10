"use client";

import { format, parse } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { Calendar, Clock, Mic, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { GenericEventCard, IG_LABELS } from "@/app/events/_components/GenericEventCard";
import Pagination from "@/app/events/_components/Pagination";
import SearchAndFilter from "@/app/events/_components/SearchAndFilter";
import { TabButton } from "@/app/events/_components/TabButton";
import { MotionSection } from "@/components/MuFramer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StateDisplay } from "@/components/ui/state-display";
import { useDebounce } from "@/hooks/useDebounce";
import type { OfficeHoursSession, WeeklyTwitchPagination } from "@/lib/types";
import { fetchOfficeHours } from "@/services/weeklyTwitches";

type ViewType = "upcoming" | "previous";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function formatTime(timeStr?: string | null): string | undefined {
  return timeStr ? format(parse(timeStr.slice(0, 5), "HH:mm", new Date()), "h:mm a") : undefined;
}

const EMPTY_PAGINATION: WeeklyTwitchPagination = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

export default function OfficeHoursClient() {
  const [view, setView] = useState<ViewType>("upcoming");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sessions, setSessions] = useState<OfficeHoursSession[]>([]);
  const [pagination, setPagination] = useState<WeeklyTwitchPagination>(EMPTY_PAGINATION);
  const [error, setError] = useState(false);

  const debouncedSearch = useDebounce(searchInput, 400);

  useEffect(() => {
    let isCurrent = true;
    setError(false);

    fetchOfficeHours({
      status: view === "previous" ? "completed" : ["ongoing", "upcoming"],
      search: debouncedSearch || undefined,
      pageIndex: page,
      perPage: 6,
    })
      .then(({ data, pagination: p }) => {
        if (!isCurrent) return;
        setSessions(data);
        setPagination(p);
      })
      .catch(() => {
        if (!isCurrent) return;
        setSessions([]);
        setPagination(EMPTY_PAGINATION);
        setError(true);
      });
    return () => {
      isCurrent = false;
    };
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

  const allTags = Array.from(
    new Set(
      sessions.flatMap((s) =>
        (s.interest_groups ?? []).map((ig) => IG_LABELS[ig.toLowerCase()] || ig),
      ),
    ),
  ).sort();

  const filteredSessions =
    selectedTags.length === 0
      ? sessions
      : sessions.filter((s) =>
          (s.interest_groups ?? []).some((ig) =>
            selectedTags.includes(IG_LABELS[ig.toLowerCase()] || ig),
          ),
        );

  const toEvent = (session: OfficeHoursSession, index: number) => ({
    id: index + 1,
    title: session.title,
    performer: session.performer || "",
    designation: session.designation || "",
    description: session.description || "",
    date: formatDate(session.date),
    time: formatTime(session.time),
    interestGroups: (session.interest_groups ?? []).map((ig) => ig.toLowerCase()),
    isUpcoming: session.status === "upcoming",
    isLive: session.status === "ongoing",
    link: session.link || undefined,
    thumbnail: session.poster_thumbnail || undefined,
  });

  const events = filteredSessions.map((s, i) => toEvent(s, i));
  const hasActiveFilters = Boolean(debouncedSearch) || selectedTags.length > 0;

  const emptyStateCopy = error
    ? {
        title: "Something Went Wrong",
        description:
          "We couldn't load Office Hour sessions right now. This might be a temporary connection issue — please refresh the page or try again in a few minutes.",
      }
    : hasActiveFilters
      ? {
          title: "No Matching Sessions",
          description:
            "No sessions matched your search or the selected tags. Try a different keyword, or clear the filters to browse all sessions.",
        }
      : view === "upcoming"
        ? {
            title: "No Upcoming Sessions",
            description:
              "There are no upcoming Office Hour sessions scheduled right now. New sessions are added regularly, so check back soon.",
          }
        : {
            title: "No Previous Sessions",
            description:
              "No past Office Hour sessions to show yet. Once sessions wrap up, they'll appear here.",
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
              <Mic className="w-4 h-4 mr-2" />
              Community Platform
            </Badge>

            <h1 className="mb-6">
              µLearn <span className="text-mulearn">Office Hour</span>
            </h1>

            <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed mb-8">
              A space where µLearn members connect, learn, and grow together. Office Hour is our
              community-driven learning zone.
            </p>
          </div>
        </div>
      </section>

      <SearchAndFilter
        search={searchInput}
        onSearchChange={handleSearchChange}
        selectedTags={selectedTags}
        onTagToggle={toggleTag}
        allTags={allTags}
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
            {events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <GenericEventCard key={event.id} event={event} variant="office-hour" icon={Mic} />
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

            {selectedTags.length === 0 && (
              <Pagination page={page} setPage={setPage} total={pagination.count} perPage={6} />
            )}
          </div>
        </MotionSection>
      </AnimatePresence>
    </div>
  );
}
