import {
  Atom,
  BadgeCheck,
  Binary,
  Blocks,
  BookOpen,
  Box,
  Brain,
  BrainCircuit,
  Briefcase,
  ChartColumn,
  ChartScatter,
  Clapperboard,
  Cloud,
  CodeXml,
  Compass,
  Cpu,
  Gamepad2,
  Glasses,
  Globe,
  HardHat,
  HeartHandshake,
  IdCard,
  Infinity as InfinityIcon,
  Lightbulb,
  type LucideIcon,
  Megaphone,
  Network,
  Palette,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  SquareKanban,
  Terminal,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { Sparkles } from "@/components/sections";
import { cn } from "@/lib/utils";

export const CATEGORY_META: Record<string, { label: string; plural: string; icon: LucideIcon }> = {
  coder: { label: "Coder", plural: "Coders", icon: CodeXml },
  creative: { label: "Creative", plural: "Creatives", icon: Palette },
  maker: { label: "Maker", plural: "Makers", icon: Wrench },
  manager: { label: "Manager", plural: "Managers", icon: Briefcase },
};

/** Matched against the lowercased, alphanumeric-only group name; first hit wins. */
const DOMAIN_ICONS: [RegExp, LucideIcon][] = [
  [/uiux|uxui/, PenTool],
  [/creativedesign/, Palette],
  [/cyber/, ShieldCheck],
  [/socialgood/, HeartHandshake],
  [/generativeai|^genai$/, BrainCircuit],
  [/^ai$|machinelearning|aiml|deeplearning/, Brain],
  [/devops/, InfinityIcon],
  [/cloud/, Cloud],
  [/web/, Globe],
  [/iot|robotics/, Cpu],
  [/datastructure|^dsa$/, Binary],
  [/competitive/, Terminal],
  [/blockchain/, Blocks],
  [/datascience/, ChartScatter],
  [/analytics/, ChartColumn],
  [/game/, Gamepad2],
  [/space/, Rocket],
  [/comic/, BookOpen],
  [/humanresource/, IdCard],
  [/^muv$|movie|film/, Clapperboard],
  [/quantum/, Atom],
  [/blender|3d/, Box],
  [/projectmanagement|productmanagement/, SquareKanban],
  [/leadership/, Compass],
  [/civil/, HardHat],
  [/mobile/, Smartphone],
  [/marketing/, Megaphone],
  [/entrepreneur/, Lightbulb],
  [/arvr|vrar/, Glasses],
  [/qualityassurance|testing/, BadgeCheck],
  [/nocode|lowcode/, Workflow],
  [/beckn/, Network],
];

/** A domain icon for the group, falling back to its category's icon. */
export function groupIcon(name: string, category?: string): LucideIcon {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const match = DOMAIN_ICONS.find(([pattern]) => pattern.test(normalized));
  return match?.[1] ?? (category ? CATEGORY_META[category]?.icon : undefined) ?? Users;
}

/** Large icon panel for the detail dialog header — the light-blue panel used across the site. */
export function GroupMark({
  name,
  category,
  className,
}: {
  name: string;
  category?: string;
  className?: string;
}) {
  const Icon = groupIcon(name, category);
  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl bg-mulearn-trusty-blue/10", className)}
    >
      <Icon
        className="absolute -right-10 -bottom-10 size-56 text-mulearn/10"
        strokeWidth={1}
        aria-hidden="true"
      />
      <Sparkles className="top-5 left-5" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-24 items-center justify-center rounded-3xl bg-card text-mulearn shadow-sm ring-1 ring-mulearn/10">
          <Icon className="size-12" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
