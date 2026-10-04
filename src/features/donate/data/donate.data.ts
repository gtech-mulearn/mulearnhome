import { BookOpen, Home, Server, Users } from "lucide-react";
import type { DonationCategory, DonationTier } from "../types/donate.types";

export const individualOneTimeTiers: DonationTier[] = [
  {
    id: "brick",
    label: "Brick",
    amount: 1500,
    description: "Support a small action that creates big change.",
    icon: "/assets/donate/brick.webp",
  },
  {
    id: "beam",
    label: "Beam",
    amount: 5000,
    description: "Strengthen our community initiatives.",
    icon: "/assets/donate/beam.webp",
  },
  {
    id: "pillar",
    label: "Pillar",
    amount: 7500,
    description: "Help build core infrastructure.",
    icon: "/assets/donate/pillar.webp",
  },
  {
    id: "cornerstone",
    label: "Cornerstone",
    amount: 15000,
    description: "Make a lasting impact on the ecosystem.",
    icon: "/assets/donate/corner-stone.webp",
  },
];

export const individualSubscriptionTiers: DonationTier[] = [
  {
    id: "friend",
    label: "Friend",
    amount: 500,
    description: "Be a friend of the µLearn movement.",
    icon: "/assets/donate/friend.webp",
  },
  {
    id: "supporter",
    label: "Supporter",
    amount: 1250,
    description: "Support consistent learning opportunities.",
    icon: "/assets/donate/supporter.webp",
  },
  {
    id: "patron",
    label: "Patron",
    amount: 2500,
    description: "Enable more learners to grow and build.",
    icon: "/assets/donate/patron.webp",
  },
  {
    id: "contributor",
    label: "Contributor",
    amount: 5000,
    description: "Power programs, spaces, and resources.",
    icon: "/assets/donate/contributor.webp",
  },
  {
    id: "champion",
    label: "Champion",
    amount: 10000,
    description: "Champion the future of peer learning.",
    icon: "/assets/donate/champion.webp",
  },
];

export const orgOneTimeTiers: DonationTier[] = [
  {
    id: "community-partner",
    label: "Community Partner",
    amount: 125000,
    description: "Fuel grassroots campus programs.",
    icon: "/assets/donate/community-partner.webp",
  },
  {
    id: "catalyst-partner",
    label: "Catalyst Partner",
    amount: 275000,
    description: "Spark new initiatives across the ecosystem.",
    icon: "/assets/donate/catalyst-partner.webp",
  },
  {
    id: "growth-partner",
    label: "Growth Partner",
    amount: 500000,
    description: "Drive sustained growth for learners nationwide.",
    icon: "/assets/donate/growth-partner.webp",
  },
  {
    id: "anchor-partner",
    label: "Anchor Partner",
    amount: 1000000,
    description: "Anchor µLearn's long-term mission.",
    icon: "/assets/donate/anchor-partner.webp",
  },
];

export const orgSubscriptionTiers: DonationTier[] = [
  {
    id: "community-partner",
    label: "Community Partner",
    amount: 50000,
    description: "Fuel grassroots campus programs, every year.",
    icon: "/assets/donate/community-partner.webp",
  },
  {
    id: "catalyst-partner",
    label: "Catalyst Partner",
    amount: 100000,
    description: "Spark new initiatives, year after year.",
    icon: "/assets/donate/catalyst-partner.webp",
  },
  {
    id: "growth-partner",
    label: "Growth Partner",
    amount: 250000,
    description: "Drive sustained growth for learners nationwide.",
    icon: "/assets/donate/growth-partner.webp",
  },
  {
    id: "anchor-partner",
    label: "Anchor Partner",
    amount: 500000,
    description: "Anchor µLearn's long-term mission, annually.",
    icon: "/assets/donate/anchor-partner.webp",
  },
];

export const whereItGoesCategories: DonationCategory[] = [
  {
    label: "Campus Communities",
    description:
      "Help student chapters run peer learning circles, meetups, and projects on campus.",
    icon: Users,
  },
  {
    label: "Learning Activities",
    description: "Support open workshops, study jams, bootcamps, and community sessions.",
    icon: BookOpen,
  },
  {
    label: "MuSpace & Infrastructure",
    description: "Keep our physical space, equipment, and digital infrastructure running smoothly.",
    icon: Home,
  },
  {
    label: "Technology & Tools",
    description: "Maintain servers, platforms, and tools that power the µLearn ecosystem.",
    icon: Server,
  },
];
