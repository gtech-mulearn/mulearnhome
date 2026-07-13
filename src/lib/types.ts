import type { IconType } from "react-icons";

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
  image?: string;
  isLive?: boolean;
  date?: string;
  link?: string;
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
  organization?: string;
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

export interface AnnualReport {
  id: string;
  year: string;
  title: string;
  summary: string;
  pdfUrl: string;
  imageUrl?: string;
  highlights?: string[];
  publishedDate: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  videoUrl: string;
}

export interface TextTestimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  muid?: string;
  profileImage: string;
  quote: string;
  type: "academia" | "industry" | "government" | "civic-society";
  rating: number;
  date: string;
  socialProof?: string;
}

export interface ProfileImage {
  id: number;
  avatar: string;
}

export type Testimonials = VideoTestimonial | TextTestimonial;

export type cardProps = {
  name: string;
  image: string;
  link: string;
  description: string;
  largeImg?: boolean;
  date?: string;
};

export type IGSectionProps = {
  cards: cardProps[];
  heading?: string;
  largeImg?: boolean;
};

export interface OMEvent {
  id: number;
  title: string;
  description: string;
  date?: string;
  time?: string;
  performer?: string;
  designation?: string;
  tags?: string[];
  interestGroups?: string[];
  thumbnail?: string;
  link?: string;
  isUpcoming: boolean;
}

export interface OfficeHours {
  id: number;
  title: string;
  date?: string;
  description: string;
  performer?: string;
  tags: string[];
  ig?: string;
  thumbnail?: string;
  isUpcoming: boolean;
}

export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
  iconUrl: string;
}

export interface LearnerRoleTag {
  label: string;
  id: string;
}

export interface Learner {
  full_name: string;
  total_karma: number;
  institution: string;
}

export interface TopLearner {
  name: string;
  kp: number;
}

export interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  imageUrl: string;
}

export interface OfficeHoursData {
  events: OfficeHours[];
}

export interface WeeklyTwitchEvent {
  id: number;
  topic: string;
  campus: string;
  zone: string;
  date: string;
  description: string;
  isUpcoming: boolean;
}

export interface WeeklyTwitchData {
  "salt mango tree": WeeklyTwitchEvent[];
  "inspiration station radio": WeeklyTwitchEvent[];
}

export interface Captcha {
  success: boolean;
  statusCode: string;
  score: number;
  error?: string;
}

export type SocialLinks = {
  icon: IconType;
  title: string;
  subtitle?: string;
  href: string;
  action?: "follow" | "subscribe";
  color: string;
};

export interface WeeklyTwitchPagination {
  count: number;
  totalPages: number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number | null;
}

export interface WeeklyTwitchParams {
  status?: "upcoming" | "ongoing" | "completed";
  search?: string;
  pageIndex?: number;
  perPage?: number;
}

export interface OfficeHoursSession {
  id: string;
  title: string;
  performer?: string | null;
  designation?: string | null;
  description?: string | null;
  date: string;
  link?: string | null;
  interest_groups: string[] | null;
  poster_thumbnail?: string | null;
  status: "upcoming" | "ongoing" | "completed";
}

export interface WeeklyTwitchEpisode {
  id: string;
  topic: string;
  campus: string;
  zone?: "north" | "central" | "south" | null;
  date: string;
  description?: string | null;
  link?: string | null;
  status: "upcoming" | "ongoing" | "completed";
}
