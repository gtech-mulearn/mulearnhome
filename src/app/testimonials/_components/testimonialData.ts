import { VideoTestimonial } from "@/lib/types";

// Sample testimonial data - Replace with actual data from your API or CMS
const sampleTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    organization: "Tech Innovators Inc",
    role: "Software Engineer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+1",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "2",
    name: "Rahul Menon",
    organization: "Digital Solutions Ltd",
    role: "Product Manager",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+2",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "3",
    name: "Anjali Nair",
    organization: "StartUp Ventures",
    role: "UX Designer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+3",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "4",
    name: "Arjun Kumar",
    organization: "Cloud Systems Corp",
    role: "DevOps Engineer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+4",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "5",
    name: "Divya Krishnan",
    organization: "AI Research Labs",
    role: "Data Scientist",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+5",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "6",
    name: "Karthik Iyer",
    organization: "Mobile Apps Studio",
    role: "Mobile Developer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+6",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "7",
    name: "Sneha Reddy",
    organization: "E-Commerce Platform",
    role: "Frontend Developer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+7",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
  {
    id: "8",
    name: "Vikram Patel",
    organization: "Blockchain Innovations",
    role: "Backend Developer",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailUrl:
      "https://placehold.co/600x400/2E85FE/ffffff.png?text=Testimonial+8",
    profileImage: "https://placehold.co/600x600/000000/FFFFFF.png?text=DP",
  },
];

/**
 * Fetches testimonials data asynchronously
 * In production, replace this with actual API call
 * @returns Promise resolving to array of VideoTestimonial objects
 */
export async function getTestimonials(): Promise<VideoTestimonial[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  return sampleTestimonials;
}
