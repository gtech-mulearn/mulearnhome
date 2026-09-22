import { Card } from "@/components/ui/card";
import { benefits } from "../../data/learners.data";

export const WhyMuLearn = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 -mt-25">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Why <span className="text-mulearn">μLearn</span>?
          </h2>
          <p className="text-lg md:text-xl text-mulearn-blackish font-medium">
            Learn by doing. Grow with purpose.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            const isMiddleColumn = index === 1 || index === 4;

            return (
              <Card
                variant={"interactive"}
                key={benefit.title}
                className={`p-7 
                           ${isMiddleColumn ? "lg:-translate-y-10" : "lg:translate-y-0"}`}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-mulearn rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-mulearn-whitish" strokeWidth={2.5} />
                </div>

                {/* Card Content */}
                <p className="text-lg font-medium leading-snug">{benefit.title}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
