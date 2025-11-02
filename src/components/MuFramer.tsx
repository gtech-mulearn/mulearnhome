"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

const MotionSection = React.forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  }
);

const MotionHeader = React.forwardRef<HTMLElement, HTMLMotionProps<"header">>(
  function MotionHeader({ children, ...props }, ref) {
    return (
      <motion.header ref={ref} {...props}>
        {children}
      </motion.header>
    );
  }
);

const MotionH1 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

const MotionH2 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    );
  }
);

const MotionP = React.forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>(
  function MotionP({ children, ...props }, ref) {
    return (
      <motion.p ref={ref} {...props}>
        {children}
      </motion.p>
    );
  }
);

const MotionNav = React.forwardRef<HTMLElement, HTMLMotionProps<"nav">>(
  function MotionNav({ children, ...props }, ref) {
    return (
      <motion.nav ref={ref} {...props}>
        {children}
      </motion.nav>
    );
  }
);

const MotionBQ = React.forwardRef<
  HTMLQuoteElement,
  HTMLMotionProps<"blockquote">
>(function MotionBlockquote({ children, ...props }, ref) {
  return (
    <motion.blockquote ref={ref} {...props}>
      {children}
    </motion.blockquote>
  );
});

const MotionButton = React.forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<"button">
>(function MotionButton({ children, ...props }, ref) {
  return (
    <motion.button ref={ref} {...props}>
      {children}
    </motion.button>
  );
});

const MotionFooter = React.forwardRef<HTMLElement, HTMLMotionProps<"footer">>(
  function MotionFooter({ children, ...props }, ref) {
    return (
      <motion.footer ref={ref} {...props}>
        {children}
      </motion.footer>
    );
  }
);

const MotionA = React.forwardRef<HTMLAnchorElement, HTMLMotionProps<"a">>(
  function MotionA({ children, ...props }, ref) {
    return (
      <motion.a ref={ref} {...props}>
        {children}
      </motion.a>
    );
  }
);

const MotionLi = React.forwardRef<HTMLLIElement, HTMLMotionProps<"li">>(
  function MotionLI({ children, ...props }, ref) {
    return (
      <motion.li ref={ref} {...props}>
        {children}
      </motion.li>
    );
  }
);

export {
  MotionDiv,
  MotionSection,
  MotionHeader,
  MotionH1,
  MotionH2,
  MotionP,
  MotionNav,
  MotionBQ,
  MotionButton,
  MotionFooter,
  MotionA,
  MotionLi
};
