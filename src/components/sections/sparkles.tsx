import { cn } from "@/lib/utils";

const Star = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    shapeRendering="geometricPrecision"
    className={className}
  >
    <path
      d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
    />
  </svg>
);

/** The large + small four-point star pair used as an accent across the marketing pages.
 * Position it with `className` (it is absolutely positioned and hidden below `lg`). */
export const Sparkles = ({ className }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute hidden lg:block text-mulearn-blackish", className)}
  >
    <Star className="size-15" />
    <Star className="absolute -right-3 -bottom-2.5 size-5" />
  </div>
);
