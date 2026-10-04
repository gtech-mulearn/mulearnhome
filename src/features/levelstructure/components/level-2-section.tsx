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
  { position: "top-10 left-4", size: "w-6 h-6", opacity: "opacity-50", z: "z-50" },
  { position: "top-1/4 right-0", size: "w-5 h-5", opacity: "opacity-40", z: "z-50" },
  { position: "bottom-[40%] left-[-10%]", size: "w-4 h-4", opacity: "opacity-50", z: "z-50" },
  { position: "top-[60%] right-[-15%]", size: "w-3 h-3", opacity: "opacity-30", z: "z-50" },
  { position: "bottom-4 left-1/2", size: "w-5 h-5", opacity: "opacity-60", z: "z-50" },
  { position: "top-[-5%] right-[-25%]", size: "w-4 h-4", opacity: "opacity-40", z: "z-50" },
];

export function Level2Section() {
  return (
    <section className="relative flex items-center py-15 overflow-hidden" id="level-2">
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
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-lg aspect-square hidden md:flex flex-col items-center justify-center">
              {/* LEFT SIDE: TEXT CONTENT for even level */}
              <SparkleField sparkles={foregroundSparkles} />

              <MuImage
                src="/assets/levelstructure/planet-lvl2.webp"
                alt="Planet"
                width={240}
                height={240}
                className="absolute -bottom-12 -left-[30%] w-[50%] z-0 max-w-[240px] object-contain opacity-80"
              />

              <div className="relative w-full h-[550px] hidden md:block mt-4 z-10">
                <MuImage
                  src="/assets/levelstructure/astronaut3.webp"
                  alt="Astronaut"
                  width={350}
                  height={350}
                  className="absolute top-0 left-[40%] -translate-x-[50%] z-10 w-[100%] max-w-[350px] object-contain"
                />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 md:order-1 relative z-10"
          >
            <div className="relative w-full max-w-lg aspect-square hidden md:flex flex-col items-center justify-center">
              {/* RIGHT SIDE: IMAGE CONTENT for even level */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-mulearn-blackish tracking-tight">
                  Level 2:{" "}
                  <span className="text-mulearn-trusty-blue">Breaking Your Invisible Cages</span>
                </h2>

                <p className="text-lg text-mulearn-blackish leading-relaxed font-semibold">
                  Most students walk into this level with invisible cages. A web development student
                  may think that they are not good enough to compete globally while a comic artist
                  may doubt a future for his passion.
                </p>

                <p className="text-base text-mulearn-blackish font-medium">
                  Not with their CGPA or ranks,but with a simple statement about who they are.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="pl-4 border-l-[3px] border-mulearn-trusty-blue py-1">
                    <p className="text-sm sm:text-base text-mulearn-blackish font-medium">
                      One can write ” I&apos;m curious about green buildings” and another one can
                      write “ I make short reels in my hostel room. ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
