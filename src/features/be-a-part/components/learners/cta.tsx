import { clientEnv } from "@/config/env.client";
import { CtaBanner } from "../shared";

export const CTA = () => {
  return (
    <CtaBanner
      title="Start building your future with µLearn"
      description="Gain real skills, collaborate with learners and earn recognition as you grow."
      action={{ label: "Join µLearn", href: clientEnv.NEXT_PUBLIC_APP_URL, external: true }}
    />
  );
};
