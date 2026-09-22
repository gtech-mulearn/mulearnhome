import {
  Award,
  BookOpen,
  Box,
  Briefcase,
  Globe,
  GraduationCap,
  LineChart,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { OnboardingStep } from "../types/learners.types";

export const onboardingSteps: OnboardingStep[] = [
  {
    step: 1,
    title: "Create your µLearn account",
    description: "Sign up in minutes and get access to the community.",
    iconUrl: "/assets/learners/icons/mu-icon.svg",
  },
  {
    step: 2,
    title: "Choose an interested group",
    description: "Join a guild that matches your skills and goals.",
    iconUrl: "/assets/learners/icons/discord-icon.svg",
  },
  {
    step: 3,
    title: "Start engaging & earn karma",
    description: "Complete tasks, collaborate, and grow your karma points.",
    iconUrl: "/assets/learners/icons/bulb-icon.svg",
  },
];

export const benefits = [
  { icon: BookOpen, title: "A space to access curated resources" },
  { icon: Target, title: "Guidance to practice skills through tasks" },
  { icon: Users, title: "A community that supports consistent learning" },
  { icon: Award, title: "Mentorship from professionals at top companies" },
  { icon: Briefcase, title: "Real-world practice opportunities" },
  {
    icon: TrendingUp,
    title: "A proof-of-work-based learning system that makes your growth visible",
  },
];

export const whyKarma = [
  {
    icon: TrendingUp,
    title: "Shows real progress",
    description: "Karma grows only when you take action, making it a true reflection of your work.",
  },
  {
    icon: Box,
    title: "Builds consistency",
    description: "Regular earning helps you stay active and develop strong learning habits.",
  },
  {
    icon: Globe,
    title: "Improves visibility",
    description: "Active learners stand out in guilds and the wider community.",
  },
  {
    icon: Zap,
    title: "Highlights engagement",
    description: "Karma increases when you participate, contribute and collaborate.",
  },
  {
    icon: LineChart,
    title: "Proof of growth",
    description:
      "Karma acts as a visible proof-of-work, showing your dedication and skill development.",
  },
];

export const obtainables = [
  {
    icon: GraduationCap,
    title: "Structured Learning Paths",
    description: "Guided tracks that take you from beginner to confident explorer.",
  },
  {
    icon: Target,
    title: "Real Projects",
    description: "Create meaningful work that becomes part of your portfolio.",
  },
  {
    icon: Trophy,
    title: "Karma Points",
    description: "Visible proof of your consistency, progress, and effort.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Peers, mentors, and industry visitors who help you grow.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Challenges, workshops, and tracks that help you apply your skills beyond the learning space.",
  },
  {
    icon: Briefcase,
    title: "Career Exposure",
    description:
      "Connect with companies, take part in hiring challenges, and mentorship from top MNCs.",
  },
];
