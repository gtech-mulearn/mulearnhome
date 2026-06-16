import { Sparkle } from "lucide-react";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";

export default function Level7Section() {
  return (
    <section className="relative flex items-center py-15 overflow-hidden" id="level-7">
      <div className="absolute inset-0 pointer-events-none z-0">
        <MuImage
          src="/assets/levelstructure/bg_lvl7.svg"
          alt="μVerse Background"
          fill
          className="object-cover object-center opacity-90"
          preload
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-mulearn-blackish tracking-tight">
            Level 7: Where Talent Meets Opportunity
          </h2>
          <p className="text-lg md:text-2xl text-mulearn-blackish max-w-4xl mx-auto font-medium leading-relaxed">
            At level 7,the path now opens to the µVerse. Learners are connected to opportunities
            instead of just stopping it right there at skill development.
          </p>
          <p className="text-base md:text-lg text-mulearn-gray-600 max-w-3xl mx-auto leading-relaxed">
            A space science enthusiast may land a fellowship at CubeSat program,while a film
            enthusiast might be able to get freelance work with ad agencies.
          </p>
          <p className="text-lg font-bold text-mulearn-blackish">
            Here,talent is converted into opportunities and learners become global contributors.
          </p>
        </MotionDiv>

        <div className="w-full max-w-4xl mx-auto mb-16 p-8 bg-mulearn-whitish border-[1.5px] border-mulearn-blackish rounded-[2.5rem]">
          <p className="text-base md:text-lg text-mulearn-blackish leading-relaxed font-semibold">
            This could possibly be how a student&apos;s life could change. Instead of falling into
            the vicious cycle that they find during their college,they can find their own path.A
            predictable college life could be turned extraordinary by investing in the right skill
            set that compliments their passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-20">
          {[
            {
              title: "For students",
              text: "it is personal growth and access.",
            },
            {
              title: "For academia",
              text: "it brings alignment to the industry.",
            },
            {
              title: "For companies",
              text: "it is a proof-of-work talent pipeline.",
            },
            {
              title: "For governments",
              text: "it is a civic innovation system at youth scale.",
            },
          ].map((card, i) => (
            <MotionDiv
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="bg-mulearn-whitish border-[1.5px] border-mulearn-blackish rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-mulearn-blackish mb-2">{card.title}</h3>
              <p className="text-sm text-mulearn-blackish leading-relaxed font-medium">
                {card.text}
              </p>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto pt-6 border-t border-mulearn/20"
        >
          <p className="text-xl md:text-2xl text-mulearn font-bold leading-relaxed">
            µlearn is not just about learning-it is a regenerative talent engine that transforms
            students into innovators builders and global contributors.
          </p>
        </MotionDiv>

        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Sparkle className="absolute top-[15%] left-[5%] text-mulearn-trusty-blue w-4 h-4 fill-mulearn-trusty-blue" />
          <Sparkle className="absolute top-[40%] right-[10%] text-mulearn-trusty-blue w-6 h-6 fill-mulearn-trusty-blue" />
          <Sparkle className="absolute bottom-[20%] left-[15%] text-mulearn-trusty-blue w-5 h-5 fill-mulearn-trusty-blue" />
          <Sparkle className="absolute top-[60%] left-[45%] text-mulearn-trusty-blue w-3 h-3 fill-mulearn-trusty-blue" />
        </div>
      </div>
    </section>
  );
}
