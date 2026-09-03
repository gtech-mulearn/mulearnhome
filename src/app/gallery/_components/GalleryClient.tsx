"use client";

import { useMemo, useState } from "react";
import { Pagination } from "@/app/events/_components";
import { StateDisplay } from "@/components/ui/state-display";
import type { GalleryEvent } from "@/data/gallery";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryListView } from "./GalleryListView";
import { GallerySearch } from "./GallerySearch";
import { GalleryViewToggle } from "./GalleryViewToggle";

interface GalleryClientProps {
  events: GalleryEvent[];
}

export function GalleryClient({ events }: GalleryClientProps) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const perPage = 12;

  const filteredEvents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return events;

    return events.filter((event) => event.name.toLowerCase().includes(term));
  }, [events, search]);

  const paginatedEvents = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredEvents.slice(start, start + perPage);
  }, [filteredEvents, page]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const emptyStateCopy = search.trim()
    ? {
        title: "No Matching Events",
        description: `No gallery events matched "${search.trim()}". Try a different keyword, or clear the search to browse all events.`,
      }
    : {
        title: "No Events Yet",
        description:
          "There are no gallery events to show right now. Check back soon as new events are added.",
      };

  return (
    <div className="px-6 py-8 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <GallerySearch search={search} onSearchChange={handleSearchChange} />
          <GalleryViewToggle view={view} onViewChange={setView} />
        </div>

        {filteredEvents.length === 0 ? (
          <StateDisplay
            variant="no-results"
            title={emptyStateCopy.title}
            description={emptyStateCopy.description}
            size="md"
          />
        ) : view === "grid" ? (
          <GalleryGrid events={paginatedEvents} />
        ) : (
          <GalleryListView events={paginatedEvents} />
        )}

        {filteredEvents.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            total={filteredEvents.length}
            perPage={perPage}
            scrollToId="gallery-grid"
          />
        )}
      </div>
    </div>
  );
}
