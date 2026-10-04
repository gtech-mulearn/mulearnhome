import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  setPage: (n: number) => void;
  total: number;
  perPage: number;
  scrollToId?: string;
}

export function Pagination({ page, setPage, total, perPage, scrollToId }: PaginationProps) {
  const totalPages = Math.ceil(total / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, total);

  if (totalPages <= 1) return null;

  const goToPage = (newPage: number) => {
    setPage(newPage);
    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToPrevious = () => {
    if (page > 1) goToPage(page - 1);
  };

  const goToNext = () => {
    if (page < totalPages) goToPage(page + 1);
  };

  const getPageNumbers = () => {
    const pages: Array<{ type: "ellipsis" | "page"; key: string; number?: number }> = [];
    for (let i = 1; i <= totalPages; i++) {
      const showPage = i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1);

      const showEllipsis =
        (i === page - 2 && page > 3) || (i === page + 2 && page < totalPages - 2);

      if (showEllipsis) {
        pages.push({ type: "ellipsis", key: `ellipsis-${i}` });
      } else if (showPage) {
        pages.push({ type: "page", number: i, key: `page-${i}` });
      }
    }
    return pages;
  };

  return (
    <div className="mt-12 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={goToPrevious}
          disabled={page === 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {getPageNumbers().map((item) => {
            if (item.type === "ellipsis" || item.number === undefined) {
              return (
                <span key={item.key} className="px-2 text-mulearn-gray-600">
                  ...
                </span>
              );
            }
            const pageNumber = item.number;
            return (
              <Button
                key={item.key}
                variant={page === pageNumber ? "default" : "outline"}
                onClick={() => goToPage(pageNumber)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  page === pageNumber
                    ? "bg-mulearn-trusty-blue text-mulearn-whitish hover:bg-mulearn-duke-purple"
                    : "border border-mulearn-gray-300 bg-mulearn-whitish hover:bg-mulearn-gray-50"
                }`}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={page === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>
        <Button
          variant="outline"
          onClick={goToNext}
          disabled={page === totalPages}
          className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <p className="mt-4 text-center text-sm text-mulearn-gray-600">
        Showing {startIndex + 1}-{endIndex} of {total} events
      </p>
    </div>
  );
}
