import Link from "next/link";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";

export const CompanyHero = () => {
  return (
    <section className=" overflow-hidden relative">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl lg:text-6xl font-bold"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight text-center max-w-[630px] pt-20">
            <span className="text-mulearn-blackish">Partner With </span>{" "}
            <span className="text-mulearn">µLearn </span>
            <span className="text-mulearn-blackish">to discover talent</span>
          </h1>
          <p className="text-center text-mulearn-blackish font-medium text-xl mt-5">
            A µLearn Company Partner is an organization that collaborates with µLearn to discover
            skilled learners, offer job or internship opportunities, and engage with our talent
            community.{" "}
          </p>
          <div className="flex flex-row gap-8 mt-4">
            <Link
              href={"https://airtable.com/app0v220Yc0G3CPMr/shrpiEQrpuIFTMNh1"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"default"} className="font-semibold">
                Join as a Company Partner
              </Button>
            </Link>
          </div>

          <div className="absolute right-1/4 pr-6 top-12 text-mulearn-blackish hidden lg:block ">
            <svg
              width="60"
              height="100"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="1"
              aria-hidden="true"
              focusable="false"
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

          <div className="absolute right-1/4 pr-5  top-24 text-mulearn-blackish  hidden lg:block ">
            <svg
              width="20"
              height="50"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
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

          <div className="absolute left-1/5 pl-12 bottom-32 text-mulearn-blackish  hidden lg:block ">
            <svg
              width="20"
              height="50"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="1"
              aria-hidden="true"
              focusable="false"
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
          <div className="absolute left-1/5   bottom-32 text-mulearn-blackish  hidden lg:block ">
            <svg
              width="60"
              height="100"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
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

          <div className="absolute top-2/3 center w-[300px] h-[300px] rounded-full bg-mulearn blur-[200px] opacity-70 hidden sm:block " />
          <MuImage
            src={"/assets/company/student.webp"}
            alt="Company Partnership Illustration"
            className="w-full h-full relative  object-contain ml-10"
            width={650}
            height={500}
            unoptimized
          />
        </div>
      </MotionDiv>
    </section>
  );
};
