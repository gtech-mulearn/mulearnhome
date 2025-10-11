import { cdnUrl } from "@/services/cdn";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Event, Role, RolesContent } from "@/lib/types";

export const navItems = [
  {
    label: "About",
    submenu: {
      "KEY PAGES": [
        { label: "MANIFESTO", href: "/manifesto" },
        { label: "TEAM", href: "/team" },
        { label: "ENABLERS", href: "/enablers" },
      ],
      Partners: [
        { label: "COMMUNITY PARTNERS", href: "/community-partners" },
        { label: "COMPANY PARTNERS", href: "/company-partners" },
      ],
      EVENTS: [
        { label: "GLOBAL CALENDAR", href: "/events/calendar" },
        // { label: "ANNOUNCEMENTS", href: "/events/announcements" },
        { label: "ALL EVENTS", href: "/events" },
      ],
      Programs: [
        { label: "LAUNCHPAD", href: "https://launchpadkerala.org/" },
        { label: "PERMUTE", href: "https://permute.mulearn.org/" },
        { label: "TOP100SERIES", href: "https://top100coders.com/" },
        { label: "ART OF TEACHING", href: "/artofteaching" },
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
    href: "https://app.mulearn.org/dashboard/search?activetab=mentors",
    submenu: null,
  },
  {
    label: "Learning",
    href: "https://app.mulearn.org/dashboard/learningcircle",
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
    description: "Join 60,000+ learners & innovators.",
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

export const communityPartners = [
  {
    name: "ASAP",
    image: "src/modules/Public/CommPartners/assets/partners/asap.webp",
    link: "https://asapkerala.gov.in/",
  },

  {
    name: "Kerala Startup Mission",
    image: "src/modules/Public/CommPartners/assets/partners/ksum.webp",
    link: "https://startupmission.kerala.gov.in/",
    // customlink: "/community-partners/iedc",
    customlink: "",
  },

  {
    name: "Blockchain",
    image: "src/modules/Public/CommPartners/assets/partners/blockchain.webp",
    link: "https://kba.ai/",
    customlink: "",
  },

  {
    name: "Foxlabs",
    image: "src/modules/Public/CommPartners/assets/partners/foxlab.webp",
    link: "https://mulearn.org/community-partners/foxlab",
    // customlink: "/community-partners/foxlab",
  },
  {
    name: "Institute of Electrical and Electronics Engineers",
    image: "src/modules/Public/CommPartners/assets/partners/ieee.webp",
    link: "https://www.ieee.org/",
    customlink: "",
  },
  {
    name: "Kites Foundation",
    image: "src/modules/Public/CommPartners/assets/partners/kites.webp",
    link: "https://kitesfoundation.org/",
    customlink: "",
  },
  {
    name: "Pygrammers",
    image: "src/modules/Public/CommPartners/assets/partners/pygrammers.webp",
    link: "https://pygrammers.org/",
    customlink: "",
  },
  {
    name: "XtrudAR",
    image: "src/modules/Public/CommPartners/assets/partners/xtrudar.webp",
    link: "https://xtrudar.riglabs.co/",
    customlink: "",
  },
  {
    name: "Kerala Development and Innovation Strategic Council",
    image: "src/modules/Public/CommPartners/assets/partners/kdisc.webp",
    link: "https://kdisc.kerala.gov.in/",
  },
  {
    name: "Ether India",
    image: "src/modules/Public/CommPartners/assets/partners/ether_logo.webp",
    link: "https://etherindia.org/",
  },
  {
    name: "Kuttycoders",
    image: "src/modules/Public/CommPartners/assets/partners/kuttycoders.webp",
    link: "https://kuttycoders.in/",
  },
  {
    name: "Google Educators",
    image:
      "src/modules/Public/CommPartners/assets/partners/google_android.webp",
    link: "https://developer.android.com/teach",
  },
  {
    name: "Google Developer Students Club",
    image: "src/modules/Public/CommPartners/assets/partners/gdsc.webp",
    link: "https://gdg.community-partners.dev/",
  },
  {
    name: "ICFOSS",
    image: "src/modules/Public/CommPartners/assets/partners/icfoss.webp",
    link: "https://icfoss.in/",
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

export const termsAndConditions = {
  title: "TERMS OF SERVICES",
  lastUpdated: "September 2025",
  introduction: `These Terms of Services (“Terms” or “Agreement”) shall apply to use of μLearn platform (“μLearn” or “We” or “us”). By becoming a registered user of µLearn platform and by clicking the "I Accept" button on this registration page, and by using the relevant Training, you acknowledge that you have read and understood this Terms of Services and you agree to be bound by all of the terms and conditions of this Agreement.`,
  sections: [
    {
      heading: "Definitions",
      content: "",
      subsections: [
        "Confidential Information means information provided by one party to the other including in written, graphic, recorded, machine readable or other form concerning the business, clients, suppliers, finances and other areas of the disclosing party's business or products, but does not include information in the public domain other than through the default of the party disclosing the information, information required to be disclosed by any court or regulatory authority, or any information already in the possession or control of the disclosing party.",
        "Intellectual Property Rights means and includes patents, trademarks, service marks, trade names, designs, copyrights, rights of privacy and publicity and other forms of intellectual or industrial property, know how, trade secrets, any other protected rights or assets and any licenses and permissions in connection therewith, in each and every part of the world and whether or not registered or registrable and for the full period thereof, and all extensions and renewals thereof, and all applications for registration in connection with the foregoing.",
        "Representative means any director, officer, employee, agent or professional advisor of μLearn.",
        "Services means the services more particularly described in Clause 2 of these Terms.",
        "Training or Training Material(s) means the orientation programs, webinars, training or training materials provided by µLearn from time to time in the course of the delivery of our Services.",
        "Website means https://mulearn.org/ owned and maintained by μLearn.",
        "You or you or your or yourself refers to the individual/user who uses the Services.",
      ],
    },
    {
      heading: "Services",
      subsections: [
        "A description of our Services together with the Playbook are available on our Website. We provide several Training Materials in accordance with their description on the Website. We do not make any commitment that you will obtain a particular result, qualification, or employment opportunity from using the Services.",
        "The Services and the Training Materials are provided solely for your personal and non-commercial use. You may not use, download, or print them for commercial purposes without written consent. We reserve the right to vary or withdraw any Services without notice.",
      ],
    },
    {
      heading: "Password Use and Security",
      subsections: [
        "Your account in the µLearn platform is for your exclusive use only. Sharing of your username and password is not permitted and may result in immediate termination.",
        "You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must notify us immediately of unauthorized use or security breaches.",
        "µLearn is not liable for any misuse or unauthorized access due to your failure to maintain account security.",
      ],
    },
    {
      heading: "License Grant and Proprietary Rights",
      subsections: [
        "µLearn grants you a limited, non-transferable, non-exclusive, revocable license to use the platform and software for completing the Services.",
        "All Intellectual Property Rights in the Training Materials remain the property of µLearn or its licensors.",
        "You may not copy, reproduce, distribute, or modify the Training Materials without written permission.",
        "You are permitted to download or print portions of the Training solely for personal, non-commercial use with proper attribution.",
        "Any breach will result in immediate termination of access and may result in legal action.",
      ],
    },
    {
      heading: "Code of Conduct",
      subsections: [
        "Be kind, respectful, inclusive, and supportive in all communications.",
        "No spamming, trolling, or advertising in chats or DMs.",
        "No harassment, personal attacks, or doxxing.",
        "Do not post malicious, obscene, or inappropriate content.",
        "Use channels properly as directed by µLearn representatives.",
        "Violations may result in suspension or revocation of access. Moderators’ decisions are final.",
      ],
    },
    {
      heading: "Liability",
      subsections: [
        "Neither party shall be liable for indirect, consequential, or punitive damages arising out of these Terms.",
        "µLearn and its representatives accept no liability for inaccuracies, data loss, or loss of profit.",
        "You agree to indemnify µLearn against any third-party claims resulting from your actions.",
      ],
    },
    {
      heading: "Disclaimer",
      subsections: [
        "The Website and its content are provided 'as is' without warranties of any kind.",
        "µLearn does not guarantee uninterrupted or error-free operation of the platform.",
        "All Training Materials are for educational purposes only.",
        "µLearn is not responsible for misuse or for any third-party content linked to the Website.",
      ],
    },
    {
      heading: "Confidentiality",
      subsections: [
        "Each party agrees to protect the other’s Confidential Information and use it only for purposes under these Terms.",
        "Disclosure is limited to authorized personnel under confidentiality obligations.",
        "On request, Confidential Information must be destroyed or returned.",
        "These obligations survive termination of this Agreement.",
      ],
    },
    {
      heading: "Termination",
      subsections: [
        "µLearn may terminate your access immediately for misconduct, plagiarism, fraud, or breach of Terms.",
        "We reserve the right to monitor IP addresses and terminate access for violations.",
        "Clauses on Intellectual Property, Liability, and Confidentiality survive termination.",
      ],
    },
    {
      heading: "Privacy Policy",
      subsections: ["Please refer to our Privacy Policy for more details."],
    },
    {
      heading: "Indemnification",
      subsections: [
        "You agree to indemnify, defend and hold μLearn, its affiliates, its content providers and their Representatives harmless from and against any and all claims, liability, losses, damages, costs and expenses (including reasonable legal fees on a solicitor and client basis) incurred by us as a result of or in connection with any breach or alleged breach by you or anyone acting on your behalf of any of these Terms.",
      ],
    },
    {
      heading: "Force Majeure",
      subsections: [
        "Neither Party shall be liable for delays in performance when caused by any of the following, which are beyond the reasonable control of the delayed Party: Acts of God, Acts of the public enemy, acts or failure to act by the other Party, acts of civil or military authority, governmental priorities, strikes or other labour disturbances, hurricanes, earthquakes, fires, floods, epidemics, embargoes, war, riots. In the event of any such delay, the date of delivery or of performance shall be extended for a period equal to the effect of time lost by reason of the delay.",
      ],
    },
    {
      heading: "Amendment",
      subsections: [
        "We may update or amend these Terms from time to time to comply with law or to meet its changing business requirements or to correct any errors without notice to you. Any updates or amendments will be posted on the Website. If there is any conflict between these Terms, any applicable Additional Terms and the Terms and Conditions of Website Use, the conflict shall be resolved according to the following order of priority: (i) the Additional Terms; (ii) the Terms; and (iii) the Terms and Conditions of Website Use.",
      ],
    },
    {
      heading: "General Terms",
      subsections: [
        "These Terms together with the Website Disclaimer constitutes the entire agreement between the parties on the subject matter hereof, and supersedes all prior or contemporaneous written or verbal agreements and understandings with you in connection therewith. If any provision of these Terms is held by a court of competent jurisdiction to be invalid, void or unenforceable, the remaining provisions shall, nevertheless, continue in full force and effect without being impaired or invalidated in any way.",
      ],
    },
    {
      heading: "Governing Law & Jurisdiction",
      subsections: [
        "These Terms shall be governed by and construed in accordance with Indian law and courts at Trivandrum shall have exclusive jurisdiction with respect of any dispute or other action arising as a result of, in relation to or regarding these Terms to the exclusion of any other court that may have jurisdiction in the matter.",
      ],
    },
    {
      heading: "Contact Information",
      subsections: [
        "If you have any comments, questions or concerns about any of the information in this Agreement, or any other issues relating to the Processing of Personal Data carried out by us, or on our behalf, you can contact us by any of the following methods:",
        "Email: mulearnadmin@gtechindia.org",
        "Postal Address: Technopark Trivandrum, Kazhakkoottam, Trivandrum - 695581, Kerala, India",
        "Telephone: +91 99957 10101",
      ],
    },
    {
      heading: "Cookies and Similar Technologies",
      subsections: [
        "We may Process your Personal Data by placing or reading Cookies and similar technologies. For more information, please see our Cookie Policy. When you visit our Website we may place Cookies onto your device, or read Cookies already on your device, subject always to obtaining your consent, where required, in accordance with Applicable Law. We use Cookies to record information about your device, your browser and in some cases, your preferences and browsing habits. We may process your Personal Data through Cookies and similar technologies, in accordance with our Cookie Policy and Privacy Policy.",
      ],
    },
    {
      heading: "Terms of Service",
      subsections: [
        "Please use English language for all official communications. Should you have any questions regarding these Terms, please feel free to reach out to mulearnadmin@gtechindia.org.",
        "All use of our Website(s), or our Services is subject to these Terms. We recommend that you review our Terms of Use regularly, in order to review any changes we might make from time to time. Any changes to this Agreement will be posted on the Website and will become effective and be binding on you immediately upon posting in our Website. µLearn may also change the terms by notifying you by any other reasonable form of notification, effective immediately upon notice being provided. Your continued use of the µLearn platform constitutes your acceptance of those changes.",
      ],
    },
  ],
};


export const in50hrs = {
  features: [
    {
      title: "PITCH",
      titleSpan: "IT",
      description:
        "Pitch your boldest ideas and captivate them all in just minutes.",
    },
    {
      title: "PROTOTYPE",
      titleSpan: "TO",
      description:
        "Dive into the hustle and bustle of collaboration as teams form and dive headfirst into building their prototypes.",
    },
    {
      title: "GET FUNDED",
      titleSpan: "GET",
      description:
        "Pitch your boldest ideas and captivate them all in just minutes.",
    },
  ],
  steps: [
    {
      step: "STEP 1",
      stepSpan: "1",
      description:
        "Collect your coupons, go to the In-50hr-Challenge and type /get-in50hours-coupon to get your coupon code.",
    },
    {
      step: "STEP 2",
      stepSpan: "2",
      description:
        "Go to MakeMyPass.com and register for the event using the coupon code. In case you are not in level 5, you can pay and register.",
    },
    {
      step: "STEP 3",
      stepSpan: "3",
      description:
        "You will receive a confirmation mail having the ticket for joining the event on the 23rd of February.",
    },
  ],
};

export const events: {
  latestEvents: Event[];
  recurringEvents: {
    weekly: Event[];
    biweekly: Event[];
    monthly: Event[];
    flagship: Event[];
  };
} = {
  latestEvents: [
    {
      title: "Hacktoberfest 2025",
      date: "Oct 1-31, 2025",
      description:
        "Hacktoberfest 2025 is a month-long open-source celebration where developers across the globe contribute to projects, improve software, and earn a digital badge.",
    },
  ],
  recurringEvents: {
    flagship: [],
    weekly: [
      {
        title: "Inspiration Station Radio",
        description:
          "Everyone has a story to tell, the story about finding their passion, the story of learning new things and much more. Often times these stories are filled with fun and inspirations which fuel others to start their own journey.",
        link: "/isr",
        date: "Every Tuesday",
      },
      {
        title: "Open Mic",
        description:
          "Already too exhausted by your weekly chores? Insert Open Mic 🎤 into the equation and your week becomes much more fun! The event aims to provide members an open stage to exhibit their skills and talents to the community.",
        link: "/events/openmic",
        date: "Every Thursday",
      },
      {
        title: "µLearn Mentor Connect",
        description:
          "GTech μLearn presents Mentor Connect 👨🏽‍🏫, an original initiative as part of Weekly Twitch. This initiative will give members an opportunity to interact, learn, and explore their interests with mentors from the Industry.",
        link: "/events/mentorconnect",
        date: "Every Friday",
      },
      {
        title: "Salt Mango Tree",
        description:
          "English! English! English! I avoid I don't like it, but English likes me, I can't avoid! Well since avoiding English isn't an option, let's try to work towards improving our knowledge of English, by practicing, together.",
        link: "/events/saltmangotree",
        date: "Every Wednesday",
      },
    ],
    biweekly: [],
    monthly: [],
  },
};

export const enablers = {
  benefits: [
    {
      title: "Industry Immersion Programs",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Benefits1.webp"),
      items: [
        {
          text: "Offering short-term industry internships to stay connected with current practices and emerging technologies.",
        },
        {
          text: "TA's and presenters can be moved to the front of the class.",
        },
      ],
    },
    {
      title: "Up-Skill Programs",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Benefits2.webp"),
      items: [
        {
          text: "Providing a platform for enablers to gain insights from industry mentors.",
        },
        {
          text: "Enablers can enhance their skills and stay updated with emerging technologies.",
        },
        {
          text: "Workshops focused on technology, no-code solutions, Git, GitHub, and open-source programs.",
        },
      ],
    },
    {
      title: "Meet-ups",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Benefits3.webp"),
      items: [
        {
          text: "Enabler meet-ups with industry and peers offer statewide networking opportunities.",
        },
        {
          text: "Monthly District Meetups: Virtual/Offline events to track progress and engagement.",
        },
        {
          text: "Zonal Meetups: Organized offline events by zonal heads once every 3 months.",
        },
      ],
    },
  ],

  programs: [
    {
      title: "Learning Fest For Enablers",
      description:
        "Are you passionate about helping others reach their full potential? 👀 Join us at Learning Fest, where you can enhance your skills as a mentor 💫 Explore new teaching techniques, network with fellow enablers, and help shape the future of education",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Project1.webp"),
      link: "http://mulearn.org/r/enablers-learningfest",
      cta: "Enroll Now",
    },
    {
      title: "Art of Teaching - Teach Contest",
      description:
        "Art of Teaching is an annual event that spotlights enablers' teaching talents. They can showcase their skills through videos, simplifying concepts for students. In the last edition, we received 150+ video entries and rewarded winners with cash prizes.",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Project2.webp"),
      link: "https://mulearn.org/artofteaching",
      cta: "Know More",
    },
  ],

  onboarding: [
    {
      number: "01",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Mu.webp"),
      title: "Create µLearn Profile",
      description:
        'Enablers should create a profile via app.mulearn.org, and they should ensure to register as a faculty member by choosing the option "I\'m teaching in an Institute". Once you get a profile, go to "Connect Discord" and join our Discord server.',
      link: "https://app.mulearn.org/",
      linkText: "app.mulearn.org",
    },
    {
      number: "02",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Discord.webp"),
      title: "Welcome to Discord",
      description:
        "Once you join the server, our bot, Aaronchetan will send you a DM asking you to connect your µ-ID, which is provided in the µlearn profile. Once it's connected, you can start your onboarding process.",
      link: "https://discord.gg/3v5GvJ8",
      linkText: "Join Discord",
    },
    {
      number: "03",
      image: cdnUrl("src/modules/Public/EnablersPage/assests/Bulb.webp"),
      title: "Add Interest Groups",
      description:
        "Now you will have access to the #lvl1-info channel, and as you do the tasks, you will progress through the levels. Once you reach level 4, you will have the option to edit Interest Groups on your µlearn profile page.",
      link: "https://app.mulearn.org/",
      linkText: "Explore Interests",
    },
  ],
};
