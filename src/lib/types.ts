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

export interface CareersCardProps {
  role?: string;
  remuneration?: string;
  vacancies?: string;
  location?: string;
  lastdate?: string;
  duration?: string;
  logo?: string;
  applylink?: string;
  jdlink?: string;
  extraField?: string;
  extraContent?: string;
  extraButton?: string;
  organization?: string;
}

export interface ClosedCareersCardProps {
  date?: string;
  title?: string;
  location?: string;
  qualifications?: string;
  role?: string;
  duration?: string;
  remuneration?: string;
}

export interface NewHiringRole {
  logo?: string;
  role?: string;
  remuneration?: string;
  vacancies?: string;
  location?: string;
  lastdate?: string;
  applylink?: string;
  jdlink?: string;
  duration?: string;
  extrafieldname?: string;
  extrafieldvalue?: string;
  extrafieldlink?: string;
  organization?: string;
}

export interface PreviousHiringRole {
  logo?: string;
  title?: string;
  company?: string;
  qualifications?: string;
  remumeration?: string;
  date?: string;
  role?: string;
  remuneration?: string;
  location?: string;
  lastdate?: string;
  poster?: string;
  duration?: string;
}

export interface Company {
  alt: string;
  src: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "events" | "students" | "companies" | "mentors" | "impact-stories";
  type: "image" | "video";
  stats?: {
    participants?: number;
    campuses?: number;
    companies?: number;
  };
}

export interface ImpactStat {
  number: string;
  label: string;
  icon: string;
}