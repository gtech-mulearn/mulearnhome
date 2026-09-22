import { Skeleton } from "@/components/ui/skeleton";

function GenericEventCardSkeleton() {
  return (
    <div className="relative bg-mulearn-whitish rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl overflow-hidden border border-mulearn-greyish/30 w-full h-full flex flex-col">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 flex flex-col gap-2.5">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

/** Grid of placeholder cards shown while an events/episodes list is loading. */
export function GenericEventCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list, never reordered
        <GenericEventCardSkeleton key={index} />
      ))}
    </div>
  );
}
