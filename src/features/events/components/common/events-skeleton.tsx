import { Skeleton } from "@/components/ui/skeleton";

function EventCardSkeleton() {
  return (
    <div className="w-full sm:w-[380px] h-[460px] flex flex-col gap-3">
      <Skeleton className="w-full h-48 rounded-[20px]" />
      <div className="px-1 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

/** Skeleton shown while `EventsList` is still fetching — mirrors the tabs + card grid shape. */
export function EventsSkeleton() {
  return (
    <div aria-busy="true">
      <div className="mb-10 flex justify-center gap-2">
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
        <Skeleton className="h-10 w-20 rounded-full" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list, never reordered
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
