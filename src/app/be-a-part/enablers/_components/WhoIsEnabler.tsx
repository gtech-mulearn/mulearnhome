import MuImage from "@/components/MuImage";
import { enablers } from "@/data/enablers";

export default function WhoIsEnabler() {
  return (
    <section id="who-is-enabler">
      <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-mulearn p-8 md:p-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-mulearn-whitish">
            Who is an <span className="text-mulearn-blackish">Enabler</span>?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mulearn-whitish/90 md:text-lg">
            Enablers help students learn the right way — through action, proof-of-work and community
            engagement.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {enablers.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.text} className="flex items-center gap-3">
                  <Icon className="size-5 shrink-0 text-mulearn-whitish" />
                  <span className="text-sm font-medium text-mulearn-whitish md:text-base">
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <MuImage
            src="/assets/be-a-part/enabler-character.svg"
            alt="Illustration of an enabler at a campus building"
            width={400}
            height={520}
            className="h-auto w-full max-w-56 rounded-2xl sm:max-w-xs lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
