"use client";

import { useReducedMotion } from "framer-motion";
import CountUp from "react-countup";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /**
   * Trigger the count-up when scrolled into view. Use for below-the-fold
   * stats. Leave off (default) for above-the-fold stats — scroll-spy will not
   * fire if the element is already visible on load.
   */
  scrollSpy?: boolean;
}

/**
 * Reusable animated statistic. Counts up to `value` on mount, or on scroll
 * into view when `scrollSpy` is set. Respects the user's reduced-motion
 * preference by rendering the final value immediately. Keep this the single
 * CountUp entry point across pages.
 */
export function AnimatedNumber({
  value,
  prefix,
  suffix,
  duration = 2,
  className,
  scrollSpy = false,
}: AnimatedNumberProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <CountUp
      end={value}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy={scrollSpy}
      scrollSpyOnce={scrollSpy}
      className={className}
    />
  );
}
