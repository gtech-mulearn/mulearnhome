import {
  BookOpen,
  Box,
  Brain,
  Building2,
  Clapperboard,
  CodeXml,
  Cog,
  Globe,
  GraduationCap,
  Hammer,
  HardHat,
  Landmark,
  type LucideIcon,
  PenTool,
  Rocket,
  School,
} from "lucide-react";

export interface Level {
  number: number;
  title: string;
  /** Two or three words for the at-a-glance overview. */
  summary: string;
  lead: string;
  body?: string[];
  examples?: string[];
  /** Interest-group tribes, shown as chips (level 4). */
  tribes?: { label: string; icon: LucideIcon }[];
  callout?: { label: string; text: string };
}

export const quietDreams: { icon: LucideIcon; title: string }[] = [
  { icon: CodeXml, title: "Maybe they love coding" },
  { icon: PenTool, title: "Maybe they sketch during lectures" },
  { icon: Hammer, title: "Maybe they dream of building things on their own" },
];

export const levels: Level[] = [
  {
    number: 1,
    title: "Who are you, really?",
    summary: "Own your story",
    lead: "The first thing a student is asked to do is introduce themselves: not with their CGPA or ranks, but with a simple statement about who they are.",
    body: [
      "One might write “I’m curious about green buildings”, while another writes “I make short reels in my hostel room.”",
    ],
    callout: {
      label: "The aim",
      text: "No matter who they are or what they aspire to be, the aim of this first task is simple: to break hesitation and help the student own their story.",
    },
  },
  {
    number: 2,
    title: "Breaking your invisible cages",
    summary: "Beat self-doubt",
    lead: "Most students walk into this level with invisible cages.",
    body: [
      "A web development student may think they are not good enough to compete globally, while a comic artist may doubt there is a future for their passion.",
    ],
  },
  {
    number: 3,
    title: "Tools are your new superpowers",
    summary: "Learn the tools",
    lead: "Here the challenge is to learn tools: not theoretically, but practically.",
    body: [
      "A web student learns GitHub, hosting and Figma. At the same time, a film enthusiast may learn editing software or storytelling workflows.",
      "At first the tools may feel overwhelming: there are errors everywhere and nothing seems to work. But soon, students move from being passive learners to active ones.",
    ],
    callout: {
      label: "The ultimate survival",
      text: "They command technology instead of being commanded by it, because in today’s age, tool literacy is the ultimate survival.",
    },
  },
  {
    number: 4,
    title: "Choose your tribe",
    summary: "Join an interest group",
    lead: "At level 4, students enter different interest groups.",
    body: [
      "Some walk with AI, while others choose the web tribe. A few move into film, animation or comics to weave their imagination. Many choose civil, mechanical or space: shaping physical reality and touching the stars.",
    ],
    tribes: [
      { label: "AI", icon: Brain },
      { label: "Web", icon: Globe },
      { label: "Film", icon: Clapperboard },
      { label: "Animation", icon: Box },
      { label: "Comics", icon: BookOpen },
      { label: "Civil", icon: HardHat },
      { label: "Mechanical", icon: Cog },
      { label: "Space", icon: Rocket },
    ],
    callout: {
      label: "No more scattered learning",
      text: "From this point on, learners start building proof of work within their chosen interest group.",
    },
  },
  {
    number: 5,
    title: "The global arena awaits",
    summary: "Compete globally",
    lead: "Hackathons, design competitions, film festivals and global challenges appear.",
    body: [
      "The competition may be intense, but it doesn’t push learners away. Facing global peers raises their bar, sharpens their skills and builds recognition.",
    ],
    examples: [
      "An AI student competes in an LLM hackathon, while a civil learner takes on design challenges.",
      "A project management learner may take part in global case competitions.",
      "No level is exclusive: every interest group has its own battlefield.",
    ],
    callout: {
      label: "The end goal",
      text: "There is only one end goal at level 5: to become contributors, not just participants.",
    },
  },
  {
    number: 6,
    title: "Build. Ship. Impact.",
    summary: "Ship to real users",
    lead: "At this level, learners grow into builders. Instead of making prototypes, they ship them to real users.",
    examples: [
      "A game developer launches their first game, while the AI team builds a mental wellness chatbot.",
      "A civil–mechanical duo prototypes a low-cost water filter for rural areas.",
    ],
    callout: {
      label: "Proof of impact",
      text: "Their paths may be different, but the end goal is the same: proof of work turns into proof of impact, and that is exactly how learners earn their key to the µVerse.",
    },
  },
  {
    number: 7,
    title: "Where talent meets opportunity",
    summary: "Enter the µVerse",
    lead: "At level 7, the path opens to the µVerse. Instead of stopping at skill development, learners are connected to opportunities.",
    examples: [
      "A space science enthusiast may land a fellowship in a CubeSat program.",
      "A film enthusiast may find freelance work with ad agencies.",
    ],
    callout: {
      label: "Talent becomes opportunity",
      text: "Here, talent is converted into opportunities, and learners become global contributors.",
    },
  },
];

export const stakeholders: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: GraduationCap, title: "For students", description: "Personal growth and access." },
  { icon: School, title: "For academia", description: "Alignment with industry." },
  { icon: Building2, title: "For companies", description: "A proof-of-work talent pipeline." },
  {
    icon: Landmark,
    title: "For governments",
    description: "A civic innovation system at youth scale.",
  },
];
