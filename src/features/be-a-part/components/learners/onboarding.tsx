import { MotionDiv } from "@/components/layouts";
import type { OnboardingStep } from "../../types/learners.types";

interface OnboardingStepsProps {
  data: OnboardingStep[];
}

export const OnboardingSteps: React.FC<OnboardingStepsProps> = ({ data }) => {
  return (
    /* The max-w-4xl ensures the grid doesn't spread wider than the "How to Begin Your Journey" text */
    <div className="relative max-w-4xl mx-auto px-4 py-10">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-start">
        {data.map((step, index) => (
          <div key={step.step} className="flex items-start">
            {/* Step Item Container */}
            <div className="flex flex-col items-center w-36 lg:w-44">
              {/* Step Number Box */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative z-10 mb-6"
              >
                <div className="w-16 h-16 bg-mulearn-trusty-blue rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-mulearn-whitish text-2xl font-bold">{step.step}</span>
                </div>
              </MotionDiv>

              {/* Text Content */}
              <div className="text-center px-1">
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                >
                  <h3 className="text-base font-bold text-mulearn-blackish mb-1 leading-tight">
                    {step.title}
                  </h3>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                >
                  <p className="text-[10px] lg:text-xs text-mulearn-gray-600 leading-relaxed italic">
                    {step.description}
                  </p>
                </MotionDiv>
              </div>
            </div>

            {/* Connecting Line - Tightened and Centered */}
            {index < data.length - 1 && (
              <div className="flex items-center h-16 px-0.5">
                {/* Minimal px-0.5 brings the dots nearly flush with the boxes */}
                <div className="relative w-20 lg:w-32 h-0.5 flex items-center">
                  {/* The Dashed Line */}
                  <div className="w-full border-t-2 border-dashed border-mulearn-trusty-blue"></div>

                  {/* Start Dot */}
                  <div className="absolute left-0 w-2 h-2 bg-mulearn-trusty-blue rounded-full -translate-x-1/2"></div>

                  {/* End Dot */}
                  <div className="absolute right-0 w-2 h-2 bg-mulearn-trusty-blue rounded-full translate-x-1/2"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center space-y-8">
        {data.map((step, index) => (
          <div key={step.step} className="flex flex-col items-center text-center max-w-xs">
            <div className="w-16 h-16 bg-mulearn-trusty-blue rounded-lg flex items-center justify-center shadow-md mb-4">
              <span className="text-mulearn-whitish text-2xl font-bold">{step.step}</span>
            </div>
            <h3 className="text-lg font-bold text-mulearn-blackish mb-1">{step.title}</h3>
            <p className="text-xs text-mulearn-gray-600 italic px-4">{step.description}</p>

            {index < data.length - 1 && (
              <div className="flex flex-col items-center mt-4 h-12">
                <div className="w-2 h-2 bg-mulearn-trusty-blue rounded-full"></div>
                <div className="flex-1 border-l-2 border-dashed border-mulearn-trusty-blue my-0.5"></div>
                <div className="w-2 h-2 bg-mulearn-trusty-blue rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
