import Link from "next/link";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";

export const Change = () => {
  return (
    <section className="bg-mulearn-whitish overflow-hidden relative py-12 sm:py-16 lg:py-0">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
        <div className="absolute right-1/7 pr-3 top-1/8 pt-16 text-mulearn-blackish hidden lg:block">
          <svg
            width="40"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-20 px-4">
            <span className="text-mulearn-blackish">Be a part of change with </span>
            <span className="text-mulearn">µLearn</span>
          </h1>
        </MotionDiv>
      </div>

      <div className="relative bg-mulearn-trusty-blue max-w-7xl min-h-[400px] sm:min-h-[450px] lg:h-[403px] flex flex-col lg:flex-row items-center justify-between mx-4 sm:mx-6 lg:mx-auto mt-8 sm:mt-12 rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-0">
        <div className="absolute right-1/9 top-14 pt-16 text-mulearn-whitish hidden lg:block">
          <svg
            width="40"
            height="70"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="absolute right-3/8 top-6 text-mulearn-whitish hidden lg:block">
          <svg
            width="40"
            height="70"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="absolute right-2/5 top-11 text-mulearn-whitish hidden lg:block">
          <svg
            width="20"
            height="70"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="absolute right-3/7 bottom-11 text-mulearn-whitish hidden lg:block">
          <svg
            width="20"
            height="70"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <path
              d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-mulearn-whitish max-w-lg text-center lg:text-left lg:ml-11 z-10 mb-8 lg:mb-0"
        >
          <div className="max-w-lg text-center lg:text-left lg:ml-11 z-10 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 break-words">
              Hire the <span className="text-mulearn-whitish">Right Person</span> for you
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-sm sm:text-base lg:text-lg font-light opacity-90">
                In µLearn, Learners gain hands-on experience, learn how teams collaborate, and
                understand real expectations before entering the workplace.
              </p>
              <p className="text-base sm:text-lg lg:text-xl">
                We got industry ready learners waiting for you.....
              </p>
              <div className="mt-2">
                <Link href={"/contact"} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={"inverted"}
                    className="font-semibold p-4 sm:p-5 text-base sm:text-lg lg:text-xl w-full sm:w-auto"
                  >
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="relative lg:absolute lg:right-16 w-full lg:w-auto justify-center lg:block hidden md:block"
        >
          <MuImage
            src={"/assets/company/lap.webp"}
            alt="Company Partnership Illustration"
            className="object-contain"
            width={650}
            height={450}
            unoptimized
          />
        </MotionDiv>
      </div>
    </section>
  );
};
