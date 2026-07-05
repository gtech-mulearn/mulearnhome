import type * as React from "react";
import { cn } from "@/lib/utils";

/**
 * PageContainer — the standard page shell for redesigned pages.
 *
 * Encodes two things once, so every page stays consistent:
 *  - Horizontal gutters aligned with the Navbar/Footer
 *    (`px-12 md:px-5 lg:px-8 xl:px-12`) so page content lines up with them.
 *  - The uniform vertical rhythm between top-level sections. Direct children
 *    are spaced with a single site-wide section gap; do not add ad-hoc
 *    top/bottom margins to sections — rely on this instead.
 */
function PageContainer({ className, children, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "w-full px-12 md:px-5 lg:px-8 xl:px-12 py-12 md:py-16",
        "flex flex-col gap-16 md:gap-24",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}

export { PageContainer };
