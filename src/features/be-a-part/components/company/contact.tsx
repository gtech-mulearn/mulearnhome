import Link from "next/link";
import { MotionDiv } from "@/components/layouts";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-12 bg-mulearn-whitish overflow-visible relative">
      <div className="hidden lg:block absolute left-20 top-2 text-mulearn-blackish">
        <svg
          width="50"
          height="100"
          viewBox="0 0 24 24"
          fill="currentColor"
          strokeWidth="1"
          shapeRendering="geometricPrecision"
          aria-hidden="true"
          focusable="false"
        >
          <title>Decorative star shape</title>
          <path
            d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <div className="hidden lg:block absolute left-32 top-4 text-mulearn-blackish">
        <svg
          width="20"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          shapeRendering="geometricPrecision"
          aria-hidden="true"
          focusable="false"
        >
          <title>Decorative star shape</title>
          <path
            d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full relative"
        >
          <Card variant="muted" className="bg-mulearn-whitish p-6 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-60 text-center md:text-left text-xl sm:text-2xl">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-mulearn-gray-600">Email</p>
                <Link href="mailto:info@mulearn.org" className="font-semibold text-2xl">
                  info@mulearn.org
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-mulearn-gray-600">Website</p>
                <Link href="https://mulearn.org" className="font-semibold text-2xl">
                  mulearn.org
                </Link>
              </div>
            </div>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
};
