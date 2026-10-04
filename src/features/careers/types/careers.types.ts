import type { Pagination } from "@/shared";

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

/** `GET /public/career-lab/ongoing/` response shape — no `pagination` key at all, not even empty. */
export interface OngoingHiringApiResponse {
  data: OngoingHiring[];
}

/** `GET /public/career-lab/previous/` response shape — has `pagination`, unlike `ongoing`. */
export interface PreviousHiringApiResponse {
  data: PreviousHiring[];
  pagination: Pagination;
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
