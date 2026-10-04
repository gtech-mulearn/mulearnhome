import { Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SearchAndFilterProps {
  search: string;
  onSearchChange: (search: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  allTags: string[];
  startDate?: string | null;
  endDate?: string | null;
  onDateRangeChange?: (start?: string | null, end?: string | null) => void;
  view: string | null;
}

export function SearchAndFilter({
  search,
  onSearchChange,
  selectedTags,
  onTagToggle,
  allTags,
  view,
}: SearchAndFilterProps) {
  return (
    <div className="max-w-7xl mx-auto justify-center items-center px-4 mt-10 mb-6">
      <div className="flex flex-col justify-center md:flex-row gap-4 w-full">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute top-3 left-3 text-mulearn-gray-600 w-5 h-5" />
          <Input
            placeholder={`Search ${view} events...`}
            className="pl-10 py-6 rounded-xl w-full"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2 justify-center md:justify-start md:flex-none">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-12 h-12 p-0 rounded-full flex items-center justify-center gap-2"
              >
                <Filter className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput placeholder="Search tags..." />
                <CommandList>
                  <CommandEmpty>No tags found.</CommandEmpty>
                  <CommandGroup heading="Select Tags">
                    {allTags.map((tag) => (
                      <CommandItem
                        key={tag}
                        onSelect={() => onTagToggle(tag)}
                        className="flex items-center justify-between cursor-pointer px-3 py-2"
                      >
                        <span>{tag}</span>
                        {selectedTags.includes(tag) && (
                          <span className="text-mulearn-duke-purple font-bold">✓</span>
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className="flex justify-center flex-wrap gap-2 mt-3">
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              className="bg-mulearn text-mulearn-whitish cursor-pointer px-3 py-1"
              onClick={() => onTagToggle(tag)}
            >
              {tag} ✕
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
