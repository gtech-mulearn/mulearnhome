import Link from "next/link";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Star = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    shapeRendering="geometricPrecision"
    className={className}
  >
    <path
      d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
    />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute hidden lg:block text-mulearn-blackish", className)}
  >
    <Star className="size-15" />
    <Star className="absolute -right-3 -bottom-2.5 size-5" />
  </div>
);

export const CompanyHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-2xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left lg:order-2"
          >
            <Sparkles className="-top-14 right-4" />
            <h1 className="lg:text-5xl xl:text-6xl text-balance">
              Partner With <span className="text-mulearn">µLearn</span> to discover talent
            </h1>
            <p className="mt-5 text-lg md:text-xl font-medium text-mulearn-blackish">
              A µLearn Company Partner is an organization that collaborates with µLearn to discover
              skilled learners, offer job or internship opportunities, and engage with our talent
              community.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
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
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md sm:max-w-xl mx-auto lg:max-w-none lg:order-1"
          >
            {/* Radial gradient rather than a blurred blob, so the glow fades out inside the
                section instead of being clipped into a visible edge by overflow-hidden. */}
            <div className="absolute -inset-8 bg-radial from-mulearn/35 to-transparent to-70% hidden sm:block" />
            <Sparkles className="top-2 left-4" />
            <MuImage
              src={"/assets/company/student.webp"}
              alt="Company Partnership Illustration"
              className="relative w-full h-auto object-contain mask-b-from-80%"
              width={1067}
              height={702}
              priority
              unoptimized
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
