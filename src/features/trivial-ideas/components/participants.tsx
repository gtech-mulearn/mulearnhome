import { MotionDiv } from "@/components/layouts";

import { Carousel } from "./carousel";

export const Participants = () => {
  return (
    <section className="relative overflow-hidden pt-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold "
            >
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                What Our <span className="text-mulearn">Community Says</span>
              </h3>
              <p className="text-lg text-mulearn-gray-600 max-w-xl mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet,consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </MotionDiv>
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
};
