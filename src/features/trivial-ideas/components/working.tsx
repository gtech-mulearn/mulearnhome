import { MotionDiv } from "@/components/layouts";

export const Working = () => {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold "
            >
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                How Does This <span className="text-mulearn-trusty-blue">Work</span>
              </h3>
              <p className="text-lg text-mulearn-gray-600 max-w-xl mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet,consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
                elit{" "}
              </p>
            </MotionDiv>
          </div>

          <div>
            <div>
              <div className="max-w-3xl mx-auto space-y-8">
                {steps.map((_, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-mulearn-trusty-blue text-mulearn-whitish flex items-center justify-center">
                          {index + 1}
                        </div>

                        {index !== steps.length - 1 && (
                          <div className="w-px flex-1 bg-mulearn-greyish mt-2" />
                        )}
                      </div>

                      <div className="flex-1 rounded-xl border p-6">
                        <h3 className="font-semibold text-mulearn-gray-600">
                          Step details coming soon
                        </h3>
                        <p className="text-sm text-mulearn-gray-600">
                          This content will be updated shortly.
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
