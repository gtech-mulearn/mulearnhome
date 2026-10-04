# Packages Overview

This document explains **why each major library is used** in the µLearn Next.js project. It helps contributors quickly understand the stack and avoid unnecessary dependencies.

---

## Core Framework & Runtime

### **Next.js (`next`)**

* Primary React framework for the project
* Enables App Router, Server Components, Server Actions, and optimized builds
* Used with **Turbopack** for faster local development

### **React & React DOM (`react`, `react-dom`)**

* Core UI library
* Version 19 enables modern concurrent features

### **@next/third-parties**

* Optimized wrappers for third-party embeds (`GoogleAnalytics`, `YouTubeEmbed`)
* Used in the analytics provider and every video embed (home, testimonials, art of teaching)

### **Node.js (>=20)**

* Required runtime for Next.js 16 and modern tooling

### **Bun**

* Fast JavaScript runtime and package manager
* Enforced via `preinstall` script for consistency and speed

---

## Environment & Config

### **@t3-oss/env-nextjs**

* Type-safe, Zod-validated environment variables (`src/config/env.client.ts`, `src/config/env.server.ts`)
* Fails fast at boot if a required variable is missing or invalid, and prevents server secrets leaking into the client bundle

---

## Styling & UI

### **Tailwind CSS (`tailwindcss`)**

* Utility-first CSS framework
* Enables rapid UI development and consistent design

### **tailwind-merge**

* Safely merges Tailwind class names without conflicts

### **tailwindcss-animate**

* Provides reusable animation utilities for Tailwind (loaded as a Tailwind plugin in `globals.css`)

### **Radix UI (`@radix-ui/*`)**

* Accessible, unstyled UI primitives
* Used for accordion, avatar, dialog, label, navigation-menu, popover, radio-group, select,
  separator, slot, switch, and tabs (`src/components/ui/`)

### **clsx**

* Utility for conditionally joining class names

### **class-variance-authority (CVA)**

* Manages component variants (size, state, intent) cleanly — e.g. the `Button` variant system

### **lucide-react**

* Modern, tree-shakable icon library — the primary icon set across the app

### **react-icons**

* Brand icon set (`react-icons/fa`) — required for all social platform icons (LinkedIn, Instagram,
  Facebook, Twitter, YouTube, GitHub, WhatsApp) instead of lucide-react, since lucide lacks brand-accurate marks

### **react-colorful**

* Lightweight color picker component
* Used in the campus logo generator's color selection UI

---

## Animations & Effects

### **Framer Motion**

* Declarative animations for React
* Used for page transitions and micro-interactions across nearly every feature

* Also powers `AnimatedCounter` (`src/shared/components/animated-counter/`), the animated
  number counter used across stats sections (landing stats, careers, testimonials, etc.) —
  built directly on Framer Motion's `animate`/`useInView`

---

## Forms & Validation

### **react-hook-form**

* Performant form state management
* Used for the donation form

### **@hookform/resolvers**

* Connects `react-hook-form` with Zod schemas (`zodResolver`)

### **Zod**

* Schema-based validation and type inference
* Used for forms, API payloads, and environment variable schemas

### **react-google-recaptcha-v3**

* Invisible reCAPTCHA v3 integration for the contact form

---

## UI Utilities

### **cmdk**

* Command palette / combobox primitive, powers the events search & filter UI

---

## Networking & Communication

### **date-fns**

* Date formatting/parsing utilities (careers listings, events)

---

## Notifications & Feedback

### **sonner**

* Toast notifications with modern UI — form submissions, donation flow

---

## Media & Assets

### **sharp**

* High-performance image processing
* Used by `scripts/optimize-images.ts` and `scripts/generate-blur-placeholders.ts`

### **html-to-image**

* Converts DOM nodes to images (campus logo generator's download/share flow)

### **embla-carousel-react**

* Touch-enabled carousel engine powering the `Carousel` primitive (`src/components/ui/carousel.tsx`)

### **canvas-confetti**

* Celebratory confetti effect on the donation success page

### **dompurify**

* Sanitizes user-influenced HTML/SVG before rendering (`src/lib/sanitize.ts`)

---

## Code Quality & Tooling

### **TypeScript**

* Static typing for safer, scalable code

### **Biome (`@biomejs/biome`)**

* Unified formatter and linter
* Replaces ESLint + Prettier for speed and simplicity
* Also enforces this repo's `kebab-case` filename convention and disallows direct
  `process.env` access

### **Husky**

* Git hooks (pre-commit, commit-msg, pre-push)

### **lint-staged**

* Runs checks only on staged files

### **commitlint (`@commitlint/cli`, `@commitlint/config-conventional`)**

* Enforces conventional commit messages

---

## Build & CSS Tooling

### **PostCSS**

* CSS transformation pipeline

### **@tailwindcss/postcss**

* Integrates Tailwind v4 with PostCSS (handles vendor prefixing internally — no separate
  `autoprefixer` needed)

---

## Developer Utilities

### **baseline-browser-mapping**

* Ensures consistent browser support targets, consumed automatically by the build tooling

---

## Summary

This stack prioritizes:

* ⚡ Performance (Bun, Turbopack, Biome)
* ♿ Accessibility (Radix UI)
* 🎨 Modern UI/UX (Tailwind, Framer Motion)
* 🧠 Type Safety (TypeScript + Zod)
* 🧩 Scalability (Next.js App Router + feature-folder architecture)

If you plan to add a dependency:

* Ensure it aligns with these goals
* Don't install a package that duplicates the function of one already listed above
* Add it to this file in the relevant section, explaining *why* it's needed
* Periodically re-check this list against actual usage (`grep -rl "<package>" src/`) —
  an entry here with zero real consumers should be removed from `package.json` and this
  file together
