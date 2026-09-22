"use client";

import { useState } from "react";
import { FilterButtons } from "./filter-buttons";
import { GalleryGrid } from "./gallery-grid";

export function ImpactGalleryView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <>
      <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="max-w-6xl mx-auto">
        <GalleryGrid activeFilter={activeFilter} />
      </div>
    </>
  );
}
