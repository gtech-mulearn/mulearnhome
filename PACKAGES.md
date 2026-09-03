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

### **Node.js (>=20)**

* Required runtime for Next.js 16 and modern tooling

### **Bun**

* Fast JavaScript runtime and package manager
* Enforced via `preinstall` script for consistency and speed

---

## Styling & UI

### **Tailwind CSS (`tailwindcss`)**

* Utility-first CSS framework
* Enables rapid UI development and consistent design

### **tailwind-merge**

* Safely merges Tailwind class names without conflicts

### **tailwindcss-animate**

* Provides reusable animation utilities for Tailwind

### **Radix UI (`@radix-ui/*`)**

* Accessible, unstyled UI primitives
* Used for dialogs, tabs, selects, popovers, etc.

### **clsx**

* Utility for conditionally joining class names

### **class-variance-authority (CVA)**

* Manages component variants (size, state, intent) cleanly

### **lucide-react**

* Modern, tree-shakable icon library

### **react-icons**

* Additional icon sets when Lucide is insufficient

### **react-colorful**

* Lightweight color picker component
* Used for color selection interfaces across the app

---

## Animations & Effects

### **Framer Motion**

* Declarative animations for React
* Used for page transitions and micro-interactions

---

## Forms & Validation

### **react-hook-form**

* Performant form state management

### **@hookform/resolvers**

* Connects `react-hook-form` with schema validators

### **Zod**

* Schema-based validation and type inference
* Used for forms and API validation

---

## Date & UI Utilities

### **react-day-picker**

* Accessible and customizable calendar/date picker

### **cmdk**

* Command palette component (⌘K style UI)

---

## Networking & Communication

### **Axios**

* Promise-based HTTP client

---

## Notifications & Feedback

### **sonner**

* Toast notifications with modern UI

---

## Media & Assets

### **sharp**

* High-performance image processing
* Used for image optimization scripts

### **html-to-image**

* Converts DOM nodes to images (share cards, certificates)

### **swiper**

* Touch-enabled sliders and carousels

---

## Code Quality & Tooling

### **TypeScript**

* Static typing for safer, scalable code

### **Biome (`@biomejs/biome`)**

* Unified formatter and linter
* Replaces ESLint + Prettier for speed and simplicity

### **Husky**

* Git hooks (pre-commit, commit-msg)

### **lint-staged**

* Runs checks only on staged files

### **commitlint**

* Enforces conventional commit messages

---

## Build & CSS Tooling

### **PostCSS**

* CSS transformation pipeline

### **Autoprefixer**

* Adds vendor prefixes for browser compatibility

### **@tailwindcss/postcss**

* Integrates Tailwind with PostCSS

---

## Developer Utilities

### **Octokit**

* Official SDK for interacting with GitHub’s APIs to manage repositories, issues, pull requests, and more.

### **baseline-browser-mapping**

* Ensures consistent browser support targets

---

## Summary

This stack prioritizes:

* ⚡ Performance (Bun, Turbopack, Biome)
* ♿ Accessibility (Radix UI)
* 🎨 Modern UI/UX (Tailwind, Framer Motion)
* 🧠 Type Safety (TypeScript + Zod)
* 🧩 Scalability (Next.js App Router)

If you plan to add a dependency, ensure it aligns with these goals. Also dont install packages which has similar functions of the above packages.
