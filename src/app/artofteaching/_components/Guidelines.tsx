import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cdnUrl } from "@/services/cdn";

const levels = [
  {
    label: "Level 1",
    text: "Video submission explaining a selected topic.",
    className: "bg-mulearn",
  },
  {
    label: "Level 2",
    text: "Detailed document submission of the designed course curriculum.",
    className: "bg-mulearn-blackish",
  },
];

const Guidelines = () => {
  const guidelinesPdf = cdnUrl("/assets/Guidlines1-BgJl08J_.pdf");

  return (
    <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <span className="inline-flex rounded-full bg-mulearn/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-mulearn">
          Theme: Lessons of The Future.
        </span>
        <h2 className="mt-5 md:text-5xl">
          What is <span className="text-mulearn">Art of Teaching???</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mulearn-gray-600">
          The &apos;Art of Teaching&apos; is a contest that celebrates educators who creatively
          simplify complex topics for better student understanding and retention.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mulearn-gray-600">
          To participate in the &quot;Art of Teaching&quot; contest, submit a 5-minute video for
          Level 1 showcasing your innovative approach to a selected topic. After which for Level 2,
          provide a detailed course design document based on your video presentation to further
          develop your ideas.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {levels.map((level) => (
          <div key={level.label} className={`rounded-2xl p-6 ${level.className}`}>
            <span className="inline-flex rounded-full bg-mulearn-whitish px-3 py-1 text-xs font-bold uppercase tracking-wide text-mulearn-blackish">
              {level.label}
            </span>
            <p className="mt-4 text-base font-medium text-mulearn-whitish">{level.text}</p>
          </div>
        ))}

        <Button
          asChild
          size="lg"
          className="rounded-xl bg-category-amber text-mulearn-whitish hover:bg-category-amber/90"
        >
          <Link href={guidelinesPdf} download="Art of Teaching Guidelines.pdf">
            Download PDF
            <Download />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Guidelines;
