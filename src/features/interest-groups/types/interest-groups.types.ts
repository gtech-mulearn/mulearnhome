/** Social fields arrive as bare handles (e.g. "octocat"), occasionally as full URLs. */
export interface ApiMemberSocials {
  github?: string | null;
  linkedin?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  [key: string]: string | null | undefined;
}

export interface ApiMember {
  muid: string;
  full_name: string;
  /** Present in the payload but personal — never render it. */
  email?: string;
  profile_pic?: string | null;
  company?: string | null;
  org?: string;
  role?: string;
  socials?: ApiMemberSocials;
}

/** One entry of `GET /dashboard/ig/list/` → `response.interestGroup`. */
export interface ApiInterestGroup {
  id: string;
  name: string;
  code?: string;
  category?: string | null;
  /** Markdown: `#` headings, `*`/`-` bullets, `---` rules and `**bold**`. */
  about?: string | null;
  members?: number | null;
  prerequisites?: string[] | null;
  career_opportunities?: string[] | null;
  office_hours?: string | null;
  /** Comma-separated URLs. */
  resource?: string | null;
  top_blogs?: { title?: string; url?: string }[] | null;
  leads?: ApiMember[] | null;
  mentors?: ApiMember[] | null;
  thinktank?: ApiMember[] | string | null;
  icon?: string | null;
  icon_image?: string | null;
  cover_image?: string | null;
}

export interface IgListApiResponse {
  interestGroup?: ApiInterestGroup[];
}

export interface InterestGroupLocalMeta {
  name: string;
  link: string;
  tagline: string;
  /** Banner art; used by the KKEM page's group cards, not the interest groups directory. */
  image: string;
  description: string;
}

export interface InterestGroupResource {
  label: string;
  url: string;
}

export interface InterestGroupDisplayItem {
  id?: string;
  name: string;
  tagline: string;
  /** False when the tagline is just the first sentence of `about` (so the dialog skips it). */
  hasCuratedTagline: boolean;
  category?: string;
  members?: number;
  /** Markdown from the API, or the plain local description when the API is unavailable. */
  about: string;
  link: string;
  prerequisites: string[];
  careers: string[];
  officeHours?: string;
  resources: InterestGroupResource[];
  leads: ApiMember[];
  mentors: ApiMember[];
  thinktank: ApiMember[];
}
