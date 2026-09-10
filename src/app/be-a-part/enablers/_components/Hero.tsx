import Link from "next/link";
import { MotionDiv } from "@/components/MuFramer";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/lib/env/env.client";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--mulearn-whitish) 0%, rgba(46,133,254,0.04) 55%, rgba(175,46,230,0.05) 100%)",
      }}
    >
      {/* Sparkles — above the word "Campus" in the heading */}
      <div
        className="pointer-events-none absolute hidden md:flex flex-col"
        style={{ top: "20px", right: "18%", alignItems: "flex-end", gap: "2px" }}
        aria-hidden="true"
      >
        {/* Large sparkle — top */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="49"
          viewBox="0 0 69 68"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M34.3697 67.6033L33.7885 51.9719C33.4329 42.4087 25.7346 34.7392 16.1401 34.3896L2.95503e-06 33.8016L16.1401 33.2136C25.7346 32.8641 33.4329 25.1946 33.7885 15.6314L34.3697 4.6247e-06L34.9509 15.6314C35.3065 25.1946 43.0049 32.8641 52.5994 33.2136L68.7395 33.8016L52.5994 34.3896C43.0049 34.7392 35.3065 42.4087 34.9509 51.9719L34.3697 67.6033Z"
            fill="mulearn-blackish"
          />
        </svg>
        {/* Small sparkle — below and to the right */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          style={{ marginRight: "-10px" }}
          aria-hidden="true"
        >
          <path
            d="M12.5001 24.587L12.2887 18.9019C12.1594 15.4238 9.35954 12.6345 5.87007 12.5073L-8.32618e-07 12.2935L5.87007 12.0796C9.35953 11.9525 12.1594 9.16315 12.2887 5.68505L12.5001 4.62925e-06L12.7115 5.68505C12.8408 9.16315 15.6407 11.9525 19.1301 12.0796L25.0002 12.2935L19.1301 12.5073C15.6407 12.6345 12.8408 15.4238 12.7115 18.9019L12.5001 24.587Z"
            fill="mulearn-blackish"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-16 md:pt-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Main Heading — natural wrap: line 1 "Empower Your Campus", line 2 "with µLearn" */}
          <h1 className="mx-auto max-w-3xl text-center text-5xl md:text-[4.5rem] leading-[1.15] font-bold tracking-tight">
            <span>
              Empower Your Campus
              <br />
              with{" "}
            </span>
            <span className="text-mulearn">µLearn</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 mx-auto max-w-xl text-center text-sm md:text-base font-medium leading-relaxed">
            Become a µLearn Campus Enabler and join the movement!!
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
            {/* Explore Learners */}
            <Link
              href={`${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/search/students`}
              target="_blank"
            >
              <Button variant="outline" className="rounded-full">
                Explore Learners
              </Button>
            </Link>

            <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank">
              <Button variant="default">Join as Enabler</Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
