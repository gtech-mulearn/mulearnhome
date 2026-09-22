export interface TeamMember {
  name: string;
  muid: string;
  image: string;
  team: string;
  lead: string;
  linkedin?: string;
  x?: string;
  github?: string;
}

export interface SubTeam {
  type: string;
  description?: string;
  members: TeamMember[];
}

export interface Teams {
  type: string;
  description?: string;
  subteams?: SubTeam[];
  members?: TeamMember[];
}

export interface YearData {
  year: string;
  teams: Teams[];
}

export interface TeamCardProps {
  name: string;
  designation?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  x?: string;
  muid?: string;
  lead?: string;
  team?: string;
}
