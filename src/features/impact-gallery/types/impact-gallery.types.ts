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
