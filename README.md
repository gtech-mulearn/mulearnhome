# MuLearn Home
A web application for the MuLearn community built with Next.js, TypeScript, and Tailwind CSS
---
## 🚀 Features

- **Next.js App Router:** File-based routing for easy page management
- **TypeScript:** Type safety across the codebase
- **Tailwind CSS:** Rapid UI development
- **Feature-Folder Architecture:** Each route/feature owns its own `api`, `hooks`, `schemas`, `types`, `data`, and `components` under `src/features/<name>`
- **Path Aliases:** Clean and maintainable imports (`@/`, `@/config/`)
- **Shared Kernel:** Cross-feature code (API helpers, hooks, schemas, types, UI) lives in `src/shared`, imported only via its barrel
- **Centralized Environment Config:** Type-safe, Zod-validated env vars in `src/config/`
- **Brand Guide:** All UI and assets follow the [MuLearn Brand Guide](https://mulearn.org/r/brandguide)

---

## 📁 Folder Structure

```
mulearnhome/
├── src/
│   ├── app/                   # Next.js App Router routes — thin pages only
│   │   ├── layout.tsx         # Root layout (global styles, Navbar, Footer)
│   │   ├── page.tsx           # Home page (/)
│   │   ├── team/page.tsx      # /team route
│   │   ├── be-a-part/         # Nested sub-routes (campus, company, enablers, learners)
│   │   └── api/                # Route Handlers (contact, captcha)
│   ├── config/                  # Environment config (env.client.ts, env.server.ts, api.ts, site.ts)
│   ├── features/               # One folder per route/feature (see below)
│   ├── shared/                  # Cross-feature kernel: api, hooks, schemas, types, components, data
│   ├── components/
│   │   ├── layouts/            # Navbar, Footer, MuImage, motion wrappers, etc.
│   │   └── ui/                  # shadcn/ui primitives (Button, Card, Dialog, ...)
│   ├── lib/                     # Generic utilities (fetcher, sanitize, cn, redirect helpers)
│   └── globals.d.ts             # TypeScript CSS module declaration
├── public/                       # Static assets (images, fonts, etc.)
├── package.json                  # Project metadata and dependencies
├── tsconfig.json                 # TypeScript config (path aliases)
├── biome.json                    # Biome linter/formatter config
├── next.config.ts                # Next.js config
├── postcss.config.mjs            # Tailwind/PostCSS config
├── README.md                     # Project documentation
├── PACKAGES.md                   # Why each dependency exists
└── CONTRIBUTION.md               # Contribution guidelines
```

### The feature-folder pattern

Every route lives in `src/features/<name>/` with only the kind-folders it actually needs:

```
src/features/<name>/
├── api/            # fetcher-based calls to the backend (only if the route hits an API)
├── hooks/          # "use client" hooks (useState/useEffect) for genuinely interactive pages
├── schemas/        # Zod schemas + inferred types (forms, API payloads)
├── types/          # Plain TypeScript types/interfaces
├── data/           # Static data owned by this feature
├── components/     # <name>-view.tsx (the route's composed page) + supporting components
└── index.ts        # Barrel — the ONLY way another module may import from this feature
```

`src/app/<route>/page.tsx` stays a thin wrapper: it imports the feature's `<Name>View` from
`@/features/<name>` and renders it, keeping only Next.js-specific exports (`metadata`,
`dynamic`) in `app/`.

**Import rule:** only import a feature or `shared` via its top-level `index.ts` barrel
(`@/features/<name>` or `@/shared`) — never a deep path like `@/features/events/api/events.api`.
Internal files inside a feature may still import siblings by relative path.

---

## 🔐 Environment Variables Management

This project uses a **production-grade environment variable system** with full type safety and validation.

### Overview

- ✅ **Type-safe:** Full TypeScript inference for all env vars
- ✅ **Validated:** Zod schemas ensure correctness at boot time
- ✅ **Fail-fast:** App crashes on startup if required variables are missing
- ✅ **Secure:** Server secrets never leak to client bundle
- ✅ **Linted:** Biome enforces usage of centralized env system

### File Structure

```
src/config/
├── env.server.ts   # Server-only secrets (API keys, tokens, etc.)
├── env.client.ts   # Public NEXT_PUBLIC_* variables
├── api.ts          # API base URLs/config
└── site.ts         # Site-wide constants
```

### Setup

1. **Copy the example file:**

   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your values:**
   Edit `.env.local` with your actual credentials (never commit this file!)

3. **Start the app:**

   ```bash
   bun run dev
   ```

   The app will validate all variables on boot and crash with clear error messages if anything is missing or invalid.

### Usage

#### In Server-Side Code (API Routes, Server Components, Server Actions)

```ts
import { serverEnv } from "@/config/env.server";

// Access validated server secrets
const webhook = serverEnv.DISCORD_CONTACT_WEBHOOK;
```

#### In Client-Side Code (React Components, Hooks)

```ts
import { clientEnv } from "@/config/env.client";

// Access public client variables
const apiUrl = clientEnv.NEXT_PUBLIC_API_BASE_URL;
const cdnUrl = clientEnv.NEXT_PUBLIC_CDN_URL;
```

### Adding New Environment Variables

#### 1. For **Client-Side** Variables (Safe to Expose)

**Step 1:** Add to `.env.local` with `NEXT_PUBLIC_` prefix:

```bash
NEXT_PUBLIC_MY_API_URL=https://api.example.com
```

**Step 2:** Add to `src/config/env.client.ts`:

```ts
export const clientEnv = createEnv({
  client: {
    // ... existing fields
    NEXT_PUBLIC_MY_API_URL: z.string().url("NEXT_PUBLIC_MY_API_URL must be a valid URL"),
  },
  // ...
});
```

**Step 3:** Use in your code:

```ts
import { clientEnv } from "@/config/env.client";
console.log(clientEnv.NEXT_PUBLIC_MY_API_URL);
```

#### 2. For **Server-Side** Secrets (Never Expose)

**Step 1:** Add to `.env.local` WITHOUT `NEXT_PUBLIC_` prefix:

```bash
MY_SECRET_KEY=super-secret-value
```

**Step 2:** Add to `src/config/env.server.ts`:

```ts
export const serverEnv = createEnv({
  server: {
    // ... existing fields
    MY_SECRET_KEY: z.string().min(1, "MY_SECRET_KEY is required"),
  },
  // ...
});
```

**Step 3:** Use in server code only:

```ts
import { serverEnv } from "@/config/env.server";
console.log(serverEnv.MY_SECRET_KEY); // ✅ Works in API routes
```

⚠️ **Never import `serverEnv` in client components!** It will throw at runtime.

### Validation Rules

Use Zod validators for robust type checking:

```ts
// String validators
z.string(); // Any string
z.string().min(1); // Non-empty string
z.string().email(); // Email format
z.string().url(); // Valid URL

// Number validators
z.number(); // Any number
z.number().positive(); // Positive numbers only
z.coerce.number(); // Convert string to number

// Enum validators
z.enum(["dev", "staging", "prod"]); // Only these values

// Optional with defaults
z.string().optional(); // Can be undefined
z.string().default("fallback"); // Use default if missing
```

### Security Best Practices

- ✅ **DO** use `NEXT_PUBLIC_` for variables that need to be in the client bundle (API URLs, public keys)
- ❌ **DON'T** expose secrets, tokens, or passwords with `NEXT_PUBLIC_`
- ✅ **DO** validate all variables with Zod schemas
- ❌ **DON'T** use `process.env` directly anywhere (Biome will catch this)
- ✅ **DO** add meaningful error messages in your Zod schemas
- ❌ **DON'T** commit `.env.local` to version control

### Troubleshooting

**Error: "Invalid server environment variables"**

- Check your `.env.local` file
- Ensure all required variables are set
- Check that values match validation rules (e.g., valid URLs)

**Error: "serverEnv was imported on the client side!"**

- You're importing `serverEnv` in a client component
- Use `clientEnv` instead, or move the logic to a Server Component/Route Handler

**Biome error: "Direct access to process.env is not allowed"**

- Replace `process.env.VAR_NAME` with `serverEnv.VAR_NAME` or `clientEnv.NEXT_PUBLIC_VAR_NAME`
- Import from `@/config/env.server` or `@/config/env.client`

---

## 🏁 Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd mulearnhome
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## ➕ Adding a New Feature/Page

1. Create `src/features/<name>/` with only the kind-folders you need (`components/` at minimum).
2. Build `<name>-view.tsx` inside `components/` — the composed page content.
3. Add `index.ts` barrels at every level (each kind-folder, then the feature root).
4. Create `src/app/<route>/page.tsx` as a thin wrapper importing `<Name>View` from `@/features/<name>`.
5. If the route needs data shared with other features, put it in `src/shared/data` instead of duplicating it.
6. Run `bun run validate` before opening a PR.

---

## 🌐 CDN URLs

- `cdnUrl(path)` (from `@/shared`) centralizes asset URL construction against
  `clientEnv.NEXT_PUBLIC_CDN_URL`.

**Example usage:**

```ts
import { cdnUrl } from "@/shared";
const logoUrl = cdnUrl("images/logo.png");
```

---

## 🎨 MuLearn UI System

All UI in this project uses the MuLearn brand color palette and font system:

### Colors

Defined as CSS variables in `src/app/globals.css`:

- `--mulearn`: #0961F5;
- `--mulearn-trusty`: linear-gradient(135deg, #2E85FE 0%, #AF2EE6 100%)
- `--mulearn-trusty-blue`: #2E85FE
- `--mulearn-duke-purple`: #AF2EE6
- `--mulearn-greyish`: #c4c4c4
- `--mulearn-blackish`: #1a1a1a
- `--mulearn-whitish`: #fefefe

### Extended Colors

Defined as CSS variables in `src/app/globals.css`:

- `--mulearn-gray-600`: #666771 (used for navigation and muted text)

**Note:**

- Do not use hardcoded color values (e.g., #2E85FE, #AF2EE6, #666771) in components. Always use the root CSS variables for colors.

### Fonts

- **Plus Jakarta Sans** (`font-sans`): Body and UI text
- **Bricolage Grotesque** (`font-display`): Headings and display text
- **Black Ops One** (`font-blackopsone`): Used sparingly for special display treatments
  (e.g. the manifesto page)

All three are loaded via `next/font/google` in `src/app/layout.tsx`.

### Components

- All UI components use [shadcn/ui](https://ui.shadcn.com/) with custom MuLearn variants
- See `src/components/ui/mulearn-shadcn-doc.md` for usage and extension guidelines

### Usage Example

```tsx
<Button variant={"default"}>MuLearn Button</Button>
<Card className="bg-mulearn text-mulearn-whitish">...</Card>
<h1 className="font-display text-mulearn">Heading</h1>
```

---

## 🤝 Contribution Guidelines

See [CONTRIBUTION.md](CONTRIBUTION.md) for details.

---

## 📄 License

[MIT](LICENSE)
