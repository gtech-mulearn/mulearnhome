import { obtainables } from "@/data/learners";
import { cn } from "@/lib/utils";
import { accentBorder } from "./accents";

const WhatYouGet = () => {
  return (
    <section id="what-you-get">
      <h2 className="md:text-5xl">
        What You Get as
        <br />a <span className="text-mulearn">Learner</span>?
      </h2>

      <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {obtainables.map((obtainable, index) => (
          <li
            key={obtainable.title}
            className={cn("border-l-4 pl-5", accentBorder[index % accentBorder.length])}
          >
            <h3 className="text-lg font-bold text-mulearn-blackish">{obtainable.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mulearn-gray-600">
              {obtainable.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatYouGet;
