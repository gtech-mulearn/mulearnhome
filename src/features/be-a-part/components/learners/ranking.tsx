import { MuImage } from "@/components/layouts";
import { cn } from "@/lib/utils";
import { fetchTopLearners } from "@/shared";
import { Section, SectionHeading } from "../shared";

export async function RankingSection() {
  const topLearners = await fetchTopLearners(10);

  if (topLearners.length === 0) return null;

  return (
    <Section id="top-learners">
      <SectionHeading
        title={
          <>
            Top <span className="text-mulearn">Learners</span>
          </>
        }
        description="Recognising consistent learners strengthens motivation for everyone."
      />

      {/* Column-major on desktop so ranks read 1–5 down the left, 6–10 down the right. */}
      <ol className="mt-12 grid grid-cols-1 gap-3 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-6">
        {topLearners.map((learner, index) => (
          <li
            key={learner.email}
            className="flex items-center gap-3 rounded-2xl border border-mulearn/10 bg-card px-3 py-3 shadow-sm sm:gap-4 sm:px-5"
          >
            <span
              className={cn(
                "w-6 shrink-0 text-center font-(family-name:--font-display) text-lg font-bold sm:w-7",
                index < 3 ? "text-mulearn" : "text-mulearn-gray-600",
              )}
            >
              {index + 1}
            </span>
            <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-mulearn/10 sm:size-12">
              {learner.avatar ? (
                <MuImage src={learner.avatar} alt="" fill sizes="48px" className="object-cover" />
              ) : (
                <span className="flex size-full items-center justify-center text-lg font-bold text-mulearn">
                  {learner.name.charAt(0).toUpperCase()}
                </span>
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-mulearn-blackish">{learner.name}</p>
              <p className="truncate text-sm text-mulearn-gray-600">{learner.email}</p>
            </div>
            <p className="shrink-0 text-right">
              <span className="font-(family-name:--font-display) text-lg font-bold text-mulearn">
                {learner.kp.toLocaleString("en-US")}
              </span>{" "}
              <span className="text-sm font-medium text-mulearn-gray-600">KP</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
