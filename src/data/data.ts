import { cdnUrl } from "@/services/cdn";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export interface SubItem {
  label: string;
  href: string;
}

export interface Role {
  id: string;
  label: string;
}

export interface RoleItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface RolesContent {
  [key: string]: RoleItem[];
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
        {
          label: "Interest Groups",
          href: "https://app.mulearn.org/dashboard/interestgroups",
        },
        {
          label: "Learning Circle",
          href: "https://app.mulearn.org/dashboard/learningcircle",
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
];

export const features = [
  {
    title: "Community",
    description: "Join 40,000+ learners & innovators.",
    image: cdnUrl(
      "public/assets/landing/College Project Concept Illustration.png"
    ),
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
    image: cdnUrl(
      "public/assets/landing/Content Team Concept Illustration.png"
    ),
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
    icon: cdnUrl(
      "public/assets/landing/College Project Concept Illustration.png"
    ),
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
  // { id: 'enabler', label: 'Enabler' }
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
      image: cdnUrl("public/assets/roles_images/skill-development.svg"),
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
      image: cdnUrl("public/assets/roles_images/learning.svg"),
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
      image: cdnUrl("public/assets/roles_images/networking.svg"),
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
      image: cdnUrl("public/assets/roles_images/collaboration.svg"),
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
      image:
        "https://img.freepik.com/free-vector/digital-transformation_23-2148804417.jpg",
    },
    {
      id: 2,
      name: "Skill Bridging",
      description:
        "Bridge the gap between academic learning and industry demands by providing practical, hands-on training modules.",
      image:
        "https://img.freepik.com/free-vector/technology-innovation_23-2148812878.jpg",
    },
    {
      id: 3,
      name: "Innovative Platforms",
      description:
        "Deploy innovative platforms that support creative learning, foster collaboration, and drive digital transformation.",
      image:
        "https://img.freepik.com/free-vector/businessman-using-digital-tablet_74855-6340.jpg",
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

export const footer = [
  {
    title: "Quick Links",
    links: [
      { title: "Blog", url: "https://gtechmulearn.medium.com/" },
      { title: "Team", url: "/team" },
      { title: "Career Labs", url: "https://mulearn.org/careers" },
      {
        title: "Interest Groups",
        url: "https://app.mulearn.org/dashboard/interestgroups",
      },
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

export const privacyPolicy = {
  title: "PRIVACY POLICY",
  lastUpdated: "September 2025",
  introduction: `This Policy is issued by µLearn, which includes its parent, subsidiaries and affiliates (together, "µLearn", or <strong>"We"</strong> or <strong>"us"</strong> or <strong>"our(s)"</strong>) and is addressed to individuals outside our organisation with whom we interact, including but not limited to customers, visitors to our websites, offices and other users (together, <strong>"You"</strong>) of our Services. By registering to µLearn platform, you are implicitly consenting to have your profile registered for e-learning, reporting purposes and helping µLearn improve the research quality.

You are hereby agreed that the data you are freely deciding to share is intended to keep your profile up to date and complete. This data will be processed in order to manage our e-learning process and offer you more visibility and accessibility to opportunities which will match with your profile.

You agree that while creating a profile, it implies a transfer of your profile data to µLearn entities located across Kerala. The protection of your data is assured by our internal Information Security, and is processed with your consent and for the legitimate interest of µLearn Group.`,
  sections: [
    {
      heading: "Use of Information",
      content:
        "We use your information to provide, analyse, administer, enhance and personalize our Services and marketing efforts, to process your registration, and to communicate with you on these and other topics.",
      subsections: [
        "We use your information in order to resolve disputes; troubleshoot problems; help promote safe matching; measure consumer interest in Services; inform you about Offers, Products, Services, and Updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our Terms of Services (TOS); and as otherwise described to you at the time of registration. We may compare and review your Information for errors, omissions and for accuracy.",
        "We use your e-mail to send you system e-mails about the functionality of our Website.",
        "We use your e-mail associated with your account in order to send you newsletters and promotions in conjunction with your use of our Services.",
        "We may use your Information in order to provide benchmark analysis and aggregate statistics. This particular Information will be anonymized, will not contain personal identification and will not be transferred or sold to third parties in any way or format that identifies you.",
        "We use Website navigation data to operate and improve our Website. We may also use Website navigation data alone or in combination with your Information to provide aggregated information about µLearn.",
        "We collect the IP Addresses to track when you use our Website. We use IP Addresses to monitor the regions from which you navigate our Website and sign-up to use our Services. Your IP Address is also registered for statistical purposes and to better our advertising and layout of the Website.",
        "We do not transfer, sell or rent your Information to third parties for their marketing purposes other than what is stated in this Privacy Policy. We request only the information that we need to operate our Services and improve our Website's user experience. We do not use your Information to create any advertising creative.",
      ],
    },
    {
      heading: "Protection of Information",
      content:
        "We use reasonable administrative, logical, physical and managerial measures to safeguard your personal information against loss, theft and unauthorised access, use and modification. These measures are designed to provide a level of security appropriate to the risks of processing your personal information.",
      subsections: [
        "All our employees, independent contractors and agents have executed non-disclosure agreements, which provide explicit confidentiality protections.",
        "We do not make any of your Information available to third parties for their marketing purposes. µLearn's software may runs on individual servers and no data given or collected is shared with other social media platforms.",
        "We use robust security measures to protect data from unauthorized access, maintain data accuracy, and help ensure the appropriate use of data. When the Services are accessed using the internet, Secure Socket Layer (SSL) technology protects your Information, using both server authentication and data encryption. These technologies help ensure that your Information is safe, secure, and only available to you and to whom you have granted access.",
        "µLearn does its utmost to secure communications and data storage in order to protect confidentiality of your Information against loss and interception by third parties. However, it is important to know that there is no zero-risk element against loss or interception by others of your Information.",
      ],
    },
    {
      heading: "Storage of Information",
      content: `We save your Information in our database in order to improve our Website and user experience and in accordance with our TOS. If you wish that your Information be permanently deleted from our database when you stop using our Services, please notify us at mulearnadmin@gtechindia.org

µLearn is an Indian company. If you are located outside India and choose to provide information to us, µLearn transfers your Information to our servers in India. India may not have the same data protection laws as the country in which you initially provided the Information. Therefore while we transfer your Information to India, we will protect it as described in this Privacy Policy.

By visiting our Website or providing µLearn with your Information, you fully understand and unambiguously consent to this transfer, processing and storage of your Information in India.`,
      subsections: [],
    },
    {
      heading: "Data Retention",
      content:
        "We retain your Personal Data for as long as is required to fulfil the activities set out in this Privacy Policy, for as long as otherwise communicated to you or for as long as is permitted by Applicable Law.",
      subsections: [],
    },
    {
      heading: "Your legal rights",
      content:
        "Under Applicable Law, you may have a number of rights, including: the right not to provide your Personal Data to us; the right of access to your Personal Data; the right to request rectification of inaccuracies; the right to request the erasure, or restriction of Processing, of your Personal Data; the right to object to the Processing of your Personal Data; the right to have your Personal Data transferred to another Controller; the right to withdraw consent; and the right to lodge complaints with Data Protection Authorities. We may require proof of your identity before we can give effect to these rights.",
      subsections: [],
    },
    {
      heading: "Other websites",
      content:
        "µLearn's Website may contain links to sites operated by third parties whose policies regarding the handling of information may differ from ours. These websites and platforms have separate and independent privacy or data policies, privacy statements, notices and terms of use, which we recommend you read carefully. In addition, you may encounter third party applications that interact with µLearn's Services.",
      subsections: [],
    },
    {
      heading: "Applicable Law",
      content:
        "The validity and interpretation of this Privacy Policy shall be governed by the laws of the India.",
      subsections: [],
    },
    {
      heading: "Changes to this Privacy Policy",
      content:
        "This Policy may be amended or updated from time to time to reflect changes in our practices with respect to the Processing of Personal Data, or changes in Applicable Law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make in accordance with the terms of this Policy.",
      subsections: [],
    },
  ],
};
