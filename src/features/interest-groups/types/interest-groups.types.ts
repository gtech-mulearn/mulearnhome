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
  email?: string;
  profile_pic?: string | null;
  company?: string;
  org?: string;
  role?: string;
  socials?: ApiMemberSocials;
}

export interface ApiImpactProjectLink {
  label?: string;
  url?: string;
}

export interface ApiImpactProjectTeamMember {
  muid: string;
  name?: string;
  avatar?: string | null;
  is_lead?: boolean;
}

export interface ApiImpactProject {
  id?: string;
  ig_id?: string;
  title?: string;
  image?: string | null;
  description?: string;
  links?: ApiImpactProjectLink[];
  team?: ApiImpactProjectTeamMember[];
}

export interface ApiPublicInterestGroup {
  id: string;
  name: string;
  image?: string | null;
  icon?: string | null;
  leads?: ApiMember[];
  mentors?: ApiMember[];
  thinktank?: ApiMember[];
  impact_projects?: ApiImpactProject[];
}

export interface PublicIgApiResponse {
  interestGroups?: ApiPublicInterestGroup[];
}

export interface InterestGroupLocalMeta {
  name: string;
  link: string;
  tagline: string;
  image: string;
  description: string;
}

export interface InterestGroupDisplayItem {
  id?: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  link: string;
  leads: ApiMember[];
  mentors: ApiMember[];
  thinktank: ApiMember[];
  impact_projects: ApiImpactProject[];
}
