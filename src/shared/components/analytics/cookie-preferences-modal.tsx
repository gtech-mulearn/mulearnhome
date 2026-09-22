"use client";

/**
 * Cookie Preferences Modal
 *
 * Granular control over cookie consent categories.
 * Premium minimal design with accessibility.
 */

import { AnimatePresence } from "framer-motion";
import { BarChart3, Cookie, Megaphone, Settings, Shield, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { MotionDiv } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { ConsentCategories } from "@/lib/analytics/types";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  pendingCategories: Omit<ConsentCategories, "essential"> | null;
  onUpdateCategory: (category: keyof Omit<ConsentCategories, "essential">, value: boolean) => void;
  onSave: () => void;
  onRejectAll: () => void;
  onAcceptAll: () => void;
}

interface CategoryConfig {
  key: keyof Omit<ConsentCategories, "essential">;
  title: string;
  description: string;
  icon: React.ElementType;
  isEssential?: boolean;
}

const categories: (
  | CategoryConfig
  | {
      key: "essential";
      title: string;
      description: string;
      icon: React.ElementType;
      isEssential: true;
    }
)[] = [
  {
    key: "essential" as const,
    title: "Essential",
    description: "Required for the website to function. Cannot be disabled.",
    icon: Shield,
    isEssential: true,
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Help us understand how visitors use this website.",
    icon: BarChart3,
  },
  {
    key: "performance",
    title: "Performance",
    description: "Measure page load times to improve speed.",
    icon: Settings,
  },
  {
    key: "marketing",
    title: "Marketing",
    description: "Used to personalize content and ads.",
    icon: Megaphone,
  },
];

export function CookiePreferencesModal({
  isOpen,
  onClose,
  pendingCategories,
  onUpdateCategory,
  onSave,
  onRejectAll,
  onAcceptAll,
}: CookiePreferencesModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
          {/* Backdrop */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <MotionDiv
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preferences-title"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-mulearn-whitish shadow-2xl dark:bg-gray-950"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-mulearn-greyish/30 px-5 py-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mulearn-greyish/20 dark:bg-gray-800">
                  <Cookie
                    className="h-4 w-4 text-mulearn-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="preferences-title"
                  className="text-lg font-semibold text-mulearn-blackish dark:text-white"
                >
                  Cookie Settings
                </h2>
              </div>

              <Button
                type="button"
                ref={closeButtonRef}
                onClick={onClose}
                variant="ghost"
                size="icon-sm"
                className="bg-transparent text-mulearn-gray-600 hover:text-mulearn-whitish"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Categories */}
            <div className="max-h-[50vh] overflow-y-auto p-5">
              <div className="space-y-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isEssential = category.key === "essential";
                  const isEnabled = isEssential
                    ? true
                    : (pendingCategories?.[
                        category.key as keyof Omit<ConsentCategories, "essential">
                      ] ?? false);

                  return (
                    <div
                      key={category.key}
                      className="flex items-start justify-between gap-4 rounded-xl border border-mulearn-greyish/30 p-4 dark:border-gray-800"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-mulearn-gray-600 dark:text-gray-500">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-mulearn-blackish dark:text-white">
                            {category.title}
                          </h3>
                          <p className="mt-0.5 text-xs text-mulearn-gray-600 dark:text-gray-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Toggle */}
                      <div className="shrink-0">
                        {isEssential ? (
                          <Switch checked disabled aria-label="Essential (always on)" />
                        ) : (
                          <Switch
                            checked={isEnabled}
                            aria-label={`Toggle ${category.title}`}
                            onCheckedChange={(checked) =>
                              onUpdateCategory(
                                category.key as keyof Omit<ConsentCategories, "essential">,
                                checked,
                              )
                            }
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-mulearn-greyish/30 px-5 py-4 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="link"
                  onClick={onRejectAll}
                  className="h-auto p-0 text-sm text-mulearn-gray-600 no-underline hover:text-mulearn-blackish hover:underline dark:hover:text-white"
                >
                  Reject all
                </Button>
                <span className="text-mulearn-greyish dark:text-gray-700">·</span>
                <Button
                  type="button"
                  variant="link"
                  onClick={onAcceptAll}
                  className="h-auto p-0 text-sm text-mulearn-gray-600 no-underline hover:text-mulearn-blackish hover:underline dark:hover:text-white"
                >
                  Accept all
                </Button>
              </div>
              <Button size="sm" onClick={onSave}>
                Save
              </Button>
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
}
