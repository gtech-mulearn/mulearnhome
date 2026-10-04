import { MotionDiv, MotionH2, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";

export const Action = () => {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
          <div className="max-w-xl flex flex-col gap-4">
            <MotionH2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              Shaping <span className="text-mulearn">Innovators</span>
            </MotionH2>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              <p className="text-lg text-mulearn-gray-600 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </MotionDiv>
            <div>
              <Button variant={"default"}>Register now</Button>
            </div>
          </div>

          <div className="relative w-full max-w-xl h-[300px] lg:h-[380px]">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <MuImage
                src="/assets/trivial/browser.svg"
                alt="trivial-img"
                fill
                sizes="(max-width: 1024px) 100vw, 36rem"
                className="object-contain"
              />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};
