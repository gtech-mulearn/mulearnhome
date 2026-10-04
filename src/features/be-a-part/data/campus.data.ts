import { Calendar, Clock, PartyPopper, Sparkle, Target, Trophy, Users, Zap } from "lucide-react";

export const campusChapter = {
  journey: [
    { title: "Interest Form", desc: "Express interest in creating a chapter" },
    { title: "Orientation", desc: "Attend induction session" },
    { title: "Core Team Selection", desc: "Form the initial team" },
    {
      title: "Official Onboarding",
      desc: "Complete Mutate leadership training",
    },
    { title: "Kick-off Event", desc: "Launch with intro meetup" },
    { title: "Sustain & Scale", desc: "Regular challenges and circles" },
    { title: "Review & Recognition", desc: "Get spotlighted for impact" },
  ],
  activity: [
    {
      icon: Calendar,
      title: "Weekly",
      desc: "Learning Circles",
      detail: "1-hour peer sessions",
    },
    {
      icon: Clock,
      title: "Monthly",
      desc: "Skill Challenges",
      detail: "Proof-of-work submissions",
    },
    {
      icon: Zap,
      title: "Quarterly",
      desc: "Innovation Sprints",
      detail: "Mini-In50Hours events",
    },
    {
      icon: PartyPopper,
      title: "Annual",
      desc: "Flagship Events",
      detail: "Permute, Mutate, Amuse",
    },
  ],
  bestpractices: [
    { icon: Users, title: "Peer-Driven", desc: "Students teach students" },
    {
      icon: Zap,
      title: "Proof-of-Work",
      desc: "GitHub repos, portfolios, demos",
    },
    {
      icon: Target,
      title: "Gamify Growth",
      desc: "Karma Points & leaderboards",
    },
    {
      icon: Sparkle,
      title: "Mini Communities",
      desc: "Interest groups within chapters",
    },
    {
      icon: Trophy,
      title: "Celebrate Wins",
      desc: "Weekly circles matter as much as big events",
    },
  ],
  structure: [
    {
      label: "Core Team",
      value: "5–10 students",
      desc: "Trained through Mutate",
    },
    { label: "Faculty Mentor", value: "1 Anchor", desc: "Ensures continuity" },
    {
      label: "Learning Circles",
      value: "Domain-focused",
      desc: "AI, Web, Design, etc.",
    },
    {
      label: "Campus Lead",
      value: "1 Coordinator",
      desc: "Links to Foundation",
    },
  ],
};
