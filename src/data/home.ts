import { clientEnv } from "@/lib/env/env.client";
import type { Role, RolesContent } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";

export const features = [
  {
    title: "Community",
    description: "Join 60,000+ learners & innovators.",
    image: cdnUrl("public/assets/landing/College Project Concept Illustration.png"),
    bgColor: "#9bc8ff",
    cta: "Join Community",
    url: `${clientEnv.NEXT_PUBLIC_APP_URL}`,
  },
  {
    title: "Mentors",
    description: "Learn from those ahead of you, mentor those behind you.",
    image: cdnUrl("public/assets/landing/searching.png"),
    bgColor: "#ffb0a1",
    cta: "Find a Mentor",
    url: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/search/mentors`,
  },
  {
    title: "Interest Groups",
    description: "Connect with like-minded people who share your interests",
    image: cdnUrl("public/assets/landing/Content Team Concept Illustration.png"),
    bgColor: "#5ce5c9",
    cta: "Explore IGs",
    url: "/interest-groups",
  },
  {
    title: "Roadmaps",
    description: "Structured learning paths for skill mastery.",
    image: cdnUrl("public/assets/landing/Roadmap.png"),
    bgColor: "#ffe399",
    cta: "View Roadmaps",
    url: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/mujourney`,
  },
  {
    title: "Challenges",
    description: "Engage in real-world problem-solving.",
    image: cdnUrl("public/assets/landing/collab.png"),
    bgColor: "#b594ff",
    cta: "Start Challenges",
    url: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/mujourney`,
  },
  {
    title: "Opportunities",
    description: "Discover Gigs, Jobs, and best opportunities around you",
    image: "https://www.propeers.in/images/cuate.svg",
    bgColor: "#55bfe9",
    cta: "See Opportunities",
    url: "/careers",
  },
];

export const specialevents = [
  {
    id: 1,
    title: "Top 100 Coders",
    description:
      "Welcome to the Top 100 Coders initiative Recognised by Kerala Govt. We're on a mission to recognize and empower the best coders in India. If you're passionate about coding and want to make a significant impact in the tech community, you're in the right place.",
    link: "https://www.top100series.com/",
    image: cdnUrl("src/modules/Public/Home/assets/top-100.webp"),
    isLive: true,
  },
  {
    id: 2,
    title: "Launchpad",
    description:
      "Launchpad Kerala 2024 is a premier job fair that brings together talented individuals and innovative companies in the technical and engineering fields.",
    link: "https://launchpad.mulearn.org/",
    image: cdnUrl("src/modules/Public/Home/assets/launchpad.webp"),
    isLive: false,
  },
  {
    id: 3,
    title: "Perµte",
    description:
      "Perµte is the annual flagship celebration of the µLearn Foundation—an electrifying gathering that honors excellence, sparks bold ideas through thought-provoking panels, unveils visionary roadmaps, and ignites connections across a vibrant tapestry of talent and innovation.",
    recurrence: "Monthly",
    link: "https://permute.mulearn.org/",
    image: "/assets/home/permute.png",
    isLive: false,
  },
];

export const opportunities = [
  {
    id: 1,
    name: "Job",
    icon: "https://www.propeers.in/images/rafiki.svg",
  },
  {
    id: 2,
    name: "Freelance",
    icon: "https://www.propeers.in/images/Mentors-cuate.svg",
  },
  {
    id: 3,
    name: "Research",
    icon: "https://www.propeers.in/images/cuate.svg",
  },
  {
    id: 4,
    name: "Entrepreneurship",
    icon: cdnUrl("public/assets/landing/College Project Concept Illustration.png"),
  },
  {
    id: 5,
    name: "Social Cause",
    icon: cdnUrl("public/assets/landing/social-growth.webp"),
  },
];

export const rolesTitle: Role[] = [
  { id: "partner", label: "Partner" },
  { id: "learner", label: "Learner" },
  { id: "community", label: "Community" },
];

export const rolesContent: RolesContent = {
  partner: [
    {
      id: 1,
      name: "Leverage Resources & Expertise",
      description:
        "Share your tools, platforms, and industry expertise at no cost while accessing a highly skilled, pre-trained talent pool. Minimize onboarding time, streamline workflow integration, and scale projects efficiently through seamless collaboration.",
      image: cdnUrl("public/assets/landing/expertise.webp"),
    },
    {
      id: 2,
      name: "Product Introduction",
      description:
        "Launch your products directly to a community of tech-savvy developers and early adopters. Boost brand awareness, accelerate product adoption, and gather real-time user insights for continuous improvement.",
      image: cdnUrl("public/assets/landing/product introduction.webp"),
    },
    {
      id: 3,
      name: "Talent Acquisition",
      description:
        "Hire top-tier, job-ready developers with proven skills, reducing training costs and expediting project execution. Gain access to a dynamic talent pipeline that meets industry demands and ensures faster onboarding.",
      image: cdnUrl("public/assets/landing/talent.webp"),
    },
    {
      id: 4,
      name: "Brand Presence",
      description:
        "Elevate your brand reputation by engaging with a vibrant learning ecosystem. Build lasting relationships with future industry leaders while positioning your company as an innovator in the tech community.",
      image: cdnUrl("public/assets/landing/brand.webp"),
    },
  ],
  learner: [
    {
      id: 1,
      name: "Skill Development",
      description:
        "Gain practical experience through hands-on projects and industry-relevant training. Build a strong technical foundation with real-world applications that enhance your expertise.",
      image: "/assets/home/skill.svg",
    },
    {
      id: 2,
      name: "Career Growth & Job Opportunities",
      description:
        "Connect with top companies, land internships, and explore high-impact job opportunities. Get noticed by hiring partners actively seeking fresh, skilled talent.",
      image: cdnUrl("public/assets/roles_images/career-growth.svg"),
    },
    {
      id: 3,
      name: "Collaborative Learning Experience",
      description:
        "Learn alongside peers and industry experts in an interactive, knowledge-sharing environment. Develop critical problem-solving skills while staying ahead with the latest tech trends.",
      image: "/assets/home/collab.svg",
    },
    {
      id: 4,
      name: "Recognized Certifications & Skill Validation",
      description:
        "Earn industry-recognized certifications and verifiable credentials that enhance your professional profile. Stand out in a competitive job market with proof of your expertise.",
      image: cdnUrl("public/assets/roles_images/certifications.svg"),
    },
  ],
  community: [
    {
      id: 1,
      name: "Expand Your Network & Build Connections",
      description:
        "Engage with a vibrant community of like-minded individuals and industry professionals. Grow your network, discover collaboration opportunities, and build lasting relationships that drive career success.",
      image: "/assets/home/networking.svg",
    },
    {
      id: 2,
      name: "Knowledge Sharing & Industry Insights",
      description:
        "Exchange ideas, best practices, and innovative solutions with experts and peers. Stay updated on the latest trends, emerging technologies, and industry advancements.",
      image: cdnUrl("public/assets/roles_images/knowledgesharing.svg"),
    },
    {
      id: 3,
      name: "Collaborative Projects & Real-World Impact",
      description:
        "Join forces with community members to work on impactful projects that shape the tech ecosystem. Gain hands-on experience, enhance problem-solving skills, and contribute to meaningful innovations.",
      image: "/assets/home/collaboration.svg",
    },
    {
      id: 4,
      name: "Mentorship & Career Guidance",
      description:
        "Access mentorship from industry leaders while also giving back by guiding others. Gain valuable insights, career advice, and professional support to accelerate personal and professional growth.",
      image: cdnUrl("public/assets/roles_images/mentorship.svg"),
    },
  ],
  enabler: [
    {
      id: 1,
      name: "Resource Provision",
      description:
        "Facilitate access to cutting-edge tools and technologies, empowering learners with the resources they need to succeed.",
      image: "https://img.freepik.com/free-vector/digital-transformation_23-2148804417.jpg",
    },
    {
      id: 2,
      name: "Skill Bridging",
      description:
        "Bridge the gap between academic learning and industry demands by providing practical, hands-on training modules.",
      image: "https://img.freepik.com/free-vector/technology-innovation_23-2148812878.jpg",
    },
    {
      id: 3,
      name: "Innovative Platforms",
      description:
        "Deploy innovative platforms that support creative learning, foster collaboration, and drive digital transformation.",
      image: "https://img.freepik.com/free-vector/businessman-using-digital-tablet_74855-6340.jpg",
    },
    {
      id: 4,
      name: "Community Support",
      description:
        "Invest in a thriving ecosystem by supporting initiatives that benefit all members of the learning community.",
      image:
        "https://img.freepik.com/free-vector/customer-support-concept-illustration_114360-5090.jpg",
    },
  ],
};

export const comparisons = [
  {
    problem: "Fragmented Resources",
    solution: "Structured Roadmaps",
    highlight: "Roadmaps",
  },
  {
    problem: "Lack Of Right Advice",
    solution: "Mentorship from industry veterans",
    highlight: "Mentorship",
  },
  {
    problem: "Lack of Access to Opportunities",
    solution: "Opportunities from the best in every industry",
    highlight: "Opportunities",
  },
  {
    problem: "Limited Exposure",
    solution: "Exposure to global leaders and thinkers",
    highlight: "Exposure",
  },
  {
    problem: "Lack of motivation to learn",
    solution: "Gamified platform working based on Karma points",
    highlight: "Gamified",
  },
];
