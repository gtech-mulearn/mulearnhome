import { ArrowRight, BookOpen, Users } from "lucide-react";
import { MotionDiv } from "@/components/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyChapter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
          Why Start a <span className="text-mulearn">Chapter</span>?
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card variant="hoverable" className="border-mulearn/10">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mulearn shadow-lg">
                <Users className="h-7 w-7 text-mulearn-whitish" />
              </div>
              <CardTitle className="text-2xl font-bold text-mulearn-blackish">
                For Students
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-mulearn-gray-600">
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>
                    Earn <strong className="text-mulearn">Karma Points</strong> as proof-of-work
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>Build peer-to-peer learning circles across domains</span>
                </li>
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>
                    Access internships via <strong className="text-mulearn">Launchpad</strong> &{" "}
                    <strong className="text-mulearn">Top 100 Series</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>Join 64,000+ community with 400+ partner companies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="hoverable" className="border-mulearn/10">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mulearn shadow-lg">
                <BookOpen className="h-7 w-7 text-mulearn-whitish" />
              </div>
              <CardTitle className="text-2xl font-bold text-mulearn-blackish">
                For Colleges
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-mulearn-gray-600">
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>
                    Align with <strong className="text-mulearn">Education 4.0</strong> standards
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>Proof of student skilling for NAAC/CSR metrics</span>
                </li>
                <li className="flex gap-3">
                  <div className="rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-mulearn" />
                  </div>
                  <span>Connect to Kerala&apos;s largest skilling ecosystem</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </section>
  );
}
