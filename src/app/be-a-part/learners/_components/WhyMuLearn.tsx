import { benefits } from "@/data/learners";
import { cn } from "@/lib/utils";
import { accentChip } from "./accents";

const WhyMuLearn = () => {
  return (
    <section id="why-mulearn">
      <div className="text-center">
        <h2>
          Why <span className="text-mulearn">µLearn</span>?
        </h2>
        <p className="mt-3 text-base text-mulearn-gray-600">Learn by doing. Grow with purpose.</p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <li key={benefit.title} className="flex items-start gap-3">
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl text-mulearn-whitish",
                  accentChip[index % accentChip.length],
                )}
              >
                <Icon className="size-5" strokeWidth={2.2} />
              </span>
              <p className="text-sm font-medium leading-snug text-mulearn-blackish md:text-base">
                {benefit.title}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyMuLearn;
