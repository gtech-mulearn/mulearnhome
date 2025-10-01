# MuLearn Home

A modern, scalable web application for the MuLearn community built with Next.js, TypeScript, and Tailwind CSS.

---

## 🚀 Features

- **Next.js App Router:** File-based routing for easy page management
- **TypeScript:** Type safety across the codebase
- **Tailwind CSS:** Rapid UI development
- **Modular Structure:** Organized folders for components, services, and data
- **Path Aliases:** Clean and maintainable imports
- **Centralized Data:** All static data in `src/data/data.ts`
- **CDN Service:** Centralized asset URL management via `src/services/cdn.ts`
- **Brand Guide:** All UI and assets follow the [MuLearn Brand Guide](https://mulearn.org/r/brandguide)

---

## 📁 Folder Structure

```
mulearnhome/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Main layout (global styles, Navbar)
│   │   ├── page.tsx          # Home page (/)
│   │   ├── team/page.tsx     # /team route
│   │   ├── about/page.tsx    # /about route
│   │   ├── donation/page.tsx # /donation route
│   ├── components/           # Common UI components (Navbar, Footer, etc.)
│   ├── data/                 # All static/mock data (nav, team, values, etc.)
│   ├── services/             # API, business logic, CDN service
│   │   ├── cdn.ts            # CDN service for asset URLs
│   └── globals.d.ts          # TypeScript CSS module declaration
├── public/                   # Static assets (images, fonts, etc.)
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript config (path aliases)
├── next.config.ts            # Next.js config
├── postcss.config.mjs        # Tailwind/PostCSS config
├── eslint.config.mjs         # ESLint config
├── README.md                 # Project documentation
└── CONTRIBUTION.md           # Contribution guidelines
```

---

## 🏁 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mulearnhome
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## ➕ Adding a New Page

- Create a folder under `src/app` (e.g., `src/app/about`)
- Add a `page.tsx` file inside it
- The route will be available at `/about`

---

## 📊 Centralized Data

- All static data (navigation, team, values, etc.) should be stored and exported from `src/data/data.ts`.
- Import data from this file wherever needed in your components/pages.

---

## 🌐 CDN Service

- The CDN service (`src/services/cdn.ts`) centralizes asset URL management.
- Use it to fetch or construct URLs for images, files, or other static resources.

**Example usage:**
```ts
import { getCdnUrl } from "@/services/cdn";
const logoUrl = getCdnUrl("images/logo.png");
```

---

## 🎨 Brand Guide

- All UI and assets should follow the [MuLearn Brand Guide](https://mulearn.org/r/brandguide).

---

## 🤝 Contribution Guidelines

See [CONTRIBUTION.md](CONTRIBUTION.md) for details.

---

## 📄 License

MIT
