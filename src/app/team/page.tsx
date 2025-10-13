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
import { cdnUrl } from "@/services/cdn";
import MuImage from "@/components/MuImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 },
  }),
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

type YearType = "2025" | "2024" | "2023" | "2022";

interface TeamMember {
  name: string;
  muid: string;
  image: string;
  team: string;
  lead: string;
  social: { linkedin?: string; twitter?: string; github?: string };
}

interface Team {
  type: string;
  members: TeamMember[];
}

interface YearData {
  year: string;
  teams: Team[];
}

export default function Team() {
  const [activeYear, setActiveYear] = useState<YearType>("2025");

  const muTeamData = team.find((item) => item.year === "µTeam") as
    | YearData
    | undefined;
  const selectedYearData = team.find((item) => item.year === activeYear) as
    | YearData
    | undefined;

  const renderTeamGrid = (teams: Team[]) =>
    teams.map((team, teamIndex) => (
      <div key={teamIndex} className="mb-8 w-full">
        <h2 className="text-4xl font-semibold mb-4 text-foreground text-center">
          {team.type}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {team.members.map((member, memberIndex) => (
            <TeamCard
              key={memberIndex}
              name={member.name}
              muid={member.muid}
              image={member.image}
              team={member.team}
              lead={member.lead}
              linkedin={member.social.linkedin}
              github={member.social.github}
              twitter={member.social.twitter}
            />
          ))}
        </div>
      </div>
    ));

  return (
    <motion.div
      className="font-sans text-center py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="py-24 px-4 flex justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
          <div className="flex-1 text-left mb-6 md:mb-0">
            <motion.h2
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-[4.2rem] font-bold text-mulearn-blackish leading-tight"
            >
              The <span className="font-semibold text-mulearn-trusty-blue">Gears</span>{" "}
              Behind The Machine.
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl md:text-2xl my-8 text-mulearn-gray-600"
            >
              The &apos;µLearn&apos; community&apos;s growth to this moment
              would not have been possible without the team&apos;s soul and
              heart...
            </motion.p>
          </div>
          <motion.div
            variants={fadeInUp}
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
        <div className="mb-12 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            µTeam
          </h2>
          {renderTeamGrid(muTeamData.teams)}
        </div>
      )}

      <div className="flex flex-col items-center mt-8 max-w-7xl mx-auto px-4">
        <div className="mt-6 mb-8 flex justify-center">
          <Select
            value={activeYear}
            onValueChange={(value) => setActiveYear(value as YearType)}
          >
            <SelectTrigger className="w-[200px] border-blue-500 shadow-[0_4px_16px_rgba(60,130,246,0.18)] text-blue-600 hover:bg-blue-50">
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

        {selectedYearData && renderTeamGrid(selectedYearData.teams)}
      </div>
    </motion.div>
  );
}
