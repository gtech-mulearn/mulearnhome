import type { Counts } from "@/shared";
import type { GalleryItem, ImpactStat } from "../types/impact-gallery.types";

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Victory Unlocked at ExploitX!",
    description:
      "A proud moment for the µLearn Cybersecurity community as our members clinch the 2nd Runner-up position at the National Level CTF ExploitX! Their hard work, skill, and passion for cybersecurity have earned them national recognition, along with exciting rewards and opportunities. A true testament to dedication and continuous learning!",
    image: "/assets/impact-gallery/00.webp",
    category: "students",
    type: "image",
  },
  {
    id: "2",
    title: "Rising Beyond Limits",
    description:
      "Two inspiring mentors from the µLearn community have achieved a remarkable milestone as the founders of an AI startup incubated into Y Combinator. This moment marks a proud win for the entire ecosystem, showcasing the power of dedication, skill, and visionary thinking.",
    image: "/assets/impact-gallery/congratulations.webp",
    category: "mentors",
    type: "image",
  },
  {
    id: "3",
    title: "Won 18 Lakhs by Students in Meta's Global Hackathon!",
    description:
      "Twenty-seven of the two hundred winners of a worldwide challenge conducted by Meta recently were from MuLearn! Meta challenge was to create Instagram filters using Spark AR. Participation from Kerala in such challenges has often been limited owing to a lack of resources to acquire the knowhow to crack the task. Participants of the bootcamp went on to win cash prizes worth eighteen lakh rupees!",
    image: "/assets/impact-gallery/meta-global-hackathon.webp",
    category: "impact-stories",
    type: "image",
  },
  {
    id: "4",
    title: "Open Source Champions Rise!",
    description:
      "A proud moment for the µLearn community as our team earns official recognition from the Beckn ecosystem for their successful PR merge into the Beckn-onix repo. Their dedication, collaboration, and commitment to open-source innovation continue to showcase what passionate youth can achieve together!",
    image: "/assets/impact-gallery/beckn-success.webp",
    category: "events",
    type: "image",
  },
  {
    id: "5",
    title: "One Step Closer to Open-Source Greatness!",
    description:
      "A proud milestone as a µLearn member gets officially recognized as a Beckn open-source contributor with a successful PR merge into the Beckn-onix repository. A true example of consistency, learning, and community-driven growth. Here’s to many more wins ahead!",
    image: "/assets/impact-gallery/thanks.webp",
    category: "companies",
    type: "image",
  },
  {
    id: "6",
    title: "Rising to the Global Stage!",
    description:
      "A proud moment for µLearn as our cybersecurity lead and his team break barriers at the Kaspersky CTF 2025, securing top positions across Asia, India, and the world. A true testament to relentless passion, skill, and teamwork—proof that consistent effort turns ambition into achievement.",
    image: "/assets/impact-gallery/ctf.webp",
    category: "impact-stories",
    type: "image",
  },
];

export const galleryCategories = [
  { id: "all", label: "All", count: galleryData.length },
  {
    id: "events",
    label: "Events",
    count: galleryData.filter((item) => item.category === "events").length,
  },
  {
    id: "students",
    label: "Students",
    count: galleryData.filter((item) => item.category === "students").length,
  },
  {
    id: "companies",
    label: "Companies",
    count: galleryData.filter((item) => item.category === "companies").length,
  },
  {
    id: "mentors",
    label: "Mentors",
    count: galleryData.filter((item) => item.category === "mentors").length,
  },
  {
    id: "impact-stories",
    label: "Impact Stories",
    count: galleryData.filter((item) => item.category === "impact-stories").length,
  },
];

export function impactStatsFromCounts(counts: Counts): ImpactStat[] {
  const learners = counts.members ?? 0;
  const institutions = counts.org_type_counts
    ? counts.org_type_counts.reduce((s, o) => s + (o.org_count || 0), 0)
    : 0;
  const companyObj = counts.org_type_counts
    ? counts.org_type_counts.find((o) => String(o.org_type).toLowerCase().includes("company"))
    : undefined;
  const companyPartners = companyObj ? companyObj.org_count : 0;

  const mentorsObj = counts.enablers_mentors_count
    ? counts.enablers_mentors_count.find((r) =>
        String(r.role__title).toLowerCase().includes("mentor"),
      )
    : undefined;
  const mentors = mentorsObj ? mentorsObj.role_count : 0;

  const eventsHosted = 500;
  const successStories = "100+";

  const fmt = (n: number) => (typeof n === "number" ? n.toLocaleString() : String(n));

  return [
    { number: `${fmt(learners)}+`, label: "Learners", icon: "Users" },
    { number: `${fmt(institutions)}+`, label: "Institutions", icon: "School" },
    { number: `${eventsHosted}+`, label: "Events Hosted", icon: "Calendar" },
    { number: `${fmt(companyPartners)}+`, label: "Company Partners", icon: "Handshake" },
    { number: `${fmt(mentors)}+`, label: "Mentors", icon: "GraduationCap" },
    { number: successStories, label: "Success Stories", icon: "TrendingUp" },
  ];
}

// export const annualReports: AnnualReport[] = [
//   {
//     id: "2024",
//     year: "2024",
//     title: "2024 Annual Report",
//     summary:
//       "A year of unprecedented growth and community impact. We expanded to 1,900+ institutions, hosted 500+ events, and empowered 59,000+ learners across India.",
//     pdfUrl: "/assets/report/2024-annual-report.pdf",
//     imageUrl: "/assets/report/2024-report-cover.jpg",
//     highlights: [
//       "59,000+ active learners across India",
//       "1,900+ educational institutions partnered",
//       "500+ events and workshops conducted",
//       "50+ company partnerships established",
//       "1,000+ mentors actively engaged",
//     ],
//     publishedDate: "2025-01-15",
//   },
//   {
//     id: "2023",
//     year: "2023",
//     title: "2023 Annual Report",
//     summary:
//       "Building the foundation for peer-led learning. We established our core programs, launched key partnerships, and created the framework for sustainable community growth.",
//     pdfUrl: "/assets/report/2023-annual-report.pdf",
//     imageUrl: "/assets/report/2023-report-cover.jpg",
//     highlights: [
//       "25,000+ learners onboarded",
//       "500+ institutions joined our network",
//       "200+ events organized",
//       "20+ strategic partnerships formed",
//       "500+ mentors recruited",
//     ],
//     publishedDate: "2024-01-10",
//   },
//   {
//     id: "2022",
//     year: "2022",
//     title: "2022 Annual Report",
//     summary:
//       "The year we began our journey. From a small community of passionate learners to establishing µLearn as a recognized platform for peer-led education.",
//     pdfUrl: "/assets/report/2022-annual-report.pdf",
//     imageUrl: "/assets/report/2022-report-cover.jpg",
//     highlights: [
//       "10,000+ early adopters",
//       "100+ institutions piloted our programs",
//       "50+ initial events conducted",
//       "10+ founding partnerships",
//       "100+ pioneer mentors",
//     ],
//     publishedDate: "2023-01-05",
//   },
// ];
