import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SparkleSpec {
  /** Tailwind position classes, e.g. "top-[10%] left-[20%]" */
  position: string;
  /** Tailwind size classes, e.g. "w-4 h-4" */
  size: string;
  opacity?: string;
  z?: string;
}

/** Renders a set of decorative Sparkle icons from coordinate data instead of repeated JSX. */
export function SparkleField({ sparkles }: { sparkles: SparkleSpec[] }) {
  return (
    <>
      {sparkles.map((s, i) => (
        <Sparkle
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list, never reordered
          key={i}
          className={cn(
            "absolute text-mulearn-trusty-blue fill-mulearn-trusty-blue",
            s.position,
            s.size,
            s.opacity,
            s.z,
          )}
        />
      ))}
    </>
  );
}
