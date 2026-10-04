import { MotionDiv, MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { cdnUrl } from "@/shared";
import { SuccessStories } from "../../data/company.data";

export const Success = () => {
  const fallbackImage = cdnUrl("public/assets/team/default.webp");
  return (
    <section className="py-10 px-11 overflow-hidden relative min-h-[700px]">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-col">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-center pt-20">
            <span className="text-mulearn-blackish">Success Stories From </span>
            <span className="text-mulearn">µLearn partners</span>
          </h1>
        </MotionDiv>

        <MuImage
          src={"/assets/company/hand.webp"}
          alt="hand icon"
          className="absolute right-40 bottom-0 w-[92px] h-[115px] rotate-[16deg] hidden lg:block"
          width={92}
          height={115}
        />

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full overflow-hidden py-20"
        >
          <MotionDiv
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex gap-8 mt-10 w-max"
          >
            {[...SuccessStories].map((feature) => (
              <Card
                key={`${feature.id}`}
                className="w-[320px] shrink-0 flex flex-col border-mulearn/10 bg-gradient-to-br from-mulearn-whitish to-mulearn/5"
              >
                <CardContent className="flex flex-col items-center p-6 flex-1">
                  <MuImage
                    src={feature.profileImage || fallbackImage}
                    alt={feature.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <h3 className="text-xl font-bold text-center mt-4">{feature.name}</h3>
                  <p className="text-center font-medium text-sm">{feature.role}</p>
                  <p className="text-center font-medium text-sm mt-2 flex-1">{feature.quote}</p>
                </CardContent>
              </Card>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
