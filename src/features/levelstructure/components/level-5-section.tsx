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
  { position: "top-[10%] left-[20%]", size: "w-4 h-4", opacity: "opacity-50" },
  { position: "bottom-[20%] right-[10%]", size: "w-6 h-6", opacity: "opacity-30" },
  { position: "top-[50%] left-[5%]", size: "w-3 h-3", opacity: "opacity-25" },
  { position: "bottom-[10%] left-[40%]", size: "w-5 h-5", opacity: "opacity-20" },
];

export function Level5Section() {
  return (
    <section className="relative flex items-center py-15 overflow-hidden" id="level-5">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <MuImage
          src="/assets/levelstructure/line-lvl2.svg"
          alt="Line Path"
          width={1400}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1600px] object-contain opacity-40 scale-x-[-1]"
        />
        <MuImage
          src="/assets/levelstructure/rocket-lvl2.webp"
          alt="Rocket"
          width={300}
          height={400}
          className="hidden md:block absolute top-0 left-[-10%] sm:left-[-5%] lg:left-[5%] z-20 w-[40%] sm:w-[30%] max-w-[300px] object-contain scale-x-[-1]"
        />
        <SparkleField sparkles={backgroundSparkles} />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-1"
          >
            <div className="relative flex items-center justify-center lg:justify-start lg:-ml-32 min-h-[500px]">
              <div className="absolute top-[40%] left-[55%] w-[450px] md:w-[500px] h-auto opacity-80 pointer-events-none z-0">
                <MuImage
                  src="/assets/levelstructure/planets-lvl5.webp"
                  alt="Floating Planets"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[480px] hover:-translate-y-4 transition-transform duration-700 ease-in-out"
              >
                <MuImage
                  src="/assets/levelstructure/astronaut4.webp"
                  alt="The Global Arena Astronaut"
                  width={480}
                  height={480}
                  className="w-full h-auto object-contain"
                />
              </MotionDiv>

              <SparkleField sparkles={foregroundSparkles} />
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20 order-2"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-mulearn-blackish tracking-tight">
                Level 5: <span className="text-mulearn-trusty-blue">The Global Arena Awaits</span>
              </h2>
              <p className="text-sm md:text-base text-mulearn-blackish leading-relaxed max-w-2xl font-semibold">
                Hackathons,design competitions,film festivals and global challenges appear. The
                competition might be intense,but it is not something that will push the learners
                away. They face global peers raising their bars,sharpening their skills,and thus
                building recognition.
              </p>
            </div>

            <div className="space-y-6 relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] flex flex-col gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex-1 bg-mulearn-trusty-blue rounded-full" />
                ))}
              </div>

              <div className="py-1">
                <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                  An AI student competes in an LLM hackathon while a civil learner participates in
                  design challenges.
                </p>
              </div>
              <div className="py-1">
                <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                  At the same time, a project management learner may take a part in global case
                  competitions.
                </p>
              </div>
              <div className="py-1">
                <p className="text-sm md:text-base text-mulearn-blackish font-medium">
                  The level is not exclusive for anyone-every interest group has their own
                  battlefield which may be different from the other.
                </p>
              </div>
            </div>

            <div className="bg-mulearn-whitish border-[1.5px] border-mulearn-blackish rounded-[2.5rem] p-8 shadow-sm max-w-xl">
              <p className="text-sm md:text-base text-mulearn-blackish leading-relaxed">
                <span className="font-bold">The End Goal</span>
                <br />
                But,there is only one end goal for level 5-transform into contributors,not just stay
                there as participants.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
