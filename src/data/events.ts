import type { Event } from "@/lib/types";
import { cdnUrl } from "@/services/cdn";

export const events: {
  recurringEvents: {
    weekly: Event[];
  };
} = {
  recurringEvents: {
    weekly: [
      {
        title: "Office Hour",
        description:
          "A space where µLearn members connect, learn, and grow together. Office Hour is our community-driven learning zone — a place to ask questions, share progress, explore ideas, and get guidance from peers and mentors. Whether you're building projects, seeking clarity, or sharing what you’ve learned, Office Hour brings everyone together to empower growth, collaboration, and continuous learning.",
        link: "/events/office-hour",
      },
      {
        title: "Inspiration Station Radio",
        description:
          "Everyone has a story to tell, the story about finding their passion, the story of learning new things and much more. Often times these stories are filled with fun and inspirations which fuel others to start their own journey.",
        link: "/events/inspiration-station",
      },
      {
        title: "Salt Mango Tree",
        description:
          "English! English! English! I avoid I don't like it, but English likes me, I can't avoid! Well since avoiding English isn't an option, let's try to work towards improving our knowledge of English, by practicing, together.",
        link: "/events/salt-mango-tree",
      },
      {
        title: "Grab Your Superpowers",
        description:
          "Weekly sessions to help you unlock new skills and superpowers, guided by mentors and practitioners from across campuses. Each session dives into a fresh topic — from technical deep-dives to career hacks — packed with hands-on activities, real-world examples, and interactive discussions so you walk away with something you can use right away.",
        link: "/events/grab-your-superpowers",
      },
    ],
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
