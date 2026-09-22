import { Card } from "@/components/ui/card";
import { obtainables } from "../../data/learners.data";

export const WhatYouGet = () => {
  return (
    <section className="py-20 bg-mulearn-whitish">
      {/* Increased padding-left (px-16) to ensure the outside bars don't hit the screen edge */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What You Get as
            <br />a <span className="text-mulearn">Learner</span>?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
          {obtainables.map((obtainable) => {
            const IconComponent = obtainable.icon;
            return (
              <Card key={obtainable.title} className="group p-8 relative">
                <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-[10px] h-16 bg-mulearn rounded-full transition-all duration-300 group-hover:h-20"></div>

                <div className="w-12 h-12 bg-mulearn rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <IconComponent className="w-6 h-6 text-mulearn-whitish" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold mb-3">{obtainable.title}</h3>

                <p className="leading-relaxed text-[15px]">{obtainable.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
