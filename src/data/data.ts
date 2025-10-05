import { cdnUrl } from "@/services/cdn";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export interface SubItem {
  label: string;
  href: string;
}

export const navItems = [
  {
    label: "About",
    submenu: {
      "KEY PAGES": [
        { label: "MANIFESTO", href: "/manifesto" },
        { label: "Team", href: "/team" },
        { label: "Enablers", href: "/enablers" },
      ],
      Partners: [
        { label: "COMMUNITY PARTNERS", href: "/community-partners" },
        { label: "COMPANY PARTNERS", href: "/company-partners" },
      ],
      EVENTS: [
        { label: "GLOBAL CALENDAR", href: "/events/calendar" },
        // { label: "ANNOUNCEMENTS", href: "/events/announcements" },
        { label: "WEEKLY EVENTS", href: "/events/weekly" },
      ],
      Programs: [
        { label: "LAUNCHPAD", href: "https://launchpadkerala.org/" },
        { label: "PERMUTE", href: "https://permute.mulearn.org/" },
        { label: "TOP100SERIES", href: "https://top100coders.com/" },
        { label: "Art of Teaching", href: "/artofteaching" },
        { label: "IN50HOURS", href: "/in50hours" },
      ],
      OTHERS: [
        {
          label: "MuBook",
          href: "https://mulearn.org/r/mubook",
        },
        {
          label: "NEWSLETTER",
          href: "https://online.fliphtml5.com/slydm/yljq/",
        },
      ],
    },
  },
  {
    label: "Why μLearn?",
    href: "https://youtu.be/ehdSEL_s050",
    submenu: null,
  },
  {
    label: "Be A Part of Us",
    submenu: {
      "Join Us": [
        { label: "Company", href: "/be-a-part/company" },
        { label: "Campus", href: "/be-a-part/campus" },
        { label: "Campus Logo Generator", href: "/campus-logo-generator" },
      ],
    },
  },
  {
    label: "Mentorship",
    href: "/dashboard/search?activetab=mentors",
    submenu: null,
  },
  {
    label: "Learning",
    href: "/dashboard/learningcircle",
    submenu: {
      Explore: [
        { label: "Interest Groups", href: "/dashboard/interestgroups" },
        { label: "Learning Circle", href: "/dashboard/learningcircle" },
        { label: "Learning Paths", href: "/dashboard/mujourney" },
      ],
    },
  },
  {
    label: "Donate",
    href: "/donation",
    submenu: null,
  },
];

export const features = [
    {
      title: "Community",
      description: "Join 40,000+ learners & innovators.",
      image: cdnUrl("public/assets/landing/College Project Concept Illustration.png"),
      bgColor: "#9bc8ff",
    },
    {
      title: "Mentors",
      description: "Learn from those ahead of you, mentor those behind you.",
      image: cdnUrl("public/assets/landing/searching.png"),
      bgColor: "#ffb0a1",
    },
    {
      title: "Interest Groups",
      description: "Connect with like-minded people who share your interests",
      image: cdnUrl("public/assets/landing/Content Team Concept Illustration.png"),
      bgColor: "#5ce5c9",
    },
    {
      title: "Roadmaps",
      description: "Structured learning paths for skill mastery.",
      image: cdnUrl("public/assets/landing/Roadmap.png"),
      bgColor: "#ffe399",
    },
    {
      title: "Challenges",
      description: "Engage in real-world problem-solving.",
      image: cdnUrl("public/assets/landing/collab.png"),
      bgColor: "#b594ff",
    },
    {
      title: "Opportunities",
      description: "Discover Gigs, Jobs, and best opportunities around you",
      image: "https://www.propeers.in/images/cuate.svg",
      bgColor: "#55bfe9",
    },
];
  
export const specialevents = [
  {
    id: 1,
    title: "Top 100 Coders",
    description:
      "Welcome to the Top 100 Coders initiative Recognised by Kerala Govt. We're on a mission to recognize and empower the best coders in India. If you're passionate about coding and want to make a significant impact in the tech community, you're in the right place.",
    // date: "2025-04-09",
    // participants: 100,
    link: "https://top100coders.com/",
    image: cdnUrl("src/modules/Public/Home/assets/top-100.webp"),
    isLive: true,
  },
  {
    id: 2,
    title: "Launchpad",
    description:
      "Launchpad Kerala 2024 is a premier job fair that brings together talented individuals and innovative companies in the technical and engineering fields.",
    // date: "2024-06-02",
    // participants: 200,
    link: "https://launchpad.mulearn.org/",
    image: cdnUrl("src/modules/Public/Home/assets/launchpad.webp"),
    isLive: false,
  },
  {
    id: 3,
    title: "Trivial Ideas",
    description:
      "Have an idea that's out-of-the-box crazy? This is your chance to turn it into a real product! ",
    recurrence: "Monthly",
    // date: "2025-02-02",
    // participants: 500,
    link: "https://www.instagram.com/mulearn.official/p/C6eHEzJyMMn/",
    image: cdnUrl("src/modules/Public/Home/assets/trivialideas.webp"),
    isLive: false,
  },
];

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


export const footer = [
  {
    title: "Quick Links",
    links: [
      { title: "Blog", url: "https://gtechmulearn.medium.com/" },
      { title: "Team", url: "/team" },
      { title: "Career Labs", url: "https://mulearn.org/careers" },
      { title: "Interest Groups", url: "/dashboard/interestgroups" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms and Conditions", url: "/termsandconditions" },
      { title: "Privacy Policy", url: "/privacypolicy" },
    ],
  },
];

export const socials = [
  {
    icon: FaLinkedin,
    url: "http://www.linkedin.com/company/gtechmulearn/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/mulearn.official/",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/c/mulearn",
    label: "YouTube",
  },
  {
    icon: FaFacebook,
    url: "http://www.facebook.com/gtechmulearn",
    label: "Facebook",
  },
];

export const contactInfo = {
  copyright: "μLearn Foundation | Copyright © 2025 All rights reserved.",
  address: "Technopark Phase 1, Thiruvananthapuram, Kerala - 695581",
  email: "info@mulearn.org",
  phone: "+91 89436 47000",
  website: "www.mulearn.org",
};
