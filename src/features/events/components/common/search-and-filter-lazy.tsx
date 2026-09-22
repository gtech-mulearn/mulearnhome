"use client";

import dynamic from "next/dynamic";

export const SearchAndFilter = dynamic(
  () => import("./search-and-filter").then((m) => m.SearchAndFilter),
  { ssr: false },
);
