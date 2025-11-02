import { Button } from "@/components/ui/button";
import { Variants } from "framer-motion";
import { MotionSection, MotionDiv, MotionH2 } from "@/components/MuFramer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Newsletter() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <MotionSection
        id="newsletter"
        className="bg-mulearn-greyish/20 rounded-2xl py-8 my-8 mx-auto max-w-[1000px] shadow-[0_2px_16px_0_rgba(0,0,0,0.02)] flex flex-col items-center gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionH2
          variants={fadeInUp}
          className="text-2xl sm:text-[1.7rem] font-bold mb-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent text-center px-4"
        >
          Subscribe to our Newsletter
        </MotionH2>

        <form
          method="post"
          action="https://newsletter.mulearn.org/subscription/form"
          className="w-full flex flex-col items-center gap-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionDiv
            variants={fadeInUp}
            className="flex flex-col gap-4 w-full mb-4 flex-wrap justify-center items-center px-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="py-3 px-4 border border-mulearn-gray-600 rounded-lg text-base max-w-[500px] w-full sm:w-[400px] bg-mulearn-whitish transition-all duration-200 focus:border-[1.5px] focus:border-mulearn-trusty-blue focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Name (optional)"
              className="py-3 px-4 border border-mulearn-gray-600 rounded-lg text-base max-w-[500px] w-full sm:w-[400px] bg-mulearn-whitish transition-all duration-200 focus:border-[1.5px] focus:border-mulearn-trusty-blue focus:outline-none"
            />
          </MotionDiv>

          <MotionDiv
            variants={fadeInUp}
            className="flex items-center gap-2 mb-4 text-base px-4"
          >
            <input
              id="a1ef1"
              type="checkbox"
              name="l"
              defaultChecked
              value="a1ef1095-7430-4b91-973f-8826ac7c79d7"
            />
            <label htmlFor="a1ef1">
              I agree to subscribe to the μPulse Newsletter
            </label>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <Button
              type="submit"
              variant="mulearn"
              className="py-3 px-8 mb-8 font-bold"
            >
              Subscribe
            </Button>
          </MotionDiv>
        </form>
      </MotionSection>
    </div>
  );
}
