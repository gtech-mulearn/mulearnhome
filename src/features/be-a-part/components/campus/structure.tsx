import { MotionDiv } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { campusChapter } from "../../data/campus.data";

export function Structure() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center">
            Chapter <span className="text-mulearn">Structure</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-mulearn-gray-600">
            A simple, effective framework for peer-led learning
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {campusChapter.structure.map((item, idx) => (
              <MotionDiv
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card variant="interactive" className="h-full border-mulearn/10 ">
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-mulearn">{item.value}</div>
                    <div className="mb-1 font-semibold text-mulearn-blackish">{item.label}</div>
                    <div className="text-sm text-mulearn-gray-600">{item.desc}</div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
