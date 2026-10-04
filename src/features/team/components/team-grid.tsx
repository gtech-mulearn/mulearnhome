import type { Variants } from "framer-motion";
import { MotionDiv } from "@/components/layouts";
import type { Teams } from "../types";
import { TeamCard } from "./team-card";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

/** Pure server-side render helper — never imported into a "use client" file, so
 * team.data.ts's array never crosses the client boundary. */
export function renderTeamGrid(teams: Teams[]) {
  return teams.map((team) => (
    <MotionDiv
      key={team.type}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mb-24 w-full">
        <h2 className="text-5xl font-semibold mb-2 text-mulearn text-center">{team.type}</h2>
        {team.description && (
          <p className="text-lg text-center text-mulearn-gray-600 mb-6">{team.description}</p>
        )}

        {team.subteams
          ? team.subteams.map((subTeam) => (
              <div key={subTeam.type} className="mb-24">
                <h3 className="text-3xl font-semibold mb-1 text-center text-mulearn-blackish">
                  {subTeam.type}
                </h3>
                {subTeam.description && (
                  <p className="text-md text-center text-mulearn-gray-600 mb-4">
                    {subTeam.description}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                  {subTeam.members.map((member) => (
                    <TeamCard
                      key={member.muid}
                      name={member.name}
                      muid={member.muid}
                      image={member.image}
                      team={member.team}
                      lead={member.lead}
                      linkedin={member.linkedin}
                      github={member.github}
                      x={member.x}
                    />
                  ))}
                </div>
              </div>
            ))
          : team.members && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {team.members.map((member) => (
                  <TeamCard
                    key={member.muid}
                    name={member.name}
                    muid={member.muid}
                    image={member.image}
                    team={member.team}
                    lead={member.lead}
                    linkedin={member.linkedin}
                    github={member.github}
                    x={member.x}
                  />
                ))}
              </div>
            )}
      </div>
    </MotionDiv>
  ));
}
