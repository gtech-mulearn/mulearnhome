import type { Variants } from "framer-motion";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { opportunities } from "../data/home.data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Opportunities() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full ">
      <MotionSection
        className="flex flex-col justify-center py-24 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv className="text-center" variants={fadeInUp}>
          <h2>
            At The <span className="text-mulearn">End</span> Of a μLearners{" "}
            <span className="text-mulearn">Journey</span>
          </h2>
          <p className="font-normal mb-16 max-w-[800px] mx-auto text-center text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
            At the end of a μLearner&apos;s journey, they are equipped with a plethora of
            opportunities to choose from. They can choose to work in a job, freelance, research,
            start their own venture, or work for a social cause.
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-4 gap-8 justify-center"
          variants={fadeInUp}
        >
          {opportunities.map((opportunity) => (
            <MotionDiv key={opportunity.id} variants={fadeInUp}>
              <Card
                variant="hoverable"
                className="flex flex-col items-center justify-start h-full min-h-[250px] cursor-pointer"
              >
                <CardContent className="flex flex-col items-center justify-between h-full py-12 px-8">
                  <span className="w-full flex justify-center max-w-[220px] mx-auto mb-4">
                    <MuImage
                      src={opportunity.icon}
                      alt={opportunity.name}
                      width={200}
                      height={200}
                      className="object-contain max-w-full max-h-full"
                      loading="lazy"
                      quality={75}
                      sizes="200px"
                    />
                  </span>
                  <p className="text-xl font-semibold text-center mt-auto">{opportunity.name}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
