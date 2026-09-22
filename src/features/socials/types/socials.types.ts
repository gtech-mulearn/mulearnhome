import type { IconType } from "react-icons";

export type SocialLinks = {
  icon: IconType;
  title: string;
  subtitle?: string;
  href: string;
  action?: "follow" | "subscribe";
  color: string;
};
