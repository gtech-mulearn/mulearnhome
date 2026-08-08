"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { Building2, User } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  buildDonationParams,
  type DonationMode,
  type DonorType,
  parseDonationParams,
} from "@/app/donate/_components/donationUrlParams";
import TierCard from "@/app/donate/_components/TierCard";
import { MotionDiv } from "@/components/MuFramer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  type DonationTier,
  individualOneTimeTiers,
  individualSubscriptionTiers,
  orgOneTimeTiers,
  orgSubscriptionTiers,
} from "@/data/donate";
import { type DonationFormData, donationFormSchema } from "@/lib/schemas/donation";
import { submitDonationForm, submitSubscription } from "@/services/donation";

function getTiers(donorType: DonorType, mode: DonationMode): DonationTier[] {
  if (mode === "one-time") {
    return donorType === "org" ? orgOneTimeTiers : individualOneTimeTiers;
  }
  return donorType === "org" ? orgSubscriptionTiers : individualSubscriptionTiers;
}

export default function DonationForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [donorType, setDonorType] = useState<DonorType>("individual");
  const [mode, setMode] = useState<DonationMode>("one-time");
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [hydrated, setHydrated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      donationName: "",
      email: "",
      phone: "",
      panNumber: "",
      address: "",
      isOrganisation: false,
      organisationName: "",
      termsAccepted: false,
      donationAmount: 0,
      donationType: "one-time",
    },
  });

  const totalAmount = watch("donationAmount") || 0;
  const isOrganisation = donorType === "org";

  // Seed initial selection from the URL once on mount (deep-linking / shared links).
  useEffect(() => {
    const parsed = parseDonationParams(searchParams);
    const tiers = getTiers(parsed.donorType, parsed.mode);
    const matchedTier = parsed.tierId ? tiers.find((t) => t.id === parsed.tierId) : undefined;

    setDonorType(parsed.donorType);
    setMode(parsed.mode);
    setValue("isOrganisation", parsed.donorType === "org", { shouldValidate: true });

    if (matchedTier) {
      setSelectedTierId(matchedTier.id);
      setValue("donationAmount", matchedTier.amount, { shouldValidate: true });
    } else if (parsed.amount) {
      setCustomAmount(String(parsed.amount));
      setValue("donationAmount", parsed.amount, { shouldValidate: true });
    }

    setValue(
      "donationType",
      parsed.mode === "one-time" ? "one-time" : parsed.donorType === "org" ? "yearly" : "monthly",
      { shouldValidate: true },
    );

    setHydrated(true);
    // Intentionally runs once: this only seeds initial state from the URL the
    // page was loaded with, it does not re-sync on every searchParams change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL in sync with the current selection after the initial hydration.
  useEffect(() => {
    if (!hydrated) return;
    const params = buildDonationParams({
      donorType,
      mode,
      tierId: selectedTierId,
      amount: selectedTierId ? null : customAmount ? Number(customAmount) : null,
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [hydrated, donorType, mode, selectedTierId, customAmount, pathname, router]);

  const currentTiers = useMemo(() => getTiers(donorType, mode), [donorType, mode]);

  const cadenceLabel = mode === "one-time" ? "One-Time" : isOrganisation ? "Per Year" : "Per Month";

  const handleDonorTypeChange = (value: string) => {
    const next = value as DonorType;
    setDonorType(next);
    setValue("isOrganisation", next === "org", { shouldValidate: true });
    setSelectedTierId(null);
    setCustomAmount("");
    setValue("donationAmount", 0, { shouldValidate: true });
    setValue(
      "donationType",
      mode === "one-time" ? "one-time" : next === "org" ? "yearly" : "monthly",
      {
        shouldValidate: true,
      },
    );
  };

  const handleModeChange = (value: string) => {
    const next = value as DonationMode;
    setMode(next);
    setSelectedTierId(null);
    setCustomAmount("");
    setValue("donationAmount", 0, { shouldValidate: true });
    setValue(
      "donationType",
      next === "one-time" ? "one-time" : isOrganisation ? "yearly" : "monthly",
      { shouldValidate: true },
    );
  };

  const handleTierSelect = (tier: DonationTier) => {
    setSelectedTierId(tier.id);
    setCustomAmount("");
    setValue("donationAmount", tier.amount, { shouldValidate: true });
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedTierId(null);
    setValue("donationAmount", parseFloat(value) || 0, { shouldValidate: true });
  };

  const onSubmit = async (data: DonationFormData) => {
    try {
      const isOneTime = data.donationType === "one-time";

      toast.loading(
        isOneTime ? "Processing your donation..." : "Setting up your recurring support...",
        { id: "donation-loading" },
      );

      const payload = {
        amount: data.donationAmount,
        name: data.name,
        email: data.email,
        mobile: data.phone,
        pan: data.panNumber,
        address: data.address,
        donationType: data.donationType,
        isOrganisation: data.isOrganisation,
        organisationName: data.organisationName,
        donationName: data.donationName,
      };

      if (isOneTime) {
        await submitDonationForm(payload);
      } else {
        await submitSubscription(payload);
      }

      toast.dismiss("donation-loading");
    } catch (error) {
      toast.dismiss("donation-loading");
      console.error("Donation submission error:", error);
    }
  };

  return (
    <section
      id="donate-form"
      className="w-full scroll-mt-24 px-4 py-20 sm:px-6 md:px-12 lg:px-24 xl:px-40"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-3">
          <Tabs value={donorType} onValueChange={handleDonorTypeChange}>
            <TabsList className="rounded-full bg-mulearn-greyish/10 p-1">
              <div className="relative grid w-full grid-cols-2">
                <MotionDiv
                  className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-mulearn"
                  animate={{ x: isOrganisation ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
                <TabsTrigger
                  value="individual"
                  className="relative z-10 gap-2 rounded-full px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-mulearn-whitish"
                >
                  <User className="size-4" /> Individual / Alumni
                </TabsTrigger>
                <TabsTrigger
                  value="org"
                  className="relative z-10 gap-2 rounded-full px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-mulearn-whitish"
                >
                  <Building2 className="size-4" /> Organisation / Institution
                </TabsTrigger>
              </div>
            </TabsList>
          </Tabs>

          <Tabs value={mode} onValueChange={handleModeChange}>
            <TabsList className="w-full max-w-xs rounded-full bg-mulearn-greyish/10 p-1">
              <div className="relative grid w-full grid-cols-2">
                <MotionDiv
                  className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-mulearn"
                  animate={{ x: mode === "subscription" ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
                <TabsTrigger
                  value="one-time"
                  className="relative z-10 rounded-full data-[state=active]:bg-transparent data-[state=active]:text-mulearn-whitish"
                >
                  One-time
                </TabsTrigger>
                <TabsTrigger
                  value="subscription"
                  className="relative z-10 rounded-full data-[state=active]:bg-transparent data-[state=active]:text-mulearn-whitish"
                >
                  Subscription
                </TabsTrigger>
              </div>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-mulearn-blackish sm:text-3xl">
            {mode === "one-time"
              ? "One-time Donation"
              : isOrganisation
                ? "Annual Subscription"
                : "Monthly Subscription"}
          </h2>
          <p className="mt-1 text-mulearn-gray-600">
            {mode === "one-time"
              ? "Choose a pre-defined amount or enter a custom amount."
              : "Sustained support. Lasting impact."}
          </p>
        </div>

        <div
          className={
            mode === "subscription" && !isOrganisation
              ? "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5"
              : "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          }
        >
          <AnimatePresence mode="popLayout">
            {currentTiers.map((tier, i) => (
              <MotionDiv
                key={`${donorType}-${mode}-${tier.id}`}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
              >
                <TierCard
                  tier={tier}
                  isSelected={selectedTierId === tier.id}
                  cadenceLabel={cadenceLabel}
                  onSelect={() => handleTierSelect(tier)}
                />
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-mulearn-gray-600/20 bg-white p-5 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-mulearn-blackish">Custom Amount</p>
            <p className="text-sm text-mulearn-gray-600">
              Enter any amount you wish to contribute.
            </p>
          </div>
          <div className="relative w-full sm:w-40">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-mulearn-gray-600">
              ₹
            </span>
            <Input
              type="number"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          <div className="space-y-6 border-t border-mulearn-gray-600/10 pt-8">
            <h3 className="text-lg font-bold text-mulearn-blackish">Your Details</h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" {...register("name")} placeholder="John Doe" />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="donationName">
                  Donation Name{" "}
                  <span className="font-normal text-mulearn-gray-600/60">(Optional)</span>
                </Label>
                <Input
                  id="donationName"
                  {...register("donationName")}
                  placeholder="e.g. In honor of someone special"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" type="tel" {...register("phone")} placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pan">
                  PAN Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="pan"
                  {...register("panNumber", {
                    onChange: (e) => {
                      e.target.value = e.target.value.toUpperCase();
                    },
                  })}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                />
                {errors.panNumber && (
                  <p className="text-xs text-red-500">{errors.panNumber.message}</p>
                )}
              </div>

              {isOrganisation && (
                <div className="space-y-2">
                  <Label htmlFor="orgName">
                    Organisation Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="orgName" {...register("organisationName")} placeholder="Acme Corp" />
                  {errors.organisationName && (
                    <p className="text-xs text-red-500">{errors.organisationName.message}</p>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                Address <span className="text-red-500">*</span>
              </Label>
              <Textarea id="address" {...register("address")} placeholder="Full address" rows={3} />
              {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="termsAccepted" {...register("termsAccepted")} className="mt-0.5" />
            <div className="flex-1">
              <Label
                htmlFor="termsAccepted"
                className="text-xs font-normal leading-relaxed text-mulearn-gray-600"
              >
                I agree to the{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener"
                  className="text-mulearn hover:underline"
                >
                  Terms
                </a>
                ,{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener"
                  className="text-mulearn hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/refund-policy"
                  target="_blank"
                  rel="noopener"
                  className="text-mulearn hover:underline"
                >
                  Refund Policy
                </a>
                .
              </Label>
              {errors.termsAccepted && (
                <p className="mt-1 text-xs text-red-500">{errors.termsAccepted.message}</p>
              )}
            </div>
          </div>

          {errors.donationAmount && (
            <p className="text-xs text-red-500">{errors.donationAmount.message}</p>
          )}

          <div className="flex flex-col items-center justify-between gap-4 border-t border-mulearn-gray-600/10 pt-6 sm:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-mulearn-gray-600">
                Total Contribution
              </p>
              <p className="text-3xl font-bold tracking-tight text-mulearn-blackish">
                ₹{totalAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full text-base font-semibold sm:w-auto"
              disabled={!isValid || totalAmount === 0}
            >
              {mode === "one-time" ? "Proceed to Payment" : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
