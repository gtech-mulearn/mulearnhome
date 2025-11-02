import { type Variants } from "framer-motion";
import { MotionDiv, MotionH2, MotionP } from "@/components/MuFramer";

export default function WhoIsEnabler() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-mulearn-whitish text-mulearn-blackish">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="max-w-4xl mx-auto text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1],
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <MotionH2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Who is an{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                Enabler
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-mulearn-trusty"
                />
              </svg>
            </span>
            ?
          </MotionH2>

          <MotionP
            variants={fadeInUp}
            className="text-pretty text-lg md:text-xl leading-relaxed"
          >
            Enablers are faculty who are continuous learners with social
            capital, connecting within the µLearn framework, and networking with
            various other enablers or students. They guide and mentor students,
            enhancing their growth and social capital as well.
          </MotionP>
        </MotionDiv>
      </div>
    </section>
  );
}
