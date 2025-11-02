import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { enablers } from "@/data/data";

export default function Onboarding() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className=" mb-16 text-center text-3xl font-bold text-mulearn-blackish md:text-4xl lg:text-5xl">
          Onboarding{" "}
          <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
            Process
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {enablers.onboarding.map((step, idx) => (
            <MotionDiv
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              className="relative flex flex-col items-center"
            >
              {idx < enablers.onboarding.length - 1 && (
                <div
                  className="absolute left-[calc(50%+3rem)] top-12 hidden h-0.5 w-[calc(100%-6rem)] border-t-2 border-dashed border-mulearn-blackish/30 md:block"
                  style={{ zIndex: 0 }}
                />
              )}

              <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-mulearn-trusty-blue to-mulearn-duke-purple shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-mulearn-whitish">
                  <MuImage
                    src={step.image}
                    alt={`${step.title} icon`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-mulearn-blackish text-xs font-bold text-mulearn-whitish shadow-md">
                  {step.number}
                </div>
              </div>

              <div className="text-center">
                <h3 className=" mb-3 text-xl font-bold text-mulearn-blackish">
                  {step.title}
                </h3>
                <p className=" text-sm leading-relaxed text-mulearn-gray-600">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
}
