export interface SubItem {
  label: string;
  href: string;
}

export interface SpecialEvent {
  id: number;
  title: string;
  description: string;
  date?: string;
  recurrence?: string;
  participants?: number;
  image: string;
  link: string;
  isLive: boolean;
  isExpired?: boolean | null;
  isComingSoon?: boolean | null;
  organization?: string;
  tags?: string[];
  location?: string;
  time?: string;
}

export interface Role {
  id: string;
  label: string;
}

export interface RoleItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface RolesContent {
  [key: string]: RoleItem[];
}

export interface Event {
  title: string;
  description: string;
  link?: string;
  date: string;
}

interface OrgTypeCount {
  org_type: string;
  org_count: number;
}

interface KarmaPowCount {
  karma_count: number;
  pow_count: number;
}

interface RoleCount {
  role__title: string;
  role_count: number;
}

export interface Counts {
  members: number;
  learning_circle_count: number;
  org_type_counts: OrgTypeCount[];
  ig_count: number;
  karma_pow_count: KarmaPowCount;
  enablers_mentors_count: RoleCount[];
}

export interface CommunityCardProps {
  name: string;
  image: string;
  link: string;
  customlink?: string;
}

export type Partner = {
  name: string;
  image: string;
  link: string;
  customlink?: string;
};

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
