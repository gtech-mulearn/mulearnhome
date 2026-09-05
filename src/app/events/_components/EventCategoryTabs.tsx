"use client";

import { type ReactNode, useRef, useState } from "react";
import Grid from "@/app/events/_components/Grid";
import Pagination from "@/app/events/_components/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StateDisplay } from "@/components/ui/state-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENTS_PER_PAGE } from "@/lib/events/constants";
import { safeMapEvents } from "@/lib/events/mapPublicEvent";
import type { Event, PublicEventsPagination } from "@/lib/types";
import { fetchPublicEvents } from "@/services/publicEvents";

export interface EventCategory {
  id: string;
  navLabel: string;
  title: string;
  icon: ReactNode;
  events: Event[] | null;
  emptyTitle: string;
  emptyDescription: string;
  live?: boolean;
  /** Present when this category's list is server-paginated and can page further. */
  status?: "upcoming" | "ongoing" | "completed";
  pagination?: PublicEventsPagination;
}

function LiveDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mulearn-trusty-blue/70" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mulearn-trusty-blue" />
    </span>
  );
}

export default function EventCategoryTabs({ categories }: { categories: EventCategory[] }) {
  const defaultTab = categories[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="mb-8 flex justify-center md:hidden">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.navLabel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mb-10 hidden justify-center md:flex">
        <TabsList className="inline-flex h-auto flex-wrap gap-1 p-1.5">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              {category.icon}
              {category.navLabel}
              {category.live && <LiveDot />}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="mb-6 text-center md:text-left">
            <h2 className="mb-1">{category.title}</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-mulearn md:mx-0" />
          </div>

          <CategoryTabContent category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

const EMPTY_PAGINATION: PublicEventsPagination = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

function CategoryTabContent({ category }: { category: EventCategory }) {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<Event[] | null>(category.events);
  const [pagination, setPagination] = useState<PublicEventsPagination>(
    category.pagination ?? EMPTY_PAGINATION,
  );

  const isPaginated = !!category.status;
  const requestIdRef = useRef(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const requestId = ++requestIdRef.current;

    if (newPage === 1) {
      setEvents(category.events);
      setPagination(category.pagination ?? EMPTY_PAGINATION);
      return;
    }

    fetchPublicEvents({
      status: category.status,
      pageIndex: newPage,
      perPage: EVENTS_PER_PAGE,
    })
      .then(({ data, pagination: p }) => {
        if (requestIdRef.current !== requestId) return;
        setEvents(safeMapEvents(data, category.id));
        setPagination(p);
      })
      .catch(() => {
        if (requestIdRef.current !== requestId) return;
        setEvents(null);
      });
  };

  const hasEvents = !!events && events.length > 0;

  return (
    <>
      {hasEvents ? (
        <Grid events={events} />
      ) : (
        <StateDisplay
          variant="no-results"
          title={category.emptyTitle}
          description={category.emptyDescription}
          size="md"
        />
      )}

      {isPaginated && (
        <Pagination
          page={page}
          setPage={handlePageChange}
          total={pagination.count}
          perPage={EVENTS_PER_PAGE}
        />
      )}
    </>
  );
}
