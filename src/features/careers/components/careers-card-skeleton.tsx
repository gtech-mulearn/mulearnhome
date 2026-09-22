import { Skeleton } from "@/components/ui/skeleton";

function CareersCardSkeleton() {
  return (
    <div className="w-80 rounded-2xl border border-mulearn-trusty-blue/30 bg-mulearn-whitish p-6 flex flex-col items-start gap-4">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-7 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex flex-col items-start gap-2 w-full">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <Skeleton className="h-9 w-full rounded-md" />
    </div>
  );
}

/** Grid of placeholder cards shown while career listings are loading. */
export function CareersCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-4" aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list, never reordered
        <CareersCardSkeleton key={index} />
      ))}
    </div>
  );
}
