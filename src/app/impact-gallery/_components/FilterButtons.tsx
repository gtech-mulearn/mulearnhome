import { MotionDiv } from "@/components/MuFramer";
import { galleryCategories } from "@/data/data";
import { Button } from "@/components/ui/button";

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterButtons({
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {galleryCategories.map((category) => (
        <MotionDiv
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === category.id ? "mulearn" : "outline"}
            onClick={() => onFilterChange(category.id)}
            className="px-6 py-3 rounded-full font-semibold"
          >
            {category.label}
            <span
              className={`ml-2 text-sm ${
                activeFilter === category.id
                  ? "text-mulearn-whitish/80"
                  : "text-mulearn-gray-600"
              }`}
            >
              ({category.count})
            </span>
          </Button>
        </MotionDiv>
      ))}
    </div>
  );
}
