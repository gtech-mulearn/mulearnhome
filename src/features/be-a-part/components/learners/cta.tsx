import Image from "next/image";
import Link from "next/link";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";

export const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-mulearn-whitish">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-mulearn rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="text-mulearn-whitish z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-mulearn-whitish">
                Start building your future with µLearn.
              </h2>
              <p className="text-lg md:text-xl mb-8 text-mulearn-whitish leading-relaxed">
                Gain real skills, collaborate with learners, and earn <br /> recognition as you
                grow.
              </p>
              <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant={"inverted"} className="inline-block">
                  Join µLearn
                </Button>
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <MuImage
                  src="/assets/learners/learner-cta.webp"
                  alt="Student learning with laptop"
                  fill
                  sizes="28rem"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
