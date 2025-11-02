import { Fragment } from "react";
import { OnboardingStep } from "@/data/data";
import { Lightbulb } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

interface OnboardingStepsProps {
  data: OnboardingStep[];
}

const getStepIcon = (step: number) => {
  switch (step) {
    case 1:
      return <div className="text-mulearn-whitish text-5xl font-bold">μ</div>;
    case 2:
      return <FaDiscord className="w-12 h-12 text-mulearn-whitish" />;
    case 3:
      return <Lightbulb className="w-12 h-12 text-mulearn-whitish" />;
    default:
      return <div className="text-mulearn-whitish text-4xl font-bold">μ</div>;
  }
};

const OnboardingSteps: React.FC<OnboardingStepsProps> = ({ data }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="hidden lg:flex justify-center items-start relative gap-8">
        {data.map((step, index) => (
          <Fragment key={step.step}>
            <div className="flex flex-col items-center flex-1 max-w-sm text-center px-4 relative z-10">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  {getStepIcon(step.step)}
                </div>

                <span className="absolute top-1/2 -translate-y-1/2 -right-4 bg-black text-mulearn-whitish border-4 border-mulearn-whitish rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-md">
                  0{step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-mulearn-blackish mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {index < data.length - 1 && (
              <div className="flex items-center" style={{ marginTop: "64px" }}>
                <div className="w-20 h-1 bg-black"></div>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="lg:hidden flex flex-col items-center space-y-8">
        {data.map((step, index) => (
          <Fragment key={step.step}>
            <div className="flex flex-col items-center max-w-md text-center">
              <div className="relative mb-4">
                <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  {getStepIcon(step.step)}
                </div>
                <span className="absolute top-1/2 -translate-y-1/2 -right-4 bg-black text-mulearn-whitish border-4 border-mulearn-whitish rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shadow-md">
                  0{step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-mulearn-blackish mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            {index < data.length - 1 && (
              <div className="text-mulearn-blackish">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OnboardingSteps;
