"use client";

import { useState } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TeamCard } from "@/app/team/_components/TeamCard";
import { team } from "@/data/data";
import { YearData, Teams } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";
import MuImage from "@/components/MuImage";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

type YearType = "2025" | "2024" | "2023" | "2022";

export default function Team() {
  const [activeYear, setActiveYear] = useState<YearType>("2025");

  const muTeamData = team.find(
    (item) => item.year === "Executive Committee"
  ) as YearData | undefined;

  const selectedYearData = team.find((item) => item.year === activeYear) as
    | YearData
    | undefined;

  const renderTeamGrid = (teams: Teams[]) =>
    teams.map((team, teamIndex) => (
      <motion.div
        key={teamIndex}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-24 w-full">
          <h2 className="text-5xl font-semibold mb-2 text-mulearn-trusty-blue text-center">
            {team.type}
          </h2>
          {team.description && (
            <p className="text-lg text-center text-mulearn-gray-600 mb-6">
              {team.description}
            </p>
          )}

          {team.subteams
            ? team.subteams.map((subTeam, subIndex) => (
                <div key={subIndex} className="mb-24">
                  <h3 className="text-3xl font-semibold mb-1 text-center text-mulearn-blackish">
                    {subTeam.type}
                  </h3>
                  {subTeam.description && (
                    <p className="text-md text-center text-mulearn-gray-600 mb-4">
                      {subTeam.description}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {subTeam.members.map((member, memberIndex) => (
                      <TeamCard
                        key={memberIndex}
                        name={member.name}
                        muid={member.muid}
                        image={member.image}
                        team={member.team}
                        lead={member.lead}
                        linkedin={member.linkedin}
                        github={member.github}
                        twitter={member.twitter}
                      />
                    ))}
                  </div>
                </div>
              ))
            : team.members && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                  {team.members.map((member, memberIndex) => (
                    <TeamCard
                      key={memberIndex}
                      name={member.name}
                      muid={member.muid}
                      image={member.image}
                      team={member.team}
                      lead={member.lead}
                      linkedin={member.linkedin}
                      github={member.github}
                      twitter={member.twitter}
                    />
                  ))}
                </div>
              )}
        </div>
      </motion.div>
    ));

  return (
    <motion.div
      className="text-centerr"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="py-24 px-4 flex justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full gap-8">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-5xl md:text-[4.2rem] font-bold text-mulearn-blackish leading-tight">
              The{" "}
              <span className="font-semibold text-mulearn-trusty-blue">
                Gears
              </span>{" "}
              Behind The Machine.
            </h2>
            <p className="text-xl md:text-2xl my-8 text-mulearn-gray-600">
              The &apos;µLearn&apos; community&apos;s growth to this moment
              would not have been possible without the team&apos;s soul and
              heart...
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <MuImage
              src={cdnUrl("public/assets/team/illustration.webp")}
              alt="Team Illustration"
              width={512}
              height={512}
              className="w-full h-auto max-w-[32rem]"
              priority
            />
          </motion.div>
        </div>
      </div>

      {muTeamData && (
        <div className="mb-20 mt-10 max-w-7xl mx-auto px-4">
          {renderTeamGrid(muTeamData.teams)}
        </div>
      )}

      <div className="flex flex-col items-center mt-20 max-w-7xl mx-auto px-4">
        <div className="mt-6 mb-12 flex justify-center">
          <Select
            value={activeYear}
            onValueChange={(value) => setActiveYear(value as YearType)}
          >
            <SelectTrigger className="w-[200px] border-mulearn-trusty-blue shadow-[0_4px_16px_rgba(60,130,246,0.18)] text-mulearn-trusty-blue">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-8">
          {selectedYearData && (
            <motion.div
              key={activeYear}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full"
            >
              {renderTeamGrid(selectedYearData.teams)}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
