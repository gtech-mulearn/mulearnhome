import type { ReactNode } from "react";
import { MotionDiv } from "@/components/layouts";
import { cn } from "@/lib/utils";

/** Every be-a-part section goes through this so gutters and the vertical rhythm stay identical. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-7xl px-6 py-16 md:py-20", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(centered ? "mx-auto max-w-4xl text-center" : "max-w-2xl", className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl text-mulearn-gray-600 text-pretty",
            centered && "mx-auto max-w-3xl",
          )}
        >
          {description}
        </p>
      )}
    </MotionDiv>
  );
}
