import type { Event } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";

export const events: {
  latestEvents: Event[];
  pastEvents: Event[];
  recurringEvents: {
    weekly: Event[];
    biweekly: Event[];
    monthly: Event[];
  };
} = {
  latestEvents: [
    {
      title: "μFIFA",
      date: "Jun 2026 - Jul 2026",
      description:
        "μFIFA is a six-week innovation movement by μLearn that transforms learning into a collaborative, gamified experience inspired by the FIFA World Cup. Participants join national squads, choose a domain of expertise, and collaborate with peers to solve real-world challenges while representing their team.",
      link: "https://mufifa.mulearn.org",
    },
  ],
  pastEvents: [
    {
      title: "Quantum Tech Matrix",
      date: "Jul 12, 2026",
      description:
        "Quantum Tech Matrix is the launch event of the Quantum Technologies Interest Group (IG), the first of its kind in Kerala. Sponsored by Altos and supported by ChatQLM and nanostuffs, and inaugurated by CP John, Hon Minister for Transport, Government of Kerala. Held at Gokulam Grand, Thiruvananthapuram, Kerala, bringing together students, researchers, faculty, and industry leaders under one roof for keynote sessions, interactive lab simulations, and the unveiling of Kerala's first quantum community.",
      link: "https://quantum-tech-matrix.mulearn.org/",
    },
    {
      title: "NUDGE Studio Design Challenge",
      date: "Nov 2025 - Jan 2026",
      description:
        "The NUDGE Studio Design Challenge is a three-month program using behavioral science to solve real-world problems in finance, farming, and women’s leadership, ending with a showcase at BC2026 and cash prizes for winners.",
      link: "",
    },
    {
      title: "Acsia Hackathon 2025",
      date: "31 Oct - 1 Nov 2025",
      description:
        "Acsia Hackathon 2025 is a 24-hour offline coding marathon happening on October 31 – November 1, 2025, at Acsia Global HQ, Thiruvananthapuram. Open to BTech, MTech, MCA, and MSc students, the event focuses on AI/ML and offers ₹1,00,000 in prizes, internships, and mentorship from industry experts. Registration is free with a HackerRank profile required.",
      link: "https://www.acsiatech.com/news-and-media/acsia-launches-24-hour-ai-ml-hackathon-2025-to-drive-next-generation-innovation/",
    },
    {
      title: "Hacktoberfest 2025",
      date: "Oct 1-31, 2025",
      description:
        "Hacktoberfest 2025 is a month-long open-source celebration where developers across the globe contribute to projects, improve software, and earn a digital badge.",
      link: "https://hacktoberfest.com/",
    },
    {
      title: "CineHack.AI",
      date: "Oct 04 - 06 2025",
      description:
        "CineHack.AI is India’s largest Cinema-AI hackathon happening on October 4–6, 2025, with a prize pool of ₹2.25 lakhs. The event is exclusively for μLearn members, and the first five teams at Level 5 with 10K+ karma points can join for free. Registration closes on September 19, 2025.",
      link: "https://cinehackai.in/",
      isLive: false,
    },
    {
      title: "NASA Space App Challenge 2025",
      date: "July 17 - Oct 05 2025",
      description:
        "The NASA International Space Apps Challenge 2025 is a global, two-day hackathon held on October 4–5, 2025, inviting scientists, technologists, designers, writers and curious minds to collaborate across borders using open data from NASA and its 14 international space agency partners to create actionable solutions under the theme “Learn, Launch, Lead.",
      link: "https://www.spaceappschallenge.org/",
    },
    {
      title: "Hac'KP '25",
      date: "Oct 01 - 04 2025",
      description:
        "The Hac’KP 2025 is an international online hackathon organised by Kerala Police Cyberdome as part of c0c0n 2025, inviting participants to design and build innovative solutions under the themes of “Prevention First” and “Detect to Defend” to tackle online harm and child exploitation.",
      link: "https://hackp.kerala.gov.in/",

      isLive: false,
    },
    {
      title: "Quantum Computing Challenge",
      date: "Sept 20 - 23 2025",
      description:
        "The Quantum Computing Challenge by μLearn, held from September 20th to 23rd, 2025, was an engaging online event designed to help participants explore the fundamentals of quantum computing. Through short explainer video challenges, students demonstrated their understanding of concepts like quantum gates and the differences between quantum and classical computing. Hosted on Discord, the challenge encouraged creativity, learning, and knowledge sharing, with participants earning up to 800 Karma points for their contributions.",
      link: "",
    },
    {
      title: "3 Day VR Bootcamp",
      date: "Sept 20 - 22 2025",
      description:
        "The 3-Day VR Bootcamp by μLearn was an immersive learning experience held on September 20–22 at 7 PM. Led by Fahad P N, a Unity Certified Educator and CTO of Soft Served Web, the bootcamp covered the fundamentals of VR, hands-on Unity sessions, and project showcases. Participants learned to build and explore in VR through practical sessions, tips, and live demos.",
      link: "",
    },
    {
      title: "CareHack 2025",
      date: "Sept 20 - 22 2025",
      description:
        "CareHack is a dynamic two-phase hackathon presented by CareRevenue in collaboration with the μLearn Foundation, scheduled for August 2nd & 3rd, 2025. This competitive event is designed to identify and recruit exceptional full-stack developers and UI/UX designers through intense, collaborative innovation. Beyond talent acquisition, CareHack aims to amplify CareRevenue's brand presence within the tech ecosystem while evaluating participants on technical expertise, teamwork, communication, and problem-solving abilities.",
      link: "https://carehack.tech/",

      isLive: false,
    },
    {
      title: "Hac'KP Bootcamp",
      date: "Aug 24 - 29 2025",
      description:
        "The Hac'k P Bootcamp, organized by the μLearn Foundation in collaboration with the Silicon Society, was an intensive online program aimed at enhancing participants’ skills in hacking, problem-solving, and real-world project building. Led by Abimel S B Kulumala, Founder of Silicon Society, the bootcamp focused on practical approaches, community-driven innovation, and mindset development for both competitive and collaborative projects.",
      link: "https://hackp.kerala.gov.in/",

      isLive: false,
    },
    {
      title: "30 Days Coding Challenge",
      date: "01 - 30 June 2025",
      description:
        "μLearn, in collaboration with KKEM and hosted by μLearn LBSITW, is launching a 30-Day Coding Challenge from June 1 to 30, 2025. The challenge offers daily coding tasks, exciting rewards, and Karma points to help participants learn, code, and grow every day. Open to both beginners and experienced coders, it’s a great opportunity to build consistency and improve coding skills throughout the month. Participants can join through the provided link to be part of the action.",
      link: "",

      isLive: false,
    },
  ],
  recurringEvents: {
    weekly: [
      {
        title: "Office Hour",
        description:
          "A space where µLearn members connect, learn, and grow together. Office Hour is our community-driven learning zone — a place to ask questions, share progress, explore ideas, and get guidance from peers and mentors. Whether you're building projects, seeking clarity, or sharing what you’ve learned, Office Hour brings everyone together to empower growth, collaboration, and continuous learning.",
        link: "/events/office-hour",
        date: "Daily",
      },
      {
        title: "Inspiration Station Radio",
        description:
          "Everyone has a story to tell, the story about finding their passion, the story of learning new things and much more. Often times these stories are filled with fun and inspirations which fuel others to start their own journey.",
        link: "/events/inspiration-station",
        date: "Every Tuesday",
      },
      {
        title: "Salt Mango Tree",
        description:
          "English! English! English! I avoid I don't like it, but English likes me, I can't avoid! Well since avoiding English isn't an option, let's try to work towards improving our knowledge of English, by practicing, together.",
        link: "/events/salt-mango-tree",
        date: "Every Wednesday",
      },
    ],
    biweekly: [],
    monthly: [],
  },
};

export const in50hrs = {
  features: [
    {
      title: "PITCH",
      titleSpan: "IT",
      description: "Pitch your boldest ideas and captivate them all in just minutes.",
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
      description: "Pitch your boldest ideas and captivate them all in just minutes.",
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

export const artOfTeachingMentors = [
  {
    name: "Dr T M George",
    designation: "Former Principal at Mar Baselios College of Engineering and Technology",
    image: "/public/assets/dpm.webp",
    linkedIn: "https://www.linkedin.com/in/dr-t-m-george-87b86028/?originalSubdomain=in",
  },
  {
    name: "Ann Andrews",
    designation: "Product | Technology & Data Strategy | NYU & Columbia Fellow",
    image: "/public/assets/dpm.webp",
    linkedIn: "https://www.linkedin.com/in/annandrews/",
  },
  {
    name: "Rajeev J Sebastian",
    designation: "CEO Alokin Software Private Limited",
    image: "/public/assets/dpm.webp",
    linkedIn: "https://www.linkedin.com/in/rajeevjs",
  },
];

export const artOfTeachingUrls = {
  mainVideo: "https://www.youtube.com/embed/r5izRx-4j68?si=L9gHSznyZTeCI3b3",
  firstEdition: "vPLuA5kXoBI",
  archives: ["Wmo0StqW9Kc", "TEylubYDzhQ", "jRcseEVk2sk"],
  registerNow: "https://airtable.com/appopz4GXqkTszuJ7/pagmodllXiRWsjhXi/form",
};

export const yip = [
  {
    type: "type1",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/prereg.webp"),
    phaseLabel: "Pre\nRegistration",
    title: "Step One",
    link: "https://yip.kerala.gov.in/yipapp/index.php/Idea2022",
    description:
      "Click Here to go to the Pre-Registration page. Enter all your details in the Pre-Registration Form and Complete the OTP Verification. By Now you would have received an email with login credentials, you can now login with that.",
  },
  {
    type: "type2",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/studentreg.webp"),
    phaseLabel: "Ideator\nRegistration",
    title: "Step Two",
    link: "https://yip.kerala.gov.in/yipapp/index.php/Init/",
    description:
      "Click Here to Login, After Logging in Click the Open the left navbar option and from the options listed there click the Profile Completion option. Fill in all your details correctly and according to the mentioned specifications. Finally Submit the form and click OK.",
  },
  {
    type: "type3",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/yip-voc.webp"),
    phaseLabel: "Voice of\nStakeholder",
    title: "Step Three",
    description:
      "After completing your Profile and submitting it, You can check the left navbar again to find the  Voice of Stakeholder(VOS Module) option. By clicking that you will be directed to the course page where you can complete it. Post it with the hashtag #yip5.0-vos to gain 400 Karma Points",
  },
  {
    type: "type1",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/team.webp"),
    phaseLabel: "Team\nFormation",
    title: "Step Four",
    description:
      "After completing the VOS Course and attending the quiz there. You can form a team consisting of minimum 2 members and maximum 5 members by clicking the Group Formation Button from the left navbar. Only one person from a group is required to form the group while the other members can join it using the team's name and password.",
  },
  {
    type: "type1",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/ideafind.webp"),
    phaseLabel: "Idea\nSubmission",
    title: "Step Five",
    description:
      "After forming a team and finding an idea which suits the given themes, the person who formed the team can submit the idea by going to the Idea Submission Option from his/her Navbar.Post your idea submission certificate with the hashtag #yip5.0-idea to gain 800 Karma Points. You could submit upto 2 ideas per person.",
  },
  {
    type: "type2",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/approved.webp"),
    phaseLabel: "Institutional\nApproval",
    title: "Step Six",
    description:
      "After the submission of the idea, it requires the approval of the respective Institution and you may contact the concerned authority for the approval of your idea.",
  },
  {
    type: "type3",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/evaluation.webp"),
    phaseLabel: "Preliminary\nEvaluation",
    title: "Step Seven",
    description:
      "Once your Idea is approved by the institution, it is put forward for a preliminary evaluation and teams are selected from District Level and State Level and are awarded prizes.",
  },
  {
    type: "type1",
    icon: cdnUrl("src/modules/Public/yip/assets/procedure/winner%20annoucement.webp"),
    phaseLabel: "Winner\nAnnouncement",
    title: "Step Eight",
    description:
      "Finally the winners are announced and out of the total teams selected at state level the best of those teams are provided financial and mentoring support to implement their ideas.",
  },
];
