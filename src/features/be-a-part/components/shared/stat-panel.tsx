import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/shared";

/** Light brand-blue panel that holds white tiles (stats, structure, people). */
export function StatPanel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-3xl bg-mulearn-trusty-blue/10 p-5 sm:p-8 lg:p-10", className)}>
      {children}
    </div>
  );
}

export function StatTile({
  value,
  label,
  description,
}: {
  /** Numbers count up on first view; strings are shown as-is. */
  value: number | string;
  label: string;
  description?: string;
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm">
      <p className="font-(family-name:--font-display) text-3xl lg:text-4xl font-bold leading-tight text-mulearn">
        {typeof value === "number" ? (
          <AnimatedCounter end={value} duration={2.5} separator="," />
        ) : (
          value
        )}
      </p>
      <p className="mt-2 font-semibold text-mulearn-blackish">{label}</p>
      {description && <p className="mt-1 text-sm text-mulearn-gray-600">{description}</p>}
    </div>
  );
}
