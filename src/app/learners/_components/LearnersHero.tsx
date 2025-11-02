import MuImage from "@/components/MuImage";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LearnersHero = () => {
  return (
    <div
      className="relative overflow-hidden pt-20 pb-48 lg:pt-28 lg:pb-56"
      style={{
        background:
          "linear-gradient(180deg, var(--mulearn-whitish) 0%, #F0F7FF 40%, #E3F0FF 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute -top-6 -left-12 lg:-left-16">
            <MuImage
              src="/assets/learners/graduation-cap.png"
              alt="Graduation Cap"
              width={64}
              height={64}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            <span className="text-mulearn-blackish">Unlock Your</span>
            <br />
            <span className="text-mulearn-blackish">Potential with</span>
            <br />
            <span className="text--mulearn-trusty-blue">μLearn</span>
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <svg
            className="w-28 h-8 text-mulearn-trusty-blue"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8 Q60 20, 110 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M105 3 L110 8 L105 13"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <Button
          variant="mulearn-blue"
          className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl text-base rounded-full transform hover:scale-105 transition-all duration-300"
          asChild
        >
          <a
            href="https://app.mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join μLearn
          </a>
        </Button>
      </div>

      <div className="absolute top-[95px] left-8 lg:left-[66px] animate-pulse hidden sm:block opacity-90">
        <Sparkle className="w-7 h-7 text-gray-400" />
      </div>
      <div className="absolute top-32 right-12 lg:right-74 animate-pulse hidden sm:block opacity-90">
        <Sparkle className="w-6 h-6 text-gray-300" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-20 overflow-visible">
        <div className="absolute inset-0 transform -skew-y-3 origin-bottom-left">
          <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-l from-blue-600 to-blue-100"></div>
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-linear-to-l from-blue-600 to-blue-100"></div>
        </div>

        <div
          className="absolute inset-0 transform -skew-y-3 origin-bottom-left bg-mulearn-whitish shadow-lg"
          style={{ top: "8px", bottom: "8px" }}
        />

        <div className="absolute inset-0 flex justify-around items-center max-w-7xl mx-auto px-4 transform -skew-y-3 origin-bottom-left">
          <RibbonItem text="Learn by Doing" />
          <RibbonItem text="Build Your Portfolio" />
          <RibbonItem text="Connect with Industry" />
        </div>
      </div>
    </div>
  );
};

const RibbonItem = ({ text }: { text: string }) => (
  <div className="flex items-center whitespace-nowrap px-2 sm:px-3">
    <span className="text-lg sm:text-xl text-mulearn-blackish mr-2">✦</span>
    <span className="text-base sm:text-lg lg:text-xl font-bold text-mulearn-trusty-blue">
      {text}
    </span>
    <span className="text-lg sm:text-xl text-mulearn-blackish ml-2">✦</span>
  </div>
);

export default LearnersHero;
