import { MotionDiv, MotionH1, MotionP } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { About } from "./about";
import { Action } from "./action";
import { Participants } from "./participants";
import { Qna } from "./qna";
import { Rewards } from "./rewards";
import { Working } from "./working";

export function TrivialIdeasView() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center justify-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-center">
            <MotionH1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-mulearn-trusty-blue"
            >
              TRIVIAL IDEAS
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg text-mulearn-gray-600 max-w-xl mx-auto md:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </MotionP>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-center"
            >
              <Button variant={"default"}>Register Now</Button>
            </MotionDiv>
          </div>
        </div>
        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="mt-12 py-4 shadow-2xl text-mulearn-trusty-blue">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <p className="font-semibold">10+ Editions</p>
                <p className="font-semibold">50+ Speakers</p>
                <p className="font-semibold">1000+ Attendees</p>
                <p className="font-semibold">3+ Years</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
      <About />
      <Working />
      <Rewards />
      <Participants />
      <Qna />
      <Action />
    </section>
  );
}
