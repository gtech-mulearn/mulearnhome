import { whyKarma } from "@/data/learners";
import { cn } from "@/lib/utils";
import { accentChip } from "./accents";

const WhyKarmaPoints = () => {
  return (
    <section id="why-karma-points">
      <div className="text-center">
        <h2>
          Why Karma Points Matter
          <br />
          in <span className="text-mulearn">µLearn</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-mulearn-gray-600">
          Karma points represent your real effort inside µLearn. They show how active, consistent
          and committed you are as you complete tasks.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {whyKarma.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="flex flex-col items-center text-center">
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-full text-mulearn-whitish",
                  accentChip[index % accentChip.length],
                )}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-mulearn-blackish">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mulearn-gray-600">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyKarmaPoints;
