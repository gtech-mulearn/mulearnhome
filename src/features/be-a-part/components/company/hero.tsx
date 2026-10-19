import Link from "next/link";
import { PageHero } from "@/components/sections";
import { Button } from "@/components/ui/button";

export const CompanyHero = () => {
  return (
    <PageHero
      title={
        <>
          Partner With <span className="text-mulearn">µLearn</span> to discover talent
        </>
      }
      description="A µLearn Company Partner is an organization that collaborates with µLearn to discover skilled learners, offer job or internship opportunities, and engage with our talent community."
      actions={
        <Button asChild className="font-semibold">
          <Link
            href="https://airtable.com/app0v220Yc0G3CPMr/shrpiEQrpuIFTMNh1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join as a Company Partner
          </Link>
        </Button>
      }
      image={{
        src: "/assets/company/student.webp",
        alt: "Company Partnership Illustration",
        width: 1067,
        height: 702,
      }}
    />
  );
};
