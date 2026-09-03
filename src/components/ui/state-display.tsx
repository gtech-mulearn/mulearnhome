import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * StateDisplay — shared μLearn visual state component.
 *
 * 📍 src/components/ui/state-display.tsx
 *
 * Renders an illustrated empty / no-results / no-tasks / 404 state with a
 * consistent layout, typography and accessibility behaviour. The mapping
 * between a state `variant` and its illustration + default copy lives in the
 * centralized {@link STATE_ILLUSTRATIONS} registry below — adding a new state
 * is a matter of dropping an SVG into `public/assets/illustrations/` and
 * registering one entry here, not touching this component.
 *
 * Illustrations are treated as decorative (empty `alt`): the heading and
 * description communicate the state to assistive technology, so we don't
 * duplicate that copy in the image.
 */

interface StateConfigEntry {
  /** Path under `public/` to the illustration SVG. */
  src: string;
  /** Intrinsic width of the SVG (preserves aspect ratio, avoids layout shift). */
  width: number;
  /** Intrinsic height of the SVG. */
  height: number;
  /** μLearn-aligned default heading; features may override per-context. */
  defaultTitle: string;
  /** μLearn-aligned default supporting copy; features may override per-context. */
  defaultDescription: string;
}

/**
 * Centralized state → illustration + default copy registry.
 *
 * To add a future state (e.g. "no-notifications", "offline", "permission-denied"):
 *   1. Add the SVG to `public/assets/illustrations/`.
 *   2. Register a new entry here with its intrinsic width/height and default copy.
 *   3. That's it — `StateVariant` and every consumer stay type-safe automatically.
 */
export const STATE_ILLUSTRATIONS = {
  "no-results": {
    src: "/assets/illustrations/no-results.svg",
    width: 1536,
    height: 1024,
    defaultTitle: "Nothing here. Yet.",
    defaultDescription:
      "Curiosity doesn't always find answers on the first try. Try a different path and keep exploring.",
  },
  "no-tasks": {
    src: "/assets/illustrations/no-tasks.svg",
    width: 1536,
    height: 1024,
    defaultTitle: "No tasks available",
    defaultDescription:
      "There are currently no tasks listed in this view. New tasks will appear here once created.",
  },
} as const satisfies Record<string, StateConfigEntry>;

/** Type-safe union of supported states, inferred from the registry. */
export type StateVariant = keyof typeof STATE_ILLUSTRATIONS;

/** Illustration display size. Compact UI should not use this component at all. */
type StateDisplaySize = "sm" | "md" | "lg";

const ILLUSTRATION_MAX_WIDTH: Record<StateDisplaySize, string> = {
  sm: "max-w-45",
  md: "max-w-65",
  lg: "max-w-90",
};

interface StateDisplayProps {
  /** Which state to render — selects the illustration and default copy. */
  variant: StateVariant;
  /** Overrides the variant's default heading. */
  title?: ReactNode;
  /** Overrides the variant's default description. */
  description?: ReactNode;
  /** Optional contextual action(s) — e.g. a "Back to Home" or "Clear filters" button. */
  action?: ReactNode;
  /** Illustration size preset. Defaults to `md`. */
  size?: StateDisplaySize;
  /** Additional classes for the outer container (spacing, min-height, etc.). */
  className?: string;
}

export function StateDisplay({
  variant,
  title,
  description,
  action,
  size = "md",
  className,
}: StateDisplayProps) {
  const config = STATE_ILLUSTRATIONS[variant];

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 px-4 py-10 text-center",
        className,
      )}
    >
      <Image
        src={config.src}
        alt=""
        aria-hidden="true"
        width={config.width}
        height={config.height}
        className={cn("h-auto w-full", ILLUSTRATION_MAX_WIDTH[size])}
        priority={false}
      />
      <div className="flex max-w-md flex-col gap-1">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          {title ?? config.defaultTitle}
        </h2>
        <p className="text-sm text-muted-foreground">{description ?? config.defaultDescription}</p>
      </div>
      {action ? <div className="mt-2 flex flex-wrap justify-center gap-3">{action}</div> : null}
    </div>
  );
}
