import { CtaBanner } from "@/components/sections";

export function GetInTouch() {
  return (
    <CtaBanner
      title="Be part of the change with µLearn"
      description="Join µLearn as an Enabler and empower your campus community."
      action={{ label: "Get in touch", href: "/contact" }}
    />
  );
}
