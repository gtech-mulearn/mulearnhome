import { HeartHandshake, Layers, Target, Trophy, Users, Zap } from "lucide-react";

export const campusChapter = {
  journey: [
    { title: "Interest Form", description: "Express interest in creating a chapter" },
    { title: "Orientation", description: "Attend the induction session" },
    { title: "Core Team Selection", description: "Form the initial team" },
    { title: "Official Onboarding", description: "Complete Mutate leadership training" },
    { title: "Kick-off Event", description: "Launch with an intro meetup" },
    { title: "Sustain & Scale", description: "Run regular challenges and learning circles" },
    { title: "Review & Recognition", description: "Get spotlighted for your impact" },
  ],
  activity: [
    {
      icon: Users,
      cadence: "Weekly",
      title: "Learning Circles",
      description: "One-hour peer sessions around a shared domain.",
    },
    {
      icon: Target,
      cadence: "Monthly",
      title: "Skill Challenges",
      description: "Proof-of-work submissions that earn karma.",
    },
    {
      icon: Zap,
      cadence: "Quarterly",
      title: "Innovation Sprints",
      description: "Mini In50Hours build events on campus.",
    },
    {
      icon: Trophy,
      cadence: "Annual",
      title: "Flagship Events",
      description: "Permute, Mutate and Amuse across the network.",
    },
  ],
  bestpractices: [
    { icon: Users, title: "Peer-Driven", description: "Students teach students" },
    { icon: Zap, title: "Proof-of-Work", description: "GitHub repos, portfolios, demos" },
    { icon: Target, title: "Gamify Growth", description: "Karma Points and leaderboards" },
    { icon: Layers, title: "Mini Communities", description: "Interest groups within chapters" },
    {
      icon: HeartHandshake,
      title: "Celebrate Wins",
      description: "Weekly circles matter as much as big events",
    },
  ],
  structure: [
    { value: "5–10", label: "Core Team", description: "Students trained through Mutate" },
    { value: "1", label: "Faculty Mentor", description: "An anchor who ensures continuity" },
    { value: "1", label: "Campus Lead", description: "Coordinator linked to the Foundation" },
    { value: "Any", label: "Learning Circles", description: "Domain-focused: AI, Web, Design…" },
  ],
};
