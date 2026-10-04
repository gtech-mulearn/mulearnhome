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

const INTEREST_GROUPS = [
  { name: "Web Development", icon: "/assets/interestgroups/webdev.svg" },
  { name: "UI/UX Design", icon: "/assets/interestgroups/design.svg" },
  { name: "Game Development", icon: "/assets/interestgroups/game.svg" },
  { name: "AR/VR", icon: "/assets/interestgroups/arvr.svg" },
  { name: "Cloud and DevOps", icon: "/assets/interestgroups/cloud.svg" },
  { name: "Digital Marketing", icon: "/assets/interestgroups/marketing.svg" },
  { name: "Cybersecurity", icon: "/assets/interestgroups/cyber.svg" },
  { name: "Internet Of Things (IOT) And Robotics", icon: "/assets/interestgroups/iot.svg" },
  { name: "Product Management", icon: "/assets/interestgroups/product.svg" },
];

export function Level4Section() {
  return (
    <section className="relative flex items-center py-15 overflow-hidden" id="level-4">
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
              {/* LEFT SIDE: TEXT CONTENT for even level */}
              <div className="space-y-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-mulearn-blackish tracking-tight leading-tight">
                  Level 4: <span className="text-mulearn-trusty-blue">Choose Your Tribe</span>
                </h2>
                <p className="text-sm md:text-base font-semibold text-mulearn-blackish max-w-3xl mx-auto leading-relaxed">
                  This is the level 4,where students enter different interest groups. Some walk with
                  AI,while some others choose the Web tribe. A few others move into film,animation
                  or comics to weave their imagination. Many of them choose civil/mechanical,or
                  space shaping physical reality and touching the stars.
                </p>
                <p className="text-xs md:text-sm text-mulearn-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                  At this point, there is no more scattered learning. The learners can start
                  building proof of work within their chosen interest group.
                </p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 md:order-2 relative z-10"
          >
            <div className="relative w-full max-w-lg aspect-square hidden md:flex flex-col items-center justify-center">
              {/* RIGHT SIDE: IMAGE CONTENT + INTEREST GROUPS for even level */}
              <div className="hidden lg:flex flex-col items-center gap-7 w-full overflow-visible">
                <div className="grid grid-cols-2 gap-7 w-full overflow-visible">
                  {INTEREST_GROUPS.slice(0, 4).map((group, index) => (
                    <MotionDiv
                      key={group.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                    >
                      <MuImage
                        src={group.icon}
                        alt={group.name}
                        width={700}
                        height={500}
                        className="w-[180%] -ml-[40%] h-auto drop-shadow-xl rounded-2xl"
                      />
                    </MotionDiv>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-7 w-full overflow-visible">
                  {INTEREST_GROUPS.slice(4).map((group, index) => (
                    <MotionDiv
                      key={group.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex-1 group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                    >
                      <MuImage
                        src={group.icon}
                        alt={group.name}
                        width={600}
                        height={400}
                        className="w-[180%] -ml-[40%] h-auto drop-shadow-xl rounded-2xl"
                      />
                    </MotionDiv>
                  ))}
                </div>
              </div>

              <div className="grid lg:hidden grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 w-full overflow-visible">
                {INTEREST_GROUPS.map((group, index) => (
                  <MotionDiv
                    key={group.name + "-mobile"}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                  >
                    <MuImage
                      src={group.icon}
                      alt={group.name}
                      width={400}
                      height={250}
                      className="w-[140%] -ml-[20%] h-auto drop-shadow-xl rounded-2xl"
                    />
                  </MotionDiv>
                ))}
              </div>

              {/* Rocket image moved here for visual balance - positioned behind the images */}
              <MuImage
                src="/assets/levelstructure/rocket-lvl2.webp"
                alt="Rocket"
                width={600}
                height={800}
                className="absolute bottom-0 left-[0] z-[-1] opacity-30"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
