import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { in50hrs } from "@/data/events";
import { cdnUrl } from "@/services/cdn";

const heroimg = cdnUrl("src/modules/Public/In50Hours/heroimg.png");
const supporters = cdnUrl("src/modules/Public/In50Hours/supporters.png");
const makemypass = cdnUrl("src/modules/Public/In50Hours/makemypass.png");
const joinprgm = cdnUrl("src/modules/Public/In50Hours/tsimg.png");

export const metadata: Metadata = {
  title: "In50Hours | µLearn",
  description:
    "Hack your way to success in just 50 hours at In50Hours — a whirlwind of innovation, collaboration and caffeine-fueled brilliance. Pitch, prototype, and get funded.",
  openGraph: {
    title: "In50Hours | µLearn",
    description:
      "Hack your way to success in just 50 hours at In50Hours — pitch, prototype, and get funded.",
    url: "https://mulearn.org/in50hours",
    type: "website",
  },
};

/** Renders a feature/step title with its highlighted letters in brand blue. */
function FeatureTitle({ titleSpan }: { titleSpan: string }) {
  if (titleSpan === "GET") {
    return (
      <>
        <span className="text-mulearn">GET</span> FUNDED
      </>
    );
  }
  if (titleSpan === "IT") {
    return (
      <>
        P<span className="text-mulearn">IT</span>CH
      </>
    );
  }
  return (
    <>
      PRO<span className="text-mulearn">TO</span>TYPE
    </>
  );
}

export default function In50Hours() {
  return (
    <PageContainer className="text-mulearn-blackish">
      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            IN<span className="text-mulearn">50</span>HOURS
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mulearn-gray-600 lg:mx-0">
            Get ready to hack your way to success in just 50 hours at In50Hr! Dive into a whirlwind
            of innovation, collaboration, and caffeine-fueled brilliance!
          </p>

          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-mulearn-blackish">
            Organized by
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <MuImage
              src={supporters}
              alt="Organized by Kerala Startups, Startup Mission and FAYA:80"
              width={288}
              height={60}
              className="h-auto w-64"
            />
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button asChild>
              <Link target="_blank" rel="noreferrer" href="https://www.makemypass.com/in50hours">
                Register Now
              </Link>
            </Button>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MuImage
            src={heroimg}
            alt="In50Hours — pitch, power up, prototype and get funded"
            width={720}
            height={480}
            priority
            className="h-auto w-full"
          />
        </MotionDiv>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {in50hrs.features.map((feature, index) => (
          <MotionDiv
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-black text-mulearn-blackish sm:text-2xl">
              <FeatureTitle titleSpan={feature.titleSpan} />
            </h2>
            <p className="mt-3 text-base leading-relaxed text-mulearn-gray-600">
              {feature.description}
            </p>
          </MotionDiv>
        ))}
      </section>

      {/* How to join */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl font-black sm:text-5xl">
            HOW <span className="text-mulearn">TO</span> JOIN
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mulearn-gray-600 lg:mx-0">
            If you are already into level 5, you can participate in the event completely free of
            cost. If you are not, you can still participate by paying a nominal fee of INR 1000.
          </p>

          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-mulearn-blackish">
            Ticketing partner
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <MuImage
              src={makemypass}
              alt="MakeMyPass"
              width={128}
              height={32}
              className="h-auto w-32"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <MuImage
            src={joinprgm}
            alt="How to join illustration"
            width={480}
            height={360}
            className="h-auto w-full max-w-md"
          />
        </MotionDiv>
      </section>

      {/* Steps */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {in50hrs.steps.map((step, index) => (
          <MotionDiv
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black text-mulearn-blackish sm:text-2xl">
              STEP <span className="text-mulearn">{step.stepSpan}</span>
            </h3>
            <p className="mt-3 text-base leading-relaxed text-mulearn-gray-600">
              {step.description}
            </p>
          </MotionDiv>
        ))}
      </section>
    </PageContainer>
  );
}
