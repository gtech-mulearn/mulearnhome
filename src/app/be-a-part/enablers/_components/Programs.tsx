import { MotionDiv } from "@/components/MuFramer";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Programs() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-mulearn-whitish py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-mulearn-blackish md:text-4xl lg:text-5xl">
            Enablers{" "}
            <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              Programs
            </span>{" "}
            &{" "}
            <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-mulearn-greyish bg-blue-50/50 p-6 shadow-lg md:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-linear-to-br from-amber-100 to-amber-50 shadow-md">
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
                    <YouTubeEmbed
                      videoid="r5izRx-4j68"
                      style="border-none"
                      playlabel="true"
                      params="disablekb=1&enablejsapi=1&playsinline=1"
                    />
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h3 className=" mb-4 text-2xl font-bold text-mulearn-blackish md:text-3xl">
                  Art of Teaching -{" "}
                  <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                    Teach contest
                  </span>
                </h3>
                <p className=" mb-6 text-sm leading-relaxed text-mulearn-gray-600 md:text-base">
                  Art of Teaching is an annual event that spotlights
                  enablers&apos; teaching talents. They can showcase their
                  skills through videos, simplifying concepts for students. In
                  the last edition, we received 150+ video entries and rewarded
                  winners with cash prizes.
                </p>
                <div>
                  <Button
                    variant="mulearn"
                    className=" px-6 py-3 text-sm font-semibold md:text-base"
                  >
                    Know More
                  </Button>
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
