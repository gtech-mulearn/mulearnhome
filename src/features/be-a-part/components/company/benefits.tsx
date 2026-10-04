import { MotionDiv, MotionH1, MotionP, MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { CompanyFeatures } from "../../data/company.data";

export const CompanyBenefits = () => {
  return (
    <section className="py-3 bg-mulearn-whitish overflow-hidden relative z-0">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex items-center justify-center flex-col"
      >
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight text-center pt-20"
        >
          <span className="text-mulearn-blackish">Benefits to </span>{" "}
          <span className="text-mulearn">company partner</span>
        </MotionH1>

        <MuImage
          src={"/assets/company/note.webp"}
          alt="note icon"
          className="absolute left-24 top-0 w-[92px] h-[115px] rotate-[16deg] hidden lg:block"
          width={92}
          height={115}
        />

        <div className="absolute right-24 top-0 text-mulearn-blackish/80 hidden lg:block">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative p-6">
          {CompanyFeatures.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card
                variant="interactive"
                className="h-full border-mulearn/10 bg-mulearn-whitish z-10 relative"
              >
                <CardContent className="flex flex-col gap-5 p-6">
                  {feature.icon && (
                    <feature.icon className="w-12 h-12 text-mulearn" strokeWidth={1.5} />
                  )}

                  <MotionH1
                    className="text-xl sm:text-2xl font-bold text-mulearn-trusty-blue text-left leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {feature.title}
                  </MotionH1>

                  <MotionP
                    className="font-thin text-mulearn-blackish leading-relaxed text-left sm:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.description}
                  </MotionP>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};
