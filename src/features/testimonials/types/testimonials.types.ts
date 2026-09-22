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

export type Testimonials = VideoTestimonial | TextTestimonial;

export interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  imageUrl: string;
}

export interface ProfileImage {
  id: number;
  avatar: string;
}
