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
  category?: string;
  organizedBy?: string;
  venueType?: string;
  venueLabel?: string;
  tags?: string[];
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

export interface PaginationMeta {
  count: number;
  totalPages: number;
  isNext: boolean;
  isPrev: boolean;
  nextPage: number | null;
  prevPage: number | null;
  current_page: number;
}

export interface OngoingHiring {
  id: string;
  posted_date: string;
  role: string;
  organization: string;
  title: string;
  location: string;
  lastdate: string;
  applylink: string;
  jdlink: string;
  duration: string;
  remuneration: string;
  vacancies: number;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
}

export interface PreviousHiring {
  id: string;
  role: string;
  organization: string;
  title: string;
  location: string;
  lastdate: string;
  remuneration: string;
  vacancies: number;
  duration: string;
  extracontent?: string;
}

export interface CareersCardProps {
  id?: string;
  role?: string;
  organization?: string;
  title?: string;
  location?: string;
  lastdate?: string;
  remuneration?: string;
  vacancies?: number;
  duration?: string;
  applylink?: string;
  jdlink?: string;
  posted_date?: string;
}

export interface ClosedCareersCardProps {
  id?: string;
  title?: string;
  role?: string;
  organization?: string;
  location?: string;
  lastdate?: string;
  remuneration?: string;
  vacancies?: number;
  duration?: string;
  extracontent?: string;
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
  status?: "upcoming" | "ongoing" | "completed" | Array<"upcoming" | "ongoing" | "completed">;
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
  time?: string | null;
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
  time?: string | null;
  description?: string | null;
  link?: string | null;
  status: "upcoming" | "ongoing" | "completed";
}

export interface GrabYourSuperpowersSession {
  id: string;
  title: string;
  date: string;
  time?: string | null;
  description?: string | null;
  performer?: string | null;
  designation?: string | null;
  campus: string;
  link?: string | null;
  status: "upcoming" | "ongoing" | "completed";
}

export interface PublicEventVenue {
  venue_type: "physical" | "online" | "hybrid" | string;
  venue_address: string | null;
  venue_city: string | null;
  venue_maps_url: string | null;
  venue_online_link: string | null;
  venue_platform: string | null;
}

export interface PublicEventOrganizer {
  organiser_type: string;
  organiser_ig: {
    id: string;
    name: string;
    code: string;
  } | null;
  organiser_campus: {
    id: string;
    title: string;
    code: string;
  } | null;
  organiser_company: any | null;
  organiser_ci_id: any | null;
}

export interface PublicEvent {
  id: string;
  title: string;
  slug: string;
  cover_image: string | null;
  description?: string | null;
  status: string;
  scope: string;
  event_scope: string;
  event_type: string;
  start_datetime: string;
  end_datetime: string;
  venue: PublicEventVenue | null;
  organizer: PublicEventOrganizer | null;
  is_featured: boolean;
  is_collaboration: boolean;
  interest_count: number;
  min_karma: number | null;
  tags: string[];
  user_limit: number | null;
  category_id: string | null;
  category_name: string | null;
  viewer_interest_status: string | null;
}

export interface PublicEventsParams {
  status?: "upcoming" | "ongoing" | "completed" | Array<"upcoming" | "ongoing" | "completed">;
  start_date?: string;
  end_date?: string;
  event_type?: string;
  scope?: string;
  ig_id?: string;
  campus_id?: string;
  cluster?: string;
  is_featured?: boolean;
  tags?: string;
  search?: string;
  sortBy?: string;
}
