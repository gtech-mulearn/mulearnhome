import type { Variants } from "framer-motion";
import { MotionDiv, MotionH2, MotionSection } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function Newsletter() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full" suppressHydrationWarning>
      <MotionSection
        id="newsletter"
        className="bg-mulearn-greyish/20 rounded-2xl py-8 my-8 mx-auto max-w-[1000px] shadow-[0_2px_16px_0_rgba(0,0,0,0.02)] flex flex-col items-center gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        suppressHydrationWarning
      >
        <MotionH2
          variants={fadeInUp}
          className="text-2xl sm:text-[1.7rem] font-bold mb-5 text-mulearn text-center px-4"
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
            <Input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="max-w-[500px] w-full sm:w-[400px]"
            />
            <Input
              type="text"
              name="name"
              placeholder="Name (optional)"
              className="max-w-[500px] w-full sm:w-[400px]"
            />
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="flex items-center gap-2 mb-4 text-base px-4">
            <Checkbox
              id="a1ef1"
              name="l"
              defaultChecked
              value="a1ef1095-7430-4b91-973f-8826ac7c79d7"
            />
            <Label htmlFor="a1ef1" className="font-normal">
              I agree to subscribe to the μPulse Newsletter
            </Label>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <Button type="submit" variant={"default"} className="py-3 px-8 mb-8 font-bold">
              Subscribe
            </Button>
          </MotionDiv>
        </form>
      </MotionSection>
    </div>
  );
}
