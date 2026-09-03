"use client";

import { type ReactNode, useState } from "react";
import Grid from "@/app/events/_components/Grid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StateDisplay } from "@/components/ui/state-display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Event } from "@/lib/types";

export interface EventCategory {
  id: string;
  navLabel: string;
  title: string;
  icon: ReactNode;
  events: Event[] | null;
  emptyTitle: string;
  emptyDescription: string;
  live?: boolean;
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

      {categories.map((category) => {
        const evs = category.events;
        const hasEvents = !!evs && evs.length > 0;

        return (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="mb-6 text-center md:text-left">
              <h2 className="mb-1">{category.title}</h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-mulearn md:mx-0" />
            </div>

            {hasEvents ? (
              <Grid events={evs} />
            ) : (
              <StateDisplay
                variant="no-results"
                title={category.emptyTitle}
                description={category.emptyDescription}
                size="md"
              />
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
