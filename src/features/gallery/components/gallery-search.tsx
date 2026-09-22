"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GallerySearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function GallerySearch({ search, onSearchChange }: GallerySearchProps) {
  return (
    <div className="relative w-full md:max-w-md">
      <Search className="absolute top-3 left-3 text-mulearn-gray-600 w-5 h-5" />
      <Input
        placeholder="Search gallery events..."
        className="pl-10 py-6 rounded-xl w-full"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
