import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { onboardingSteps } from "../../data/learners.data";
import { StepsSection } from "../shared";

export const LearnersOnboarding = () => {
  return (
    <StepsSection
      id="get-started"
      title={
        <>
          How to begin your <span className="text-mulearn">journey</span>
        </>
      }
      description="Three steps from sign-up to your first karma points."
      steps={onboardingSteps}
      action={
        <Button asChild className="font-semibold">
          <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noopener noreferrer">
            Create your account
          </Link>
        </Button>
      }
    />
  );
};
