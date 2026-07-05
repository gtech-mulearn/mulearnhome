# MuLearn Home

A web application for the MuLearn community built with Next.js, TypeScript, and Tailwind CSS

---

## 🚀 Features

- **Next.js App Router:** File-based routing for easy page management
- **TypeScript:** Type safety across the codebase
- **Tailwind CSS:** Rapid UI development
- **Modular Structure:** Organized folders for components, services, and data
- **Path Aliases:** Clean and maintainable imports
- **Centralized Data:** All static data in `src/data` folder
- **CDN Service:** Centralized asset URL management via `src/services/cdn.ts`
- **Brand Guide:** All UI and assets follow the [MuLearn Brand Guide](https://mulearn.org/r/brandguide)

---

## 📁 Folder Structure

```
mulearnhome/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Main layout (global styles, Navbar)
│   │   ├── (home)/page.tsx   # Home page (/)
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
src/lib/env/
├── env.server.ts   # Server-only secrets (API keys, tokens, etc.)
├── env.client.ts   # Public NEXT_PUBLIC_* variables
└── index.ts        # Exports serverEnv and clientEnv
```

### Setup

1. **Copy the example file:**

   ```bash
   cp .example.env .env.local
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
import { serverEnv } from "@/lib/env";

// Access validated server secrets
const ghToken = serverEnv.GH_TOKEN;
const tinaToken = serverEnv.TINA_TOKEN;
```

#### In Client-Side Code (React Components, Hooks)

```ts
import { clientEnv } from "@/lib/env";

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

**Step 2:** Add to `src/lib/env/env.client.ts`:

```ts
const clientEnvSchema = z.object({
  // ... existing fields
  NEXT_PUBLIC_MY_API_URL: z
    .string()
    .url("NEXT_PUBLIC_MY_API_URL must be a valid URL"),
});
```

**Step 3:** Use in your code:

```ts
import { clientEnv } from "@/lib/env";
console.log(clientEnv.NEXT_PUBLIC_MY_API_URL);
```

#### 2. For **Server-Side** Secrets (Never Expose)

**Step 1:** Add to `.env.local` WITHOUT `NEXT_PUBLIC_` prefix:

```bash
MY_SECRET_KEY=super-secret-value
```

**Step 2:** Add to `src/lib/env/env.server.ts`:

```ts
const serverEnvSchema = z.object({
  // ... existing fields
  MY_SECRET_KEY: z.string().min(1, "MY_SECRET_KEY is required"),
});
```

**Step 3:** Use in server code only:

```ts
import { serverEnv } from "@/lib/env";
console.log(serverEnv.MY_SECRET_KEY); // ✅ Works in API routes
```

⚠️ **Never import `serverEnv` in client components!** The system will throw an error.

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

// Custom transforms
z.string().transform((val) => val.toUpperCase());
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
- Use `clientEnv` instead, or move the logic to an API route

**Biome error: "Direct access to process.env is not allowed"**

- Replace `process.env.VAR_NAME` with `serverEnv.VAR_NAME` or `clientEnv.NEXT_PUBLIC_VAR_NAME`
- Import from `@/lib/env`

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

## ➕ Adding a New Page

- Create a folder under `src/app` (e.g., `src/app/about`)
- Add a `page.tsx` file inside it
- The route will be available at `/about`

---

## 📊 Centralized Data

- All static data (navigation, team, values, etc.) should be stored and exported from `src/data` folder.
- Import data from this file wherever needed in your components/pages.

---

## 🌐 CDN Service

- The CDN service (`src/services/cdn.ts`) centralizes asset URL management.
- Use it to fetch or construct URLs for images, files, or other static resources.

**Example usage:**

```ts
import { cdnUrl } from "@/services/cdn";
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
- **Circe Rounded** (`font-display`): Headings and display text

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

MIT
