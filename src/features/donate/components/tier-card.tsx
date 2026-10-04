"use client";

import { Check } from "lucide-react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DonationTier } from "../types/donate.types";

interface TierCardProps {
  tier: DonationTier;
  isSelected: boolean;
  cadenceLabel: string;
  onSelect: () => void;
}

export function TierCard({ tier, isSelected, cadenceLabel, onSelect }: TierCardProps) {
  const isImageIcon = typeof tier.icon === "string";
  const Icon = isImageIcon ? null : tier.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      className={cn(
        "relative flex h-full flex-col items-center rounded-xl border p-5 text-center transition-all duration-200 cursor-pointer",
        isSelected
          ? "border-mulearn bg-mulearn/5 ring-2 ring-mulearn/30"
          : "border-mulearn-gray-600/20 bg-white hover:border-mulearn/40",
      )}
    >
      {isImageIcon ? (
        <MuImage
          src={tier.icon as string}
          alt=""
          width={72}
          height={72}
          className="h-18 w-18 object-contain"
        />
      ) : (
        Icon && (
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-full",
              isSelected ? "bg-mulearn text-mulearn-whitish" : "bg-mulearn/10 text-mulearn",
            )}
          >
            <Icon className="size-6" />
          </div>
        )
      )}

      <h4 className="mt-3 text-lg font-bold text-mulearn">{tier.label}</h4>
      <p className="mt-1 text-2xl font-bold tabular-nums text-mulearn-blackish">
        ₹{tier.amount.toLocaleString("en-IN")}
      </p>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-mulearn-gray-600/60">
        {cadenceLabel}
      </p>
      <p className="mt-2 flex-1 text-sm leading-snug text-mulearn-gray-600">{tier.description}</p>

      <Button type="button" variant="outline" size="sm" className="mt-4 w-full rounded-full">
        {isSelected ? (
          <>
            <Check className="size-4" /> Selected
          </>
        ) : (
          "Select"
        )}
      </Button>
    </div>
  );
}
