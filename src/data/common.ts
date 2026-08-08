import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const navItems = [
  {
    label: "About",
    submenu: {
      "Key Pages": [
        { label: "Manifesto", href: "/manifesto" },
        { label: "Founder's Message", href: "/founders-message" },
        { label: "Team", href: "/team" },
        {
          label: "Impact Gallery",
          href: "/impact-gallery",
        },
        { label: "Contribution Leaderboard", href: "https://contributors.mulearn.org/" },
        { label: "Events", href: "/events" },
      ],
      "Flagship Initiatives": [
        { label: "Launchpad", href: "https://launchpad.mulearn.org/" },
        { label: "Permute", href: "https://permute.mulearn.org/" },
        { label: "Top100 Series", href: "https://top100series.com/" },
        { label: "Art of Teaching", href: "/artofteaching" },
        { label: "In50Hours", href: "/in50hours" },
        { label: "KKEM", href: "/kkem" },
      ],
      Others: [
        {
          label: "MuBook",
          href: "https://mulearn.org/r/mubook",
        },
        {
          label: "Career Labs",
          href: "/careers",
        },
        {
          label: "Contact Us",
          href: "/contact",
        },
        {
          label: "Testimonials",
          href: "/testimonials",
        },
        {
          label: "Socials",
          href: "/socials",
        },
        {
          label: "Gallery",
          href: "/gallery",
        },
        // { label: "ANNUAL REPORTS",
        //   href: "/reports"
        // },
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
        { label: "Enabler", href: "/be-a-part/enablers" },
        { label: "Learners", href: "/be-a-part/learners" },
        { label: "Campus Logo Generator", href: "/campus-logo-generator" },
      ],
      Partners: [
        { label: "Community Partners", href: "/partners/community-partners" },
        { label: "Company Partners", href: "/partners/company-partners" },
      ],
    },
  },
  {
    label: "Mentorship",
    href: "https://app.mulearn.org/dashboard/search?activetab=mentors",
    submenu: null,
  },
  {
    label: "Learning",
    href: "/learning-circle",
    submenu: {
      Explore: [
        {
          label: "Level Structure",
          href: "/levelstructure",
        },
        {
          label: "Interest Groups",
          href: "/interest-groups",
        },
        {
          label: "Learning Circle",
          href: "/learning-circle",
        },
        {
          label: "Learning Paths",
          href: "https://app.mulearn.org/dashboard/mujourney",
        },
      ],
    },
  },
  {
    label: "Donate",
    href: "/donate",
    submenu: null,
  },
  {
    label: "Docs",
    href: "https://docs.mulearn.org/",
  },
];

export const footer = [
  {
    title: "Quick Links",
    links: [
      { title: "Blog", url: "https://gtechmulearn.medium.com/" },
      { title: "Team", url: "/team" },
      { title: "Career Labs", url: "/careers" },
      { title: "Interest Groups", url: "/interest-groups" },
      { title: "Contact Us", url: "/contact" },
      { title: "Donate", url: "/donate" },
      { title: "Docs", url: "https://docs.mulearn.org/" },
    ],
  },
  {
    title: "Be Part of Us",
    links: [
      { title: "Campus", url: "be-a-part/campus" },
      { title: "Companies", url: "be-a-part/company" },
      {
        title: "Students",
        url: "/be-a-part/learners",
      },
      {
        title: "Mentors",
        url: "https://app.mulearn.org/dashboard/search?activetab=mentors",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms and Conditions", url: "/terms-and-conditions" },
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Refund Policy", url: "/refund-policy" },
      { title: "Cookie Settings", url: "#cookie-settings" },
    ],
  },
];

export const socials = [
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/company/gtechmulearn/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/mulearn.official/",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com/c/mulearn",
    label: "YouTube",
  },
  {
    icon: FaFacebook,
    url: "http://facebook.com/gtechmulearn",
    label: "Facebook",
  },
];

export const contactInfo = {
  copyright: "μLearn Foundation | Copyright © 2025 All rights reserved.",
  address: "Technopark Phase 1, Thiruvananthapuram, Kerala - 695581",
  email: "info@mulearn.org",
  website: "www.mulearn.org",
};

export const contactPage = {
  hero: {
    badge: "Connect With Us",
    title: {
      line1: "Let's Build",
      line2: "Together",
    },
    description:
      "Join our growing community of learners, innovators, and partners. Whether you're starting your journey or looking to collaborate, we're here to support your growth every step of the way.",
    stats: [
      { value: "60K+", label: "Learners" },
      { value: "400+", label: "Partners" },
      { value: "48h", label: "Response" },
    ],
  },
  getInTouch: {
    title: "Get in Touch",
    description:
      "Have questions or feedback? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.",
  },
};
