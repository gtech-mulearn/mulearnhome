"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryViewToggleProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export function GalleryViewToggle({ view, onViewChange }: GalleryViewToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        onClick={() => onViewChange("grid")}
        className={
          view === "grid"
            ? "bg-mulearn-trusty-blue text-mulearn-whitish hover:bg-mulearn-duke-purple"
            : "border border-mulearn-gray-300 bg-mulearn-whitish hover:bg-mulearn-gray-50"
        }
        aria-label="Grid view"
        aria-pressed={view === "grid"}
      >
        <LayoutGrid className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        onClick={() => onViewChange("list")}
        className={
          view === "list"
            ? "bg-mulearn-trusty-blue text-mulearn-whitish hover:bg-mulearn-duke-purple"
            : "border border-mulearn-gray-300 bg-mulearn-whitish hover:bg-mulearn-gray-50"
        }
        aria-label="List view"
        aria-pressed={view === "list"}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
}
