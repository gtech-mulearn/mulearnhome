import type { LucideIcon } from "lucide-react";
import { MotionLi } from "@/components/layouts";

export interface IconListItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

/** A single card of icon rows separated by hairlines — for short lists that don't need a card each. */
export function IconList({ items }: { items: IconListItem[] }) {
  return (
    <ul className="divide-y divide-mulearn/10 rounded-3xl border border-mulearn/10 bg-card shadow-sm">
      {items.map(({ icon: Icon, title, description }, index) => (
        <MotionLi
          key={title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
          className="flex gap-4 p-5 sm:p-6"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mulearn/10 text-mulearn">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div className={description ? "" : "self-center"}>
            <p className="text-lg font-semibold leading-snug text-mulearn-blackish">{title}</p>
            {description && <p className="mt-1 text-mulearn-gray-600">{description}</p>}
          </div>
        </MotionLi>
      ))}
    </ul>
  );
}
