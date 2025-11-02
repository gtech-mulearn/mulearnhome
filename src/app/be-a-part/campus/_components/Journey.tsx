import { MotionDiv } from "@/components/MuFramer";
import { campusChapter } from "@/data/data";

export default function Journey() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
            Your Chapter{" "}
            <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-mulearn-gray-600">
            Seven steps from interest to impact
          </p>

          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple transform -translate-x-1/2" />

            {campusChapter.journey.map((step, index) => {
              const stepNumber = index + 1;
              const isLeft = index % 2 === 0;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative mb-24 last:mb-0"
                >
                  <div
                    className={`flex items-center ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        isLeft ? "pr-12 text-right" : "pl-12 text-left"
                      }`}
                    >
                      <div className="bg-mulearn-whitish p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <h3 className="text-xl font-bold text-mulearn-blackish">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-mulearn-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MotionDiv
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="w-12 h-12 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-mulearn-whitish font-bold text-lg">
                        {stepNumber}
                      </span>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              );
            })}
          </div>

          <div className="md:hidden space-y-8">
            {campusChapter.journey.map((step, index) => {
              const stepNumber = index + 1;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {index < campusChapter.journey.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple transform -translate-x-1/2" />
                  )}

                  <div className="absolute left-0 top-0">
                    <div className="w-10 h-10 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full flex items-center justify-center shadow-md text-mulearn-whitish font-bold">
                      {stepNumber}
                    </div>
                  </div>

                  <div className="bg-mulearn-whitish p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-bold text-mulearn-blackish mb-2">
                      {step.title}
                    </h3>
                    <p className="text-mulearn-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
