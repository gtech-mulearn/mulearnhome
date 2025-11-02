"use client";

import { MotionH2, MotionDiv } from "@/components/MuFramer";
import { companySteps } from "@/data/data";
import { redirect } from "next/navigation";

export default function HowToJoin() {
  return (
    <section className="bg-mulearn-whitish py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-3xl font-bold text-[#1A202C] mb-12 tracking-tight"
        >
          How To Join?
        </MotionH2>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block">
            {companySteps.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: step.align === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                style={{
                  height: "170px",
                  marginBottom: index < companySteps.length - 1 ? "-10px" : "0",
                }}
              >
                {step.align === "left" ? (
                  <div className="flex items-center relative h-full">
                    <svg
                      className="absolute left-0 top-0 w-full h-full"
                      viewBox="0 0 944 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M528 0C533.523 4.5098e-07 538 4.47715 538 10H86V10.0059C85.6672 10.0015 85.3338 10 85 10C43.5786 10 10 43.5786 10 85C10 126.421 43.5786 160 85 160C85.3338 160 85.6672 159.998 86 159.993V160H538C538 165.523 533.523 170 528 170H95C94.1243 170 93.2752 169.886 92.4658 169.675C90.0057 169.889 87.5157 170 85 170C38.0558 170 0 131.944 0 85C0 38.0558 38.0558 0 85 0C87.5157 0 90.0057 0.110138 92.4658 0.324219C93.2752 0.112826 94.1244 0 95 0H528Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <div className="relative z-20 flex-shrink-0 ml-[22px]">
                      <div className="w-[90px] h-[90px] rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple flex items-center justify-center">
                        <span className="text-mulearn-whitish text-5xl font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 pl-16 relative z-20">
                      <h3 className="text-xl font-bold text-mulearn-trusty-blue mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-mulearn-blackish max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center relative h-full flex-row-reverse">
                    <svg
                      className="absolute right-0 top-0 w-full h-full"
                      viewBox="0 0 944 170"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M416 0C410.477 0 406 4.47715 406 10H858V10.0059C858.333 10.0015 858.666 10 859 10C900.421 10 934 43.5786 934 85C934 126.421 900.421 160 859 160C858.666 160 858.333 159.998 858 159.993V160H406C406 165.523 410.477 170 416 170H849C849.876 170 850.725 169.886 851.534 169.675C853.994 169.889 856.484 170 859 170C905.944 170 944 131.944 944 85C944 38.0558 905.944 0 859 0C856.484 0 853.994 0.110138 851.534 0.324219C850.725 0.112826 849.876 0 849 0H416Z"
                        fill="#D9D9D9"
                      />
                    </svg>

                    <div className="relative z-20 flex-shrink-0 mr-[22px]">
                      <div className="w-[90px] h-[90px] rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple flex items-center justify-center">
                        <span className="text-mulearn-whitish text-5xl font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 pr-16 text-right relative z-20">
                      <h3 className="text-xl font-bold text-mulearn-trusty-blue mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-mulearn-blackish max-w-xl ml-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}

                {index < companySteps.length - 1 && (
                  <div
                    className={`absolute z-10 ${
                      step.align === "left" ? "left-[87px]" : "right-[87px]"
                    }`}
                    style={{
                      top: "168px",
                      width: "1px",
                      height: "10px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                )}
              </MotionDiv>
            ))}
          </div>

          <div className="md:hidden space-y-8">
            {companySteps.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-4 p-6 border-2 border-[#EEE] rounded-lg bg-mulearn-whitish"
              >
                <div className="w-[100px] h-[100px] rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple flex items-center justify-center">
                  <span className="text-mulearn-whitish text-4xl font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-mulearn-trusty-blue leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-mulearn-blackish leading-snug">
                  {step.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() =>
              redirect(
                "https://airtable.com/app0v220Yc0G3CPMr/shrpiEQrpuIFTMNh1"
              )
            }
            className="cursor-pointer bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple hover:opacity-90 text-mulearn-whitish px-4 py-3 text-md font-bold rounded-[20px] transition-all"
          >
            Join as a Company Partner
          </button>
        </MotionDiv>
      </div>
    </section>
  );
}
