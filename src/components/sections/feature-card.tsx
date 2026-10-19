import type { LucideIcon } from "lucide-react";
import { MotionDiv } from "@/components/layouts";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  /** Small label above the title, e.g. a cadence like "Weekly". */
  meta?: string;
  /** Position in its grid, used to stagger the entrance animation. */
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, meta, index = 0 }: FeatureCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      <article className="flex h-full flex-col gap-5 rounded-2xl border border-mulearn/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <Icon className="size-10 text-mulearn" strokeWidth={1.5} aria-hidden="true" />
        <div>
          {meta && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-mulearn-gray-600">
              {meta}
            </p>
          )}
          <h3 className="text-xl md:text-2xl font-bold leading-tight text-mulearn-trusty-blue">
            {title}
          </h3>
        </div>
        {description && <p className="text-mulearn-gray-600">{description}</p>}
      </article>
    </MotionDiv>
  );
}
