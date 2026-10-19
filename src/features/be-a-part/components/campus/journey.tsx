import Link from "next/link";
import { Button } from "@/components/ui/button";
import { campusChapter } from "../../data/campus.data";
import { StepsSection } from "../shared";
import { CAMPUS_APPLY_URL } from "./hero";

export function Journey() {
  return (
    <StepsSection
      id="journey"
      title={
        <>
          Your chapter <span className="text-mulearn">journey</span>
        </>
      }
      description="Seven steps from interest to impact. The Foundation supports you at every one of them."
      steps={campusChapter.journey}
      action={
        <Button asChild className="font-semibold">
          <Link href={CAMPUS_APPLY_URL} target="_blank" rel="noopener noreferrer">
            Fill the Interest Form
          </Link>
        </Button>
      }
    />
  );
}
