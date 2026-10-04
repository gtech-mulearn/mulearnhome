import {
  Award,
  Briefcase,
  Calendar,
  LayoutGrid,
  type LucideIcon,
  Trophy,
  Users,
} from "lucide-react";
import { MotionDiv } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { galleryCategories } from "../data/impact-gallery.data";

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categoryIcons: Record<string, LucideIcon> = {
  all: LayoutGrid,
  events: Calendar,
  students: Award,
  companies: Briefcase,
  mentors: Users,
  "impact-stories": Trophy,
};

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {galleryCategories.map((category) => {
        const Icon = categoryIcons[category.id] || LayoutGrid;
        const isActive = activeFilter === category.id;

        return (
          <MotionDiv key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onFilterChange(category.id)}
              variant={isActive ? "default" : "outline"}
              className="flex items-center gap-2 rounded-full"
            >
              <Icon size={18} />
              <span>{category.label}</span>
            </Button>
          </MotionDiv>
        );
      })}
    </div>
  );
}
