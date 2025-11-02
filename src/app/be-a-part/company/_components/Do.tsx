import { MotionH2, MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { companyDo, companyImages } from "@/data/data";

export default function WhatYouCanDo() {
  return (
    <section className="bg-mulearn-whitish py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <MotionH2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-4xl font-bold text-[#1A202C] tracking-tight text-center md:text-left mb-12"
        >
          What You Can Do?
        </MotionH2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-black hidden md:block" />

              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black hidden md:block" />

              {companyDo.map((action, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 gap-4"
                >
                  <h3 className="text-xl font-bold text-mulearn-trusty-blue leading-tight">
                    {action.title}
                  </h3>
                  <p className="text-lg text-mulearn-blackish leading-snug max-w-[400px]">
                    {action.description}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full max-w-[300px] lg:max-w-[388px]"
          >
            <MuImage
              src={companyImages.studLap}
              alt="student with a laptop image"
              className="w-full h-auto"
              width={388}
              height={300}
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
