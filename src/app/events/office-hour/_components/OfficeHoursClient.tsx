"use client";

import { AnimatePresence } from "framer-motion";
import { Calendar, Clock, Mic, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { EmptyState } from "@/app/events/_components/EmptyState";
import { GenericEventCard, IG_LABELS } from "@/app/events/_components/GenericEventCard";
import Pagination from "@/app/events/_components/Pagination";
import SearchAndFilter from "@/app/events/_components/SearchAndFilter";
import { TabButton } from "@/app/events/_components/TabButton";
import { MotionSection } from "@/components/MuFramer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import type { OfficeHoursSession, WeeklyTwitchPagination } from "@/lib/types";
import { fetchOfficeHours } from "@/services/weeklyTwitches";

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

export default function OfficeHoursClient() {
  const [view, setView] = useState<ViewType>("upcoming");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sessions, setSessions] = useState<OfficeHoursSession[]>([]);
  const [ongoingSessions, setOngoingSessions] = useState<OfficeHoursSession[]>([]);
  const [pagination, setPagination] = useState<WeeklyTwitchPagination>(EMPTY_PAGINATION);
  const [error, setError] = useState(false);

  const debouncedSearch = useDebounce(searchInput, 400);

  // Ongoing sessions are shown as a standalone "Live Now" strip, independent of
  // the upcoming grid's pagination, since the API can't paginate a merged set.
  useEffect(() => {
    if (view !== "upcoming") {
      setOngoingSessions([]);
      return;
    }

    fetchOfficeHours({
      status: "ongoing",
      search: debouncedSearch || undefined,
      pageIndex: 1,
      perPage: 6,
    })
      .then(({ data }) => setOngoingSessions(data))
      .catch(() => setOngoingSessions([]));
  }, [view, debouncedSearch]);

  useEffect(() => {
    setError(false);

    const status = view === "previous" ? "completed" : "upcoming";
    fetchOfficeHours({
      status,
      search: debouncedSearch || undefined,
      pageIndex: page,
      perPage: 6,
    })
      .then(({ data, pagination: p }) => {
        setSessions(data);
        setPagination(p);
      })
      .catch(() => {
        setSessions([]);
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

  const allTags = Array.from(
    new Set(
      [...sessions, ...ongoingSessions].flatMap((s) =>
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
    interestGroups: (session.interest_groups ?? []).map((ig) => ig.toLowerCase()),
    isUpcoming: session.status === "upcoming",
    isLive: session.status === "ongoing",
    link: session.link || undefined,
    thumbnail: session.poster_thumbnail || undefined,
  });

  const filteredLive =
    selectedTags.length === 0
      ? ongoingSessions
      : ongoingSessions.filter((s) =>
          (s.interest_groups ?? []).some((ig) =>
            selectedTags.includes(IG_LABELS[ig.toLowerCase()] || ig),
          ),
        );
  const liveEvents = view === "upcoming" ? filteredLive.map((s, i) => toEvent(s, i)) : [];

  const events = [
    ...liveEvents,
    ...filteredSessions.map((s, i) => toEvent(s, liveEvents.length + i)),
  ];

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

            <Button variant={"default"} className="px-8 py-3 gap-2 rounded-full">
              <PlayCircle className="w-5 h-5" />
              Join Next Session
            </Button>
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
              <EmptyState
                title={
                  error
                    ? "Something Went Wrong"
                    : view === "upcoming"
                      ? "No Upcoming Sessions"
                      : "No Previous Sessions"
                }
                description={
                  error
                    ? "We couldn't load sessions right now. Please try again later."
                    : "Check back later or try a different search."
                }
                isError={error}
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
