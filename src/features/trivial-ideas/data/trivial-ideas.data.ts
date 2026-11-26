import {
  Gauge,
  Gem,
  Layers,
  Lightbulb,
  PartyPopper,
  Repeat,
  Shapes,
  Sparkle,
  Telescope,
  Trophy,
  Unlock,
} from "lucide-react";

export const tiStats = [
  { value: "₹1 Lakh", label: "Monthly prize pool", description: "Shared by the best builds" },
  { value: 12, label: "Cycles a year", description: "A new challenge every month" },
  { value: "₹12 Lakhs", label: "Annual prizes", description: "Across all twelve months" },
  { value: "Zero", label: "Entry barriers", description: "Open to every µLearn member" },
];

export const tiTraits = [
  {
    icon: Lightbulb,
    title: "Small",
    description: "A tiny tool, a weekend hack or a quick experiment. Size doesn't decide worth.",
  },
  {
    icon: Shapes,
    title: "Unconventional",
    description: "Ideas that don't fit a syllabus, a hackathon theme or a job description.",
  },
  {
    icon: Sparkle,
    title: "Creative",
    description: "Builds made for the fun of it, where the freedom feels total.",
  },
];

export const tiSteps = [
  {
    title: "A new cycle opens",
    description: "Every month a fresh Trivial Ideas cycle kicks off for all µLearn members.",
  },
  {
    title: "Build your idea",
    description: "Pick anything that excites you. Any domain, any format, however small.",
  },
  {
    title: "Submit your project",
    description: "Share what you built before the cycle closes.",
  },
  {
    title: "Get selected and rewarded",
    description: "The best submissions win from the ₹1 lakh monthly prize pool.",
  },
];

export const tiEligibility = [
  { icon: Gauge, title: "No Karma threshold" },
  { icon: Layers, title: "No level restriction" },
  { icon: Telescope, title: "No domain filter" },
  {
    icon: Unlock,
    title: "Any idea goes",
    description: "However small, however unconventional, this is where it belongs.",
  },
];

export const tiReasons = [
  {
    icon: PartyPopper,
    title: "The joy of building",
    description: "Beyond PoW, Karma and levels: build something small and see it recognised.",
  },
  {
    icon: Repeat,
    title: "Keeps the habit alive",
    description: "Keeps members building between major initiatives.",
  },
  {
    icon: Gem,
    title: "Surfaces hidden talent",
    description: "Brings unexpected builders and ideas into the spotlight.",
  },
  {
    icon: Trophy,
    title: "Rewards consistency",
    description: "Showing up every month with something real gets noticed.",
  },
];
