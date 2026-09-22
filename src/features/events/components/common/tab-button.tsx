import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TabButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ icon: Icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <Button
      variant={"outline"}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 font-semibold rounded-full ${
        isActive ? "sm:shadow-xl scale-105" : "text-gray-500"
      }`}
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
      {label}
    </Button>
  );
}
