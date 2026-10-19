import Link from "next/link";
import { StepsSection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { enablerOnboardingSteps } from "../../data/enablers.data";

export function Onboarding() {
  return (
    <StepsSection
      id="get-started"
      title={
        <>
          How to begin as an <span className="text-mulearn">Enabler</span>
        </>
      }
      description="Five steps to start guiding a chapter on your campus."
      steps={enablerOnboardingSteps}
      action={
        <Button asChild className="font-semibold">
          <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
            Create your account
          </Link>
        </Button>
      }
    />
  );
}
