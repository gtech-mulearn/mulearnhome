import { MotionDiv, MuImage } from "@/components/layouts";
import { cdnUrl } from "@/shared";
import { team } from "../data/team.data";
import type { YearData } from "../types";
import { renderTeamGrid } from "./team-grid";
import { TeamYearSwitcher } from "./team-year-switcher";

const YEARS = ["2025", "2024", "2023", "2022"] as const;

export function TeamView() {
  const muTeamData = team.find((item) => item.year === "Executive Committee") as
    | YearData
    | undefined;

  const yearSections = YEARS.map((year) => {
    const yearData = team.find((item) => item.year === year) as YearData | undefined;
    return { year, content: renderTeamGrid(yearData?.teams ?? []) };
  });

  return (
    <MotionDiv
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }}
    >
      <div className="py-12 px-4 flex justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-[4.2rem] font-bold text-mulearn-blackish leading-tight">
              The <span className="font-semibold text-mulearn">Gears</span> Behind The Machine.
            </h1>
            <p className="text-xl md:text-2xl my-8 text-justify md:text-left text-mulearn-gray-600">
              The &apos;µLearn&apos; community&apos;s growth to this moment would not have been
              possible without the team&apos;s soul and heart...
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="flex-1 flex justify-center"
          >
            <MuImage
              src={cdnUrl("public/assets/team/illustration.webp")}
              alt="Team Illustration"
              width={512}
              height={512}
              className="w-full h-auto md:max-w-[32rem] sm:max-w-[24rem]"
              priority
            />
          </MotionDiv>
        </div>
      </div>

      {muTeamData && (
        <div className="mb-20 mt-10 max-w-7xl mx-auto px-4">{renderTeamGrid(muTeamData.teams)}</div>
      )}

      <TeamYearSwitcher sections={yearSections} />
    </MotionDiv>
  );
}
