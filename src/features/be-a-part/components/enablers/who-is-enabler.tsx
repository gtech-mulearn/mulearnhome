import type { LucideIcon } from "lucide-react";
import { Sparkle } from "lucide-react";
import { MuImage } from "@/components/layouts";
import { enablerFeatures } from "../../data/enablers.data";

const Icon = ({ icon: IconComponent }: { icon: LucideIcon }) => (
  <IconComponent className="w-9 h-9 text-mulearn-whitish" />
);

export function WhoIsEnabler() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="relative w-full rounded-[20px] bg-mulearn shadow-md overflow-hidden">
        <div className="hidden md:block" style={{ minHeight: "580px" }}>
          <Sparkle className="absolute left-10 top-8 z-20 fill-mulearn-whitish text-mulearn-whitish" />
          <div className="relative z-10 flex flex-col justify-start items-start gap-5 px-10 pt-24 pb-10 max-w-[620px]">
            <h2 className="text-5xl font-bold leading-[1.3]">
              <span>Who is an </span>
              <span className="text-mulearn-whitish">Enabler</span>
              <span>?</span>
            </h2>
            <p className="text-mulearn-whitish text-xl font-semibold leading-8">
              Enablers help students learn the right way — through action, proof-of-work and
              community engagement.
            </p>
            <div className="flex flex-col gap-2.5 w-full">
              {enablerFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-4 w-full max-w-[511px] min-h-[80px] bg-mulearn rounded-2xl px-6 py-4"
                >
                  <div className="shrink-0">
                    <Icon icon={feature.icon} />
                  </div>
                  <p className="text-mulearn-whitish text-xl font-semibold leading-7">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Sparkle className="absolute right-[430px] top-[380px] z-20 fill-mulearn-whitish text-mulearn-whitish" />
          <Sparkle className="absolute right-[320px] top-[270px] z-20 fill-mulearn-whitish text-mulearn-whitish" />
          <Sparkle className="absolute right-[130px] top-[320px] z-20 fill-mulearn-whitish text-mulearn-whitish" />

          <MuImage
            style={{ right: 0, bottom: 0 }}
            width={620}
            height={580}
            className="absolute rounded-r-[20px] object-contain"
            src="/assets/be-a-part/enabler-character.webp"
            alt="Campus Enabler Illustration"
          />
        </div>

        <div className="md:hidden flex flex-col">
          <div className="flex flex-col gap-5 px-8 pt-10 pb-6">
            <h2 className="text-5xl font-bold leading-[62.40px]">
              <span>Who is an </span>
              <span className="text-mulearn-whitish">Enabler</span>
              <span>?</span>
            </h2>

            <p className="text-mulearn-whitish text-sm font-semibold leading-8">
              Enablers help students learn the right way — through action, proof-of-work and
              community engagement.
            </p>

            <div className="flex flex-col gap-2.5 w-full">
              {enablerFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="w-full p-5 bg-mulearn rounded-2xl flex flex-col justify-start items-start gap-2.5"
                >
                  <div className="shrink-0">
                    <Icon icon={feature.icon} />
                  </div>
                  <p className="text-mulearn-whitish text-sm font-semibold">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center items-end px-4 pb-0">
            <MuImage
              src="/assets/be-a-part/enabler-character.webp"
              alt="Campus Enabler Illustration"
              width={515}
              height={480}
              className="w-full max-w-xs h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
