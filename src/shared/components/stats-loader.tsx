import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface StatsLoaderProps {
  /** How many placeholder stat cards to render. */
  count?: number;
  /** Grid/layout classes for the wrapper — pass the same classes the real stats grid uses. */
  className?: string;
}

/** Pulsing placeholder shown while `useLandingStats` is still waiting on its first WebSocket message. */
export function StatsLoader({ count = 4, className }: StatsLoaderProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)} aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list, never reordered
        <div key={index} className="flex flex-col items-center gap-2 p-4">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      ))}
    </div>
  );
}
