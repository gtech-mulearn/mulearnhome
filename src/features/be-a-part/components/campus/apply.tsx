import { CtaBanner } from "@/components/sections";
import { CAMPUS_APPLY_URL } from "./hero";

export function Apply() {
  return (
    <CtaBanner
      title="Start a chapter on your campus"
      description="Join the movement. Build your community. Create impact."
      action={{ label: "Apply to Start a Chapter", href: CAMPUS_APPLY_URL, external: true }}
      image={{
        src: "/assets/campus/cta.webp",
        alt: "Two µLearn learners celebrating",
        width: 760,
        height: 643,
      }}
    />
  );
}
