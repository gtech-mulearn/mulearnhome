import { MotionDiv } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { campusChapter } from "../../data/campus.data";

export function Activities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
          What Chapters <span className="text-mulearn">Do</span>?
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-mulearn-gray-600">
          Regular activities that build skills and community
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campusChapter.activity.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <MotionDiv
                key={activity.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card variant="interactive" className="h-full border-mulearn/10 ">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mulearn shadow-lg">
                        <Icon className="h-6 w-6 text-mulearn-whitish" />
                      </div>
                    </div>
                    <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-mulearn-gray-600">
                      {activity.title}
                    </div>
                    <div className="mb-1 text-lg font-bold text-mulearn-blackish">
                      {activity.desc}
                    </div>
                    <div className="text-sm text-mulearn-gray-600">{activity.detail}</div>
                  </CardContent>
                </Card>
              </MotionDiv>
            );
          })}
        </div>
      </MotionDiv>
    </section>
  );
}
