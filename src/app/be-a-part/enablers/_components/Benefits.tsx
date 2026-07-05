import { Award, Building2, Layers, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Layers,
    title: "Structured Framework",
    description: "Clear guidelines for smooth chapter functioning.",
    chip: "bg-category-blue",
    text: "text-category-blue",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Bridge the gap between education and employment by fueling the next generation of talent.",
    chip: "bg-category-purple",
    text: "text-category-purple",
  },
  {
    icon: Building2,
    title: "Campus Impact",
    description:
      "Enable portfolios, projects and student-led initiatives that enhance institution reputation.",
    chip: "bg-category-teal",
    text: "text-category-teal",
  },
  {
    icon: Award,
    title: "Faculty Recognition",
    description:
      "Enable portfolios, projects and student-led initiatives that enhance institution reputation.",
    chip: "bg-category-amber",
    text: "text-category-amber",
  },
];

export default function Benefits() {
  return (
    <section id="benefits">
      <h2 className="text-center">
        Benefits of an <span className="text-mulearn">Enabler</span>?
      </h2>

      <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <li key={card.title}>
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl text-mulearn-whitish",
                  card.chip,
                )}
              >
                <Icon className="size-5" />
              </span>
              <h3 className={cn("mt-4 text-lg font-bold", card.text)}>{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mulearn-gray-600">
                {card.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
