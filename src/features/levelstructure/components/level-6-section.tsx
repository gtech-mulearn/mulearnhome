import { MotionDiv, MuImage } from "@/components/layouts";
import { SparkleField } from "./sparkle-field";

const backgroundSparkles = [
  { position: "top-[10%] left-[20%]", size: "w-4 h-4", opacity: "opacity-50" },
  { position: "top-[30%] left-[5%]", size: "w-6 h-6", opacity: "opacity-40" },
  { position: "bottom-[20%] left-[15%]", size: "w-5 h-5", opacity: "opacity-60" },
  { position: "top-[15%] right-[25%]", size: "w-3 h-3", opacity: "opacity-30" },
  { position: "top-[40%] right-[5%]", size: "w-6 h-6", opacity: "opacity-50" },
  { position: "bottom-[10%] right-[20%]", size: "w-4 h-4", opacity: "opacity-40" },
  { position: "top-[50%] left-[30%]", size: "w-3 h-3", opacity: "opacity-50" },
  { position: "bottom-[40%] right-[30%]", size: "w-5 h-5", opacity: "opacity-60" },
];

const foregroundSparkles = [
  { position: "top-[10%] right-[20%]", size: "w-4 h-4", opacity: "opacity-50" },
  { position: "bottom-[40%] left-[10%]", size: "w-6 h-6", opacity: "opacity-30" },
];

export function Level6Section() {
  return (
    <section className="relative flex items-center py-15 overflow-hidden" id="level-6">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <MuImage
          src="/assets/levelstructure/line-lvl2.svg"
          alt="Line Path"
          width={1400}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1600px] object-contain opacity-40"
        />
        <MuImage
          src="/assets/levelstructure/rocket-lvl2.webp"
          alt="Rocket"
          width={300}
          height={400}
          className="hidden md:block absolute top-0 right-[-10%] sm:right-[-5%] lg:right-[5%] z-20 w-[40%] sm:w-[30%] max-w-[300px] object-contain"
        />
        <SparkleField sparkles={backgroundSparkles} />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-lg aspect-square hidden md:flex flex-col items-center justify-center">
              {/* LEFT SIDE: REDESIGNED CONTENT for even level */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-mulearn-blackish tracking-tight">
                  Level 6: <span className="text-mulearn-trusty-blue">Build. Ship. Impact.</span>
                </h2>
                <p className="text-sm md:text-base text-mulearn-blackish leading-relaxed max-w-2xl font-semibold">
                  At this level, learners grow into builders and instead of making prototypes, they
                  ship them to real users.
                </p>

                {/* Impact Examples Section */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                      A game developer may launch their first game, while the AI team may build a
                      mental wellness chatbot.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                      On the other side, a civil-mechanical duo prototypes a low cost water filter
                      for rural areas.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                      Their paths may be different, but the end goal is the same.
                    </p>
                  </div>
                </div>

                {/* Proof of Impact Section */}
                <div className="bg-mulearn-whitish border-[1.5px] border-mulearn-blackish rounded-[2.5rem] p-6">
                  <p className="text-sm md:text-base text-mulearn-blackish leading-relaxed font-semibold">
                    Proof of works turn into proof of impact and that is exactly how the learners
                    get their key for entering the Muverse.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <div className="relative z-10 w-full max-w-[550px] hover:-translate-y-4 transition-transform duration-700 ease-in-out">
              <MuImage
                src="/assets/levelstructure/astronauts.webp"
                alt="Build & Ship Astronauts"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <SparkleField sparkles={foregroundSparkles} />

            <div className="absolute bottom-[-30%] right-[10%] w-64 h-64 md:w-72 md:h-72 opacity-50 z-0">
              <MuImage
                src="/assets/levelstructure/galaxy-lvl6.webp"
                alt="Portal"
                width={288}
                height={288}
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
