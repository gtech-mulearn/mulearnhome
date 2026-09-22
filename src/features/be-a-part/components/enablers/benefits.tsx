import type { LucideIcon } from "lucide-react";
import { Award, Building2, Layers, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: BenefitCard[] = [
  {
    icon: Layers,
    title: "Structured Framework",
    description: "Clear guidelines for smooth chapter functioning.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Bridge the gap between education and employment by fueling the next generation of talent.",
  },
  {
    icon: Building2,
    title: "Campus Impact",
    description:
      "Enable portfolios, projects and student-led initiatives that enhance institution reputation.",
  },
  {
    icon: Award,
    title: "Faculty Recognition",
    description:
      "Enable portfolios, projects and student-led initiatives that enhance institution reputation.",
  },
];

const Icon = ({ icon: IconComponent }: { icon: LucideIcon }) => (
  <IconComponent className="w-12 h-12 text-mulearn" />
);

export function EnablersBenefits() {
  return (
    <section className="mx-auto max-w-[1276px] px-6 py-16 lg:px-8 lg:py-20">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="self-stretch text-center">
          <span className="text-5xl font-bold leading-[62.40px]">Benefits of an </span>
          <span className="text-mulearn text-5xl font-bold leading-[62.40px]">Enabler</span>
          <span className="text-5xl font-bold leading-[62.40px]">?</span>
        </div>

        <div className="w-full flex flex-col items-center gap-5 xl:flex-row xl:items-start xl:flex-wrap xl:justify-start">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="relative w-full max-w-xs xl:w-72 h-60 p-6 flex flex-col justify-start items-start gap-5"
            >
              <div className="w-12 h-12 relative overflow-hidden flex-shrink-0">
                <Icon icon={card.icon} />
              </div>
              <div className="text-mulearn text-2xl font-semibold leading-6">{card.title}</div>
              <div className="self-stretch text-base font-normal leading-6">{card.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
