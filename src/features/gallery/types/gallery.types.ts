export interface GalleryMediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt?: string;
  caption?: string;
}

export interface GalleryEvent {
  slug: string;
  name: string;
  date?: string;
  month?: string;
  location: string;
  coverImage: string;
  description?: string;
  media: GalleryMediaItem[];
}
